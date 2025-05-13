import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FileCheck, TrendingUp, FileText, Info, Code, Scroll, MessageSquare } from "lucide-react"

export function Tab() {
  return (
    <Tabs defaultValue="account" className="w-[77vw] m-auto">
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="account" className="cursor-pointer flex"> <FileCheck /> Contrato</TabsTrigger>
        <TabsTrigger value="objetivo" className="cursor-pointer flex"><TrendingUp />Objetivo</TabsTrigger>
        <TabsTrigger value="briefing" className="cursor-pointer flex"><FileText />Briefing</TabsTrigger>
        <TabsTrigger value="info" className="cursor-pointer flex"><Info /> Info de Contato</TabsTrigger>
        <TabsTrigger value="prompt" className="cursor-pointer flex"><Code />Prompt</TabsTrigger>
        <TabsTrigger value="notas" className="cursor-pointer flex"><Scroll />Notas</TabsTrigger>
        <TabsTrigger value="int" className="cursor-pointer flex"><MessageSquare />Interações</TabsTrigger>

      </TabsList>

      {/* Contrato */}
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Contrato</CardTitle>
            <CardDescription>Informações contratuais do cliente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Nome do Cliente:</strong> João Silva
            </div>
            <div>
              <strong>Serviço Contratado:</strong> Gestão de Mídias Sociais
            </div>
            <div>
              <strong>Prazo:</strong> 12 meses
            </div>
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

      {/* Briefing */}
      <TabsContent value="briefing">
        <Card>
          <CardHeader>
            <CardTitle>Briefing</CardTitle>
            <CardDescription>Informações iniciais do projeto</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong>Concorrentes:</strong> Empresa X, Marca Y
            </div>
            <div>
              <strong>Diferencial da Marca:</strong> Atendimento personalizado
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Informações de Contato */}
      <TabsContent value="info">
        <Card>
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
            <CardDescription>Como entrar em contato com o cliente</CardDescription>
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
            <CardDescription>Como entrar em contato com o cliente</CardDescription>
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
    </Tabs>
  )
}
