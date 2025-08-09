// components/Message/Message.tsx
"use client";

import React, { useEffect } from "react";
import styles from "./Message.module.scss";

export type MessageType = "info" | "success" | "error" | "warning" | "loading";

export interface MessageItem {
  id: string;
  type: MessageType;
  content: string;
  duration?: number;
}

interface Props {
  messages: MessageItem[];
  onRemove: (id: string) => void;
}

export const Message: React.FC<Props> = ({ messages, onRemove }) => {
  useEffect(() => {
    messages.forEach(({ id, duration = 3 }) => {
      const timer = setTimeout(() => onRemove(id), duration * 1000);
      return () => clearTimeout(timer);
    });
  }, [messages, onRemove]);

  return (
    <div className={styles.container}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`${styles.message} ${styles[msg.type]}`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
};
