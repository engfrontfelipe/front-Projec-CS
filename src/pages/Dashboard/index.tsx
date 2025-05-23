"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ArrowRight, CircleCheckBig, User } from "lucide-react";
import { Link } from "react-router-dom"; // <-- Importar o Link

interface Cliente {
  id: string;
  nome: string;
  status: string;
  seguimento: string;
}

function Dashboard() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const res = await fetch("http://localhost:5000/clientes"); 
        const data = await res.json();
        setClientes(data); 
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }

    fetchClientes();
  }, []);
  

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="CS Manager" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 flex items-center lg:px-6">
                <User className="mr-3 ml-3 text-blue-500" />
                <h1 className="font-bold text-[19px]">Customers</h1>
              </div>

              <div className="px-4 lg:px-6 grid grid-cols-3 gap-3">
                {clientes.length > 0 ? (
                  clientes.map((cliente) => (
                    <Card className="w-full p-5" key={cliente.id}>
                      <CardTitle className="flex justify-between items-center">
                        <h3 className="text-[19px]">{cliente.nome}</h3>
                        <p
  className={`text-sm flex items-center
    ${
      cliente.status === "Active"
        ? "bg-green-500 text-white"
        : cliente.status === "Inactive"
        ? "bg-red-400 text-white"
        : cliente.status === "Pending"
        ? "bg-yellow-400 text-white"
        : "bg-gray-200 text-black"
    }
    pt-[3px] pl-2 pb-[3px] pr-2 rounded-2xl`}
>
  <CircleCheckBig className="text-white w-4 mr-2" />
  {cliente.status}
</p>

                      </CardTitle>
                      <CardContent>
                        <p className="text-sm text-gray-700 -ml-6 font-medium">
                          Segment:{' '}
                          <span className="text-gray-400">
                            {cliente.seguimento}
                          </span>
                        </p>
                        <Link
                          to={`/clientes/${cliente.id}`}
                          className="text-sm text-blue-500 -ml-6 mt-3 flex items-center"
                        >
                          See details
                          <ArrowRight className="text-blue-500 w-4 pb-0.5 ml-2" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p className="text-sm ">Nenhum cliente encontrado.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;
