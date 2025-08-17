// components/Message/message.ts
'use client'

import { createRoot, Root } from 'react-dom/client'
import React from 'react'
import { Message, MessageItem, MessageType } from './Message'

let container: HTMLElement | null = null
let root: Root | null = null
let messages: MessageItem[] = []

const createMessageContainer = () => {
    if (!container) {
        container = document.createElement('div')
        document.body.appendChild(container)
        root = createRoot(container)
    }
}

const rerender = () => {
    if (!root) return
    root.render(
        <Message
            messages={messages}
            onRemove={(id) => {
                messages = messages.filter((msg) => msg.id !== id)
                rerender()
            }}
        />
    )
}

const show = (type: MessageType, content: string, duration?: number) => {
    createMessageContainer()
    const id = Date.now().toString() + Math.random()
    messages.push({ id, type, content, duration })
    rerender()
}

export const message = {
    info: (text: string, duration?: number) => show('info', text, duration),
    success: (text: string, duration?: number) =>
        show('success', text, duration),
    error: (text: string, duration?: number) => show('error', text, duration),
    warning: (text: string, duration?: number) =>
        show('warning', text, duration),
    loading: (text: string, duration?: number) =>
        show('loading', text, duration),
}
