import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const AuthName = location.state.token;
  const token = localStorage.getItem(`ICSTEET_2026_AuthToken_${AuthName}`);
  return token ? <Outlet context={{ AuthName }} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
