import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

export const ProtectedRoute = ({
  children,
  isAuthenticated,
}: React.PropsWithChildren<ProtectedRouteProps>): JSX.Element => {
  if (!isAuthenticated) {
    /* Para proteger la ruta simplemente se hace un
    redirect en base a una condición como isAuthenticated: */
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
