import ClientDetails from "@/pages/ClientDetails";
import Dashboard from "@/pages/Dashboard";
import LoginPage from "@/pages/Login";
import ManagementClient from "@/pages/ManagementClient";
import ManagementTrainning from "@/pages/ManagementTrainning";
import PrivateRoute from "@/utils/PrivateRoutes";
import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/initial"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/management-client"
        element={
          <PrivateRoute>
            <ManagementClient />
          </PrivateRoute>
        }
      />
      <Route
        path="/management-trainning"
        element={
          <PrivateRoute>
            <ManagementTrainning />
          </PrivateRoute>
        }
      />
      <Route
        path="/clientes/:id"
        element={
          <PrivateRoute>
            <ClientDetails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
