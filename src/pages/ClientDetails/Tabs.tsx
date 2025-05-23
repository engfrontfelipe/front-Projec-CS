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

  useEffect(() => {
    async function fetchClientData() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/clientes/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do cliente.");
        }
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        console.error("Erro ao buscar os dados do cliente:", error);
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
    return <div>Cliente não encontrado!</div>;
  }
  return (
    <Tabs defaultValue="account" className="w-full p-5 m-auto ">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="account" className="cursor-pointer flex">
          {" "}
          <FileCheck /> Contrato
        </TabsTrigger>
       
        <TabsTrigger value="briefing" className="cursor-pointer flex">
          <FileText />
          Ordens de serviço
        </TabsTrigger>
        <TabsTrigger value="info" className="cursor-pointer flex">
          <Info /> Info de Contato
        </TabsTrigger>
    
        <TabsTrigger value="notas" className="cursor-pointer flex">
          <Scroll />
          Notas
        </TabsTrigger>
        <TabsTrigger value="int" className="cursor-pointer flex">
          <MessageSquare />
          Reuniões agendadas
        </TabsTrigger>
      </TabsList>

      {/* Contrato */}
    <TabsContent value="account">
  <Card>
    <CardHeader>
      <CardTitle>Contrato</CardTitle>
      <CardDescription>
        Informações contratuais do cliente
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 text-sm">
      {cliente.contrato ? (() => {
        const contrato = JSON.parse(cliente.contrato);
        return (
          <>
           
            <div>
              <strong>Serviço Contratado:</strong> {contrato.servicoContratado}
            </div>
            <div>
              <strong>Descrição do Serviço:</strong> {contrato.descricaoServico}
            </div>
            <div>
              <strong>Prazo:</strong> {contrato.prazo}
            </div>
            <div>
              <strong>Início:</strong> {contrato.inicio}
            </div>
            <div>
              <strong>Término:</strong> {contrato.termino}
            </div>
            <div>
              <strong>Valor Mensal:</strong> {contrato.valorMensal}
            </div>
            <div>
              <strong>Condições de Pagamento:</strong> {contrato.condicoesPagamento}
            </div>
            <div>
              <strong>Responsável pela Conta:</strong> {contrato.responsavelConta}
            </div>
            <div>
              <strong>Cláusulas Adicionais:</strong> {contrato.clausulasAdicionais}
            </div>
            <div>
              <strong>Assinatura Digital:</strong> {contrato.assinaturaDigital ? 'Sim' : 'Não'}
            </div>
          </>
        );
      })() : (
        <p>Contrato não disponível</p>
      )}
    </CardContent>
  </Card>
</TabsContent>


      {/* Objetivo */}
      <TabsContent value="objetivo">
        <Card>
          <CardHeader>
            <CardTitle>Objetivo</CardTitle>
            <CardDescription>O que o cliente deseja alcançar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Meta Principal:</strong> Aumentar o engajamento em 30%
            </div>
            <div>
              <strong>Público-alvo:</strong> Jovens de 18 a 25 anos
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="briefing">
        <Card>
          <CardHeader>
            <CardTitle>Ordens de serviço</CardTitle>
            <CardDescription>Todas O.S vinculadas a esse cliente.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm grid grid-cols-3 gap-3 ">
            <Card className="bg-accent w-full">
              <CardTitle>oi</CardTitle>
            </Card>

            <Card className="bg-accent w-full">
              <CardTitle>oi</CardTitle>
            </Card>

            <Card className="bg-accent w-full">
              <CardTitle>oi</CardTitle>
            </Card>

            <Card className="bg-accent w-full">
              <CardTitle>oi</CardTitle>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="info">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>
              Como entrar em contato com o cliente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Email:</strong> joao.silva@email.com
            </div>
            <div>
              <strong>Telefone:</strong> (11) 91234-5678
            </div>
            <div>
              <strong>Empresa:</strong> Agência Silva & Co.
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="prompt">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>
              Como entrar em contato com o cliente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Email:</strong> joao.silva@email.com
            </div>
            <div>
              <strong>Telefone:</strong> (11) 91234-5678
            </div>
            <div>
              <strong>Empresa:</strong> Agência Silva & Co.
            </div>
          </CardContent>
        </Card>
      </TabsContent>

            <TabsContent value="notas">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>
              Como entrar em contato com o cliente
            </CardDescription>
          </CardHeader>
          <CardContent className="grid  gap-3 grid-cols-3 text-sm">
                <Card className="bg-amber-50 w-full">
              <CardTitle>oi</CardTitle>
            </Card>

            <Card className="bg-amber-50 w-full">
              <CardTitle>oi</CardTitle>
            </Card>

            <Card className="bg-amber-50 w-full">
              <CardTitle>oi</CardTitle>
            </Card>

            <Card className="bg-amber-50 w-full">
              <CardTitle>oi</CardTitle>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

