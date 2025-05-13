import ClientDetails from "@/pages/ClientDetails"
import Dashboard from "@/pages/Dashboard"
import ManagementClient from "@/pages/ManagementClient"
import ManagementTrainning from "@/pages/ManagementTrainning"
import { Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/management-client" element={<ManagementClient />} />
      <Route path="/management-trainning" element={<ManagementTrainning />} />
      <Route path="/clientes/:id" element={<ClientDetails />} />
    </Routes>
  )
}

export default AppRoutes
