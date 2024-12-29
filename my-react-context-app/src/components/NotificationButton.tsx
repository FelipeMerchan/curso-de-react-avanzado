import { useNotification } from "../hooks/useNotification";

export const NotificationButton: React.FC = () => {
  const { showNotification } = useNotification();

  const createHandleClick = (message: string) => () => {
    showNotification(message);
  };

  return (
    <button
      onClick={createHandleClick("Tu transacción se ha realizado con éxito")}
    >
      Confirmar transacción
    </button>
  );
};
