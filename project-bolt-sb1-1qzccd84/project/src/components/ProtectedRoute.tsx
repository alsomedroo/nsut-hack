import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { token } = useAuth(); // Ensure AuthContext is working

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
