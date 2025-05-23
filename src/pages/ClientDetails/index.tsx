"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  ArrowLeft,
  Code,
  Info,
  Scroll,
  Send,
  Sparkles,
  SquarePen,
  TrendingUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Tab } from "./Tabs";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function Dashboard() {
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
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="CS Manager" />
        <div className="">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex items-center lg:px-6">
                <Link to={"/initial"}>
                  <ArrowLeft className="mr-3 ml-3 w-5 mt-1 h-5 cursor-pointer text-blue-500" />
                </Link>
                <h1 className="font-bold text-[19px]">{cliente.nome}</h1>
              </div>
              <div className="flex ml-6 gap-x-3 -mb-8">
                <Button
                  className="rounded cursor-pointer flex"
                  variant={"default"}
                >
                  <Send />
                  Nova Interação
                </Button>
                <Button
                  className="rounded cursor-pointer flex"
                  variant={"outline"}
                >
                  <SquarePen />
                  Editar Cliente
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4 md:gap-6 md:py-6 px-6">
              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <Info /> Informações de Contato
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 text-sm">
                    {cliente.contato ||
                      "Nenhuma informação de contato disponível"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {cliente.email ||
                      "Nenhuma informação de contato disponível"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full rounded cursor-pointer"
                        variant={"outline"}
                      >
                        Atualizar Contato
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Atualizar Contato</DialogTitle>
                        <DialogDescription>
                          <Label className="mt-5">
                            Telefone:
                            <Input />
                          </Label>

                             <Label className="mt-5">
                            Email:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Salvar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <TrendingUp />
                  Objetivos
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">
                    {cliente.objetivos ||
                      "Nenhum Objetivo encontrado no momento."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full rounded cursor-pointer"
                        variant={"outline"}
                      >
                        Redefinir objetivos
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Redefinir Objetivos</DialogTitle>
                        <DialogDescription>
                          <Label className="mt-5">
                            Objetivo:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Salvar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <Code /> Prompt
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">
                    {cliente.prompt || "Prompt utilizado na IA."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full rounded cursor-pointer"
                        variant={"outline"}
                      >
                        Atualizar Prompt
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Atualizar Prompt</DialogTitle>
                        <DialogDescription>
                          Atualize o prompt de IA usado com este cliente.
                           <Label className="mt-5">
                            Prompt:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Salvar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <Scroll /> Notas
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">
                    {cliente.objetivos || "Prompt utilizado na IA."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full rounded cursor-pointer"
                        variant={"outline"}
                      >
                        Inserir notas
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Notas</DialogTitle>
                        <DialogDescription>
                          Adicione ou edite as anotações deste cliente.

                           <Label className="mt-5">
                            Título:
                            <Input />
                          </Label>

                           <Label className="mt-5">
                            Escopo:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Salvar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
            <Tab />
            <div className="p-5 pt-0">
                <h3 className="flex justify-center text-2xl  font-medium mt-5 mb-1">
              <Sparkles className="itens-center mt-1 text-blue-600 mr-2" />{" "}
              Assistente AI
            </h3>
            <Card className=" w-full p-4 mb-5">
              <h4 className="-mb-2 font-medium">Digite sua mensagem:</h4>
              <Textarea
                placeholder="Digite sua mensagem."
                className="resize-none"
              />
            </Card>

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;
