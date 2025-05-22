import ClientDetails from "@/pages/ClientDetails"
import Dashboard from "@/pages/Dashboard"
import LoginPage from "@/pages/Login"
import ManagementClient from "@/pages/ManagementClient"
import ManagementTrainning from "@/pages/ManagementTrainning"
import { Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/initial" element={<Dashboard/>} />
      <Route path="/management-client" element={<ManagementClient />} />
      <Route path="/management-trainning" element={<ManagementTrainning />} />
      <Route path="/clientes/:id" element={<ClientDetails />} />
    </Routes>
  )
}

export default AppRoutes
