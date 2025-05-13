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

export function TabInt() {
  return (
    <Tabs defaultValue="account" className="w-[77vw] m-auto">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="int" className="cursor-pointer">Interações</TabsTrigger>
        <TabsTrigger value="notas" className="cursor-pointer">Notas</TabsTrigger>
        <TabsTrigger value="entregas" className="cursor-pointer">Entregas</TabsTrigger>
      

      </TabsList>

      {/* Contrato */}
      <TabsContent value="int">
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
      <TabsContent value="notas">
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

       {/* Objetivo */}
       <TabsContent value="entregas">
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
    </Tabs>
  )
}
