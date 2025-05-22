import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button" 

function ManagementClient () {

    const [nome, setNome] = useState("")
    const [seguimento, setSeguimento] = useState("")
    const [status, setStatus] = useState("")
    const [contato, setContato] = useState("")
    const [email, setEmail] = useState("")
    const [cs, setCs] = useState("")
    const [prompt, setPrompt] = useState("")
    const [objetivos, setObjetivos] = useState("")


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const newClient = {
            nome,
            seguimento,
            status,
            contato,
            email,
            cs,
            prompt,
            objetivos
        }

        try {
            const response = await fetch("http://localhost:5000/clientes/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newClient)
            })

            if (response.ok) {
                const data = await response.json()
                alert("Cliente criado com sucesso!")
                console.log(data) 
            } else {
                alert("Erro ao criar cliente")
            }
        } catch (error) {
            console.error("Erro ao enviar os dados:", error)
            alert("Erro na comunicação com o servidor")
        }
    }
    return(
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SiteHeader title="Gestão de Clientes" />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                            <div className="px-4 lg:px-6">
                                <Card className="">
                                    <form  className="grid grid-cols-2 p-5 gap-3 items-center" onSubmit={handleSubmit}>
                                        <div>
                                            <Label className="mb-2" htmlFor="name">Nome da empresa:</Label>
                                            <Input 
                                                id="name" 
                                                placeholder="Digite o nome" 
                                                value={nome}
                                                onChange={(e) => setNome(e.target.value)}
                                            />
                                        </div>

                                        <div className="">
                                            <Label className="mb-2" htmlFor="seguimento">Seguimento:</Label>
                                            <Input 
                                                id="seguimento" 
                                                placeholder="Digite o seguimento" 
                                                value={seguimento}
                                                onChange={(e) => setSeguimento(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="mb-2" htmlFor="status">Status:</Label>
                                            <Input 
                                                id="status" 
                                                placeholder="Digite o status" 
                                                value={status}
                                                onChange={(e) => setStatus(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="mb-2" htmlFor="contato">Contato:</Label>
                                            <Input 
                                                id="contato" 
                                                placeholder="Digite o contato" 
                                                value={contato}
                                                onChange={(e) => setContato(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="mb-2" htmlFor="email">Email:</Label>
                                            <Input 
                                                id="email" 
                                                placeholder="Digite o email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="mb-2" htmlFor="cs">Customer Success:</Label>
                                            <Input 
                                                id="cs" 
                                                placeholder="Digite o nome do CS" 
                                                value={cs}
                                                onChange={(e) => setCs(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="mb-2" htmlFor="prompt">Prompt:</Label>
                                            <Input 
                                                id="prompt" 
                                                placeholder="Digite o prompt" 
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label className="mb-2" htmlFor="objetivos">Objetivo:</Label>
                                            <Input 
                                                id="objetivos" 
                                                placeholder="Digite o objetivos" 
                                                value={objetivos}
                                                onChange={(e) => setObjetivos(e.target.value)}
                                            />
                                        </div>
                                        <div>

                                        </div>

                                        <div className="mt-9 ml-auto">
                                            <Button type="submit" className="w-80 rounded cursor-pointer">Criar Cliente</Button>
                                        </div>
                                    </form>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default ManagementClient
