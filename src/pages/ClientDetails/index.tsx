"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ArrowLeft, Code, FileCheck, FileText, Info, MessageSquare, Scroll, Send, Sparkles, SquarePen, TrendingUp } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Tab } from "./Tabs"

function Dashboard() {
  const { id } = useParams();  // Pega o id do cliente na URL
  const [cliente, setCliente] = useState<any>(null);  // Armazena as informações do cliente
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Função para buscar dados do cliente
    async function fetchClientData() {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/clientes/${id}`);  // URL para buscar o cliente por id
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
    return <div>Carregando...</div>; // Pode colocar um spinner de loading aqui
  }

  if (!cliente) {
    return <div>Cliente não encontrado!</div>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="CS Manager" />
        <div className="">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex items-center lg:px-6">
                <Link to={"/"}>
                  <ArrowLeft className="mr-3 ml-3 w-5 mt-1 h-5 cursor-pointer text-blue-500" />
                </Link>
                <h1 className="font-bold text-[19px]">{cliente.nome}</h1>
              </div>
              <div className="flex ml-6 gap-x-3 -mb-8">
                <Button className="rounded cursor-pointer flex" variant={"default"} ><Send />Nova Interação</Button>
                <Button className="rounded cursor-pointer flex" variant={"outline"}><SquarePen />Editar Cliente</Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4 md:gap-6 md:py-6 px-6">
              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                 <Info /> Informações de Contato
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500  text-sm">{cliente.contato || 'Nenhuma informação de contato disponível'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Atualizar Contato</Button>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2">
                <FileCheck />  Contrato
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">{cliente.contrato || 'Nenhuma informação contratual disponível no momento.'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Visualizar Contrato</Button>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                <TrendingUp />Objetivos
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">{cliente.objetivos || 'Nenhum Objetivo encontrado no momento. (defina suas métricas.)'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Definir Métricas</Button>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                <FileText />Briefing
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">{cliente.objetivos || 'Valor total de Briefings'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Criar Briefing</Button>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                <Code />Prompt
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">{cliente.objetivos || 'Prompt utilizado na IA.'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Inserir Prompt</Button>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                <Scroll />Notas
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">{cliente.objetivos || 'Prompt utilizado na IA.'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Inserir Prompt</Button>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                <MessageSquare />Interações
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">{cliente.objetivos || 'Prompt utilizado na IA.'}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded cursor-pointer" variant={"outline"}>Inserir Prompt</Button>
                </CardFooter>
              </Card>
              
            </div>
            <Tab />
            <h3 className="flex justify-center text-2xl font-medium mt-5 mb-1"><Sparkles  className="itens-center mt-1 text-blue-600 mr-2"/> Assistente AI</h3>
            <Card className=" w-[77vw] m-auto p-4 mb-5">
              <h4 className="-mb-2 font-medium">Digite sua mensagem:</h4>
              <Textarea placeholder="Digite sua mensagem." className="resize-none"/>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard
