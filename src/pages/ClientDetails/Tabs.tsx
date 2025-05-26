import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileCheck,
  FileText,
  Info,
  Scroll,
  MessageSquare,
} from "lucide-react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Tab() {
  const { id } = useParams();
  const [cliente, setCliente] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
    const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchClientData() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/clientes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error("Error fetching client data.");
        }
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchClientData();
    }
  }, [id]);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!cliente) {
    return <div>Client not found!</div>;
  }

  console.log("Client data:", cliente);
  
  return (
    <Tabs defaultValue="account" className="w-full p-5 m-auto">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="account" className="cursor-pointer flex">
          <FileCheck /> Contract
        </TabsTrigger>

        <TabsTrigger value="OS" className="cursor-pointer flex">
          <FileText />
          Work Orders
        </TabsTrigger>

        <TabsTrigger value="info" className="cursor-pointer flex">
          <Info /> Contact Info
        </TabsTrigger>

        <TabsTrigger value="notas" className="cursor-pointer flex">
          <Scroll />
          Notes
        </TabsTrigger>

        <TabsTrigger value="int" className="cursor-pointer flex">
          <MessageSquare />
          Scheduled Meetings
        </TabsTrigger>
      </TabsList>

      {/* Contract Tab */}
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Contract</CardTitle>
            <CardDescription>Client contract information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {cliente.contrato ? (() => {
              const contrato = JSON.parse(cliente.contrato);
              return (
                <>
                  <div>
                    <strong>Service:</strong> {contrato.servicoContratado}
                  </div>
                  <div>
                    <strong>Description:</strong> {contrato.descricaoServico}
                  </div>
                  <div>
                    <strong>Term:</strong> {contrato.prazo}
                  </div>
                  <div>
                    <strong>Start Date:</strong> {contrato.inicio}
                  </div>
                  <div>
                    <strong>End Date:</strong> {contrato.termino}
                  </div>
                  <div>
                    <strong>Monthly Fee:</strong> {contrato.valorMensal}
                  </div>
                  <div>
                    <strong>Payment Terms:</strong> {contrato.condicoesPagamento}
                  </div>
                  <div>
                    <strong>Account Manager:</strong> {contrato.responsavelConta}
                  </div>
                  <div>
                    <strong>Additional Clauses:</strong> {contrato.clausulasAdicionais}
                  </div>
                  <div>
                    <strong>Digital Signature:</strong> {contrato.assinaturaDigital ? "Yes" : "No"}
                  </div>
                </>
              );
            })() : (
              <p>Contract not available</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Objectives (Hardcoded Example) */}
      <TabsContent value="objetivo">
        <Card>
          <CardHeader>
            <CardTitle>Objective</CardTitle>
            <CardDescription>What the client wants to achieve</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Main Goal:</strong> Increase engagement by 30%
            </div>
            <div>
              <strong>Target Audience:</strong> Young people aged 18–25
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Work Orders */}
      <TabsContent value="OS">
        <Card>
          <CardHeader>
            <CardTitle>Work Orders</CardTitle>
            <CardDescription>All service orders linked to this client</CardDescription>
          </CardHeader>
          <CardContent className="text-sm grid grid-cols-3 gap-3">
            <Card className="bg-accent w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
            <Card className="bg-accent w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
            <Card className="bg-accent w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
            <Card className="bg-accent w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Contact Info */}
      <TabsContent value="info">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How to contact the client</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Email:</strong> {cliente.email}
            </div>
            <div>
              <strong>Phone:</strong> {cliente.contato}
            </div>
            <div>
              <strong>Company:</strong> {cliente.nome}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Notes */}
      <TabsContent value="notas">
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Important annotations about the client</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 grid-cols-3 text-sm">
            <Card className="bg-amber-50 w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
            <Card className="bg-amber-50 w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
            <Card className="bg-amber-50 w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
            <Card className="bg-amber-50 w-full">
              <CardTitle>Hello</CardTitle>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
