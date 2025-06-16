import React, { useState } from "react";
import styles from "./Modal.module.scss";
import { CloseSVG } from "@/svg/CloseSvg";
import { Input } from "../input/Input";
import { Checkbox } from "../checkbox/Checkbox";
import { Button } from "../Button/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

interface IFrom {
  name: string;
  phone: string;
  description: string;
  isAgree: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const [form, setForm] = useState<IFrom>({
    description: "",
    name: "",
    phone: "",
    isAgree: false,
  });

  const handleField = <K extends keyof IFrom>(key: K, value: IFrom[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal__header}>
          <button className={styles.modal__close} onClick={onClose}>
            <CloseSVG />
          </button>
        </div>
        <div className={styles.modal__title}>Напишите нам</div>
        <p>
          Оставьте контакты, чтобы обсудить проект и условия сотрудничества.
        </p>
        <Input
          value={form.name}
          onChange={(e) => handleField("name", e.currentTarget.value)}
          placeholder="Имя или организация"
        />
        <Input
          value={form.phone}
          onChange={(e) => handleField("phone", e.currentTarget.value)}
          placeholder="Телефон или Email"
        />
        <Input
          value={form.description}
          onChange={(e) => handleField("description", e.currentTarget.value)}
          placeholder="Расскажите про проект"
        />
        <Checkbox
          checked={form.isAgree}
          onChange={(e) => handleField("isAgree", e.currentTarget.checked)}
        />
        <Button>Отправить</Button>
      </div>
    </div>
  );
};

export default Modal;
