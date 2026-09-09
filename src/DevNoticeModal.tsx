import { useState } from "react";
import { X, ArrowRight, Construction } from "lucide-react";
import { Button } from "./ui";


interface DevNoticeModalProps {
  onDismiss?: () => void;
}

export function DevNoticeModal({ onDismiss }: DevNoticeModalProps) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  const close = () => {
    setOpen(false);
    onDismiss?.();
  };

  return (
    <div className="development-notice" role="dialog" aria-modal="true" aria-label="Aviso: site em construção">
      <div className="development-notice__content">
        <span className="development-notice__badge">
          <span className="development-notice__status-indicator" />
          em construção
        </span>

        <button className="development-notice__close-button" aria-label="Fechar aviso" onClick={close}>
          <X size={16} />
        </button>

        <h2 className="development-notice__title">Esse site ainda está em desenvolvimento.</h2>

        <p className="development-notice__description">
          Estou construindo esse portfólio aos poucos, algumas partes podem estar incompletas,
          com bugs ou mudar sem aviso enquanto eu ajusto tudo.
        </p>

        <div className="development-notice__actions">
          <Button variant="onlight" size="sm" icon={ArrowRight} onClick={close}>
            Entendi, continuar
          </Button>
        </div>

        <hr className="development-notice__divider" />
        <div className="development-notice__footer">
          <Construction size={13} />
          Encontrou um bug? Me conta em <b>evellynamelia2005@gmail.com</b>
        </div>
      </div>
    </div>
  );
}
