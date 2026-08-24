import { useState } from "react";
import { X, ArrowRight, Construction } from "lucide-react";
import { Button } from "./ui";

/* ==================== DevNoticeModal ====================
   Aviso de "site em construção". Renderiza um overlay fixo assim que a
   página carrega e some quando a pessoa fecha (X, "Fechar" ou "Entendi"). */

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
    <div className="dn-overlay" role="dialog" aria-modal="true" aria-label="Aviso: site em construção">
      <div className="dn-card">
        <span className="dn-badge">
          <span className="dn-dot" />
          em construção
        </span>

        <button className="dn-close" aria-label="Fechar aviso" onClick={close}>
          <X size={16} />
        </button>

        <h2 className="dn-title">Esse site ainda está em desenvolvimento.</h2>

        <p className="dn-body">
          Estou construindo esse portfólio aos poucos, algumas partes podem estar incompletas,
          com bugs ou mudar sem aviso enquanto eu ajusto tudo.
        </p>

        <div className="dn-actions">
          <Button variant="onlight" size="sm" icon={ArrowRight} onClick={close}>
            Entendi, continuar
          </Button>
        </div>

        <hr className="dn-divider" />
        <div className="dn-footer">
          <Construction size={13} />
          Encontrou um bug? Me conta em <b>contato@evellyngomes.com</b>
        </div>
      </div>
    </div>
  );
}