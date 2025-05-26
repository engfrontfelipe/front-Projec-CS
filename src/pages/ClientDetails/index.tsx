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
  const [client, setClient] = useState<any>(null);
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
        setClient(data);
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

  if (!client) {
    return <div>Client not found!</div>;
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
                <h1 className="font-bold text-[19px]">{client.nome}</h1>
              </div>
              <div className="flex ml-6 gap-x-3 -mb-8">
                <Button className="rounded cursor-pointer flex" variant={"default"}>
                  <Send />
                  New Interaction
                </Button>
                <Button className="rounded cursor-pointer flex" variant={"outline"}>
                  <SquarePen />
                  Edit Client
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4 md:gap-6 md:py-6 px-6">
              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <Info /> Contact Information
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 text-sm">
                    {client.contato || "No contact information available"}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {client.email || "No contact information available"}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full rounded cursor-pointer" variant={"outline"}>
                        Update Contact
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Contact</DialogTitle>
                        <DialogDescription>
                          <Label className="mt-5">
                            Phone:
                            <Input />
                          </Label>
                          <Label className="mt-5">
                            Email:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Save</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <TrendingUp /> Goals
                </CardTitle>
                <CardContent>
                  <p className="text-gray-500 -ml-5 text-sm">
                    {client.objetivos || "No goals found at the moment."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full rounded cursor-pointer" variant={"outline"}>
                        Redefine Goals
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Redefine Goals</DialogTitle>
                        <DialogDescription>
                          <Label className="mt-5">
                            Goal:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Save</Button>
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
                    {client.prompt || "Prompt used in the AI."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full rounded cursor-pointer" variant={"outline"}>
                        Update Prompt
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Update Prompt</DialogTitle>
                        <DialogDescription>
                          Update the AI prompt used with this client.
                          <Label className="mt-5">
                            Prompt:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Save</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>

              <Card className="p-4">
                <CardTitle className="text-[20px] flex items-center gap-2 ">
                  <Scroll /> Notes
                </CardTitle>
           
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full rounded cursor-pointer" variant={"outline"}>
                        Add Notes
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Notes</DialogTitle>
                        <DialogDescription>
                          Add or edit notes for this client.
                          <Label className="mt-5">
                            Title:
                            <Input />
                          </Label>
                          <Label className="mt-5">
                            Scope:
                            <Input />
                          </Label>
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button className="rounded cursor-pointer" type="submit">Save</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>

            <Tab />

            <div className="p-5 pt-0">
              <h3 className="flex justify-center text-2xl font-medium mt-5 mb-1">
                <Sparkles className="itens-center mt-1 text-blue-600 mr-2" />
                AI Assistant
              </h3>
              <Card className="w-full p-4 mb-5">
                <h4 className="-mb-2 font-medium">Type your message:</h4>
                <Textarea placeholder="Type your message." className="resize-none" />
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Dashboard;
