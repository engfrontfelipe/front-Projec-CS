import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"

function ManagementTrainning() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="Base de Conhecimento" />
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <Tabs defaultValue="briefing" className="w-auto">
                <TabsList className="grid w-full grid-cols-4 bg-accent mb-5 p-1 rounded-2xl">
                  <TabsTrigger value="briefing" className="data-[state=active]:bg-accent-foreground cursor-pointer p-1 data-[state=active]:text-white rounded-xl transition">
                    Briefing
                  </TabsTrigger>
                  <TabsTrigger value="dicas" className="data-[state=active]:bg-accent-foreground cursor-pointer p-1 data-[state=active]:text-white rounded-xl transition">
                    Dicas de Briefing
                  </TabsTrigger>
                  <TabsTrigger value="estrategias" className="data-[state=active]:bg-accent-foreground cursor-pointer p-1 data-[state=active]:text-white rounded-xl transition">
                    Estratégias
                  </TabsTrigger>
                  <TabsTrigger value="outros" className="data-[state=active]:bg-accent-foreground cursor-pointer p-1 data-[state=active]:text-white rounded-xl transition">
                     Outros
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="briefing">
                  <Card>
                    <CardHeader>
                      <CardTitle>Modelo de Briefing</CardTitle>
                      <CardDescription>Exemplo estruturado para levantamento de informações com o cliente.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p><strong>Objetivo:</strong> Aumentar reconhecimento de marca</p>
                      <p><strong>Público-alvo:</strong> Mulheres de 25 a 40 anos, interessadas em bem-estar</p>
                      <p><strong>Canais:</strong> Instagram, TikTok, Email Marketing</p>
                      <p><strong>Identidade:</strong> Visual clean, linguagem acolhedora</p>
                      <p><strong>Exemplos de Referência:</strong> Marca X, Marca Y</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="dicas">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dicas para um bom briefing</CardTitle>
                      <CardDescription>Pontos essenciais que ajudam a clarear a comunicação com o cliente.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Evite perguntas vagas — seja específico</li>
                        <li>Entenda o histórico da marca</li>
                        <li>Mapeie concorrentes diretos</li>
                        <li>Peça referências visuais e verbais</li>
                        <li>Defina prioridades: branding, performance ou conteúdo?</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="estrategias">
                  <Card>
                    <CardHeader>
                      <CardTitle>Estratégias de Conteúdo</CardTitle>
                      <CardDescription>Modelos táticos para alcançar objetivos de marketing.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p><strong>Topo de Funil:</strong> Vídeos virais e reels educativos</p>
                      <p><strong>Meio de Funil:</strong> E-books, lives, blog posts informativos</p>
                      <p><strong>Fundo de Funil:</strong> Testemunhos, comparativos, CTA direto</p>
                      <p><strong>Calendário:</strong> Publicações 4x por semana com pauta temática</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="outros">
                  <Card>
                    <CardHeader>
                      <CardTitle>Outros Recursos</CardTitle>
                      <CardDescription>Materiais úteis para apoiar a criação de estratégias.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Checklist de publicação</li>
                        <li>Ferramentas de agendamento (Meta, mLabs, etc)</li>
                        <li>Fontes gratuitas de imagens (Pexels, Unsplash)</li>
                        <li>Banco de templates (Canva, Notion)</li>
                        <li>Guia de boas práticas para redes sociais</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default ManagementTrainning;
