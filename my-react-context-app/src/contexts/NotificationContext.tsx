import { createContext, useCallback, useMemo, useState } from "react";

interface NotificationContextType {
  message: string | null;
  showNotification: (message: string) => void;
  hideNotification: () => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string | null>(null);

  const hideNotification = useCallback(() => {
    setMessage(null);
  }, []);

  const showNotification = useCallback(
    (message: string) => {
      setMessage(message);

      setTimeout(() => {
        hideNotification();
      }, 3000);
    },
    [hideNotification]
  );

  const value = useMemo(
    () => ({
      hideNotification,
      message,
      showNotification,
    }),
    [hideNotification, message, showNotification]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
