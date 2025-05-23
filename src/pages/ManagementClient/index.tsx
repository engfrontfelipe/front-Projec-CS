import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ManagementClient() {
  const [nome, setNome] = useState("");
  const [seguimento, setSeguimento] = useState("");
  const [status, setStatus] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [cs, setCs] = useState("");
  const [prompt, setPrompt] = useState("");
  const [objetivos, setObjetivos] = useState("");

  const [servicoContratado, setServicoContratado] = useState("");
  const [descricaoServico, setDescricaoServico] = useState("");
  const [prazo, setPrazo] = useState("");
  const [inicio, setInicio] = useState("");
  const [termino, setTermino] = useState("");
  const [valorMensal, setValorMensal] = useState("");
  const [condicoesPagamento, setCondicoesPagamento] = useState("");
  const [responsavelConta, setResponsavelConta] = useState("");
  const [clausulasAdicionais, setClausulasAdicionais] = useState("");
  const [assinaturaDigital, setAssinaturaDigital] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const contrato = {
      servicoContratado,
      descricaoServico,
      prazo,
      inicio,
      termino,
      valorMensal,
      condicoesPagamento,
      responsavelConta,
      clausulasAdicionais,
      assinaturaDigital,
    };

    const newClient = {
      nome,
      seguimento,
      status,
      contato,
      email,
      cs,
      prompt,
      objetivos,
      contrato: JSON.stringify(contrato),
    };

    try {
      const response = await fetch("http://localhost:5000/clientes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });

      if (response.ok) {
        alert("Cliente criado com sucesso!");
      } else {
        alert("Erro ao criar cliente");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro na comunicação com o servidor");
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="Gestão de Clientes" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <Card>
                  <div className="pl-4 -mb-6">
                    <h3 className="text-lg font-semibold">Dados do Cliente</h3>
                  </div>

                  <form className="grid grid-cols-2 p-5 gap-6" onSubmit={handleSubmit}>
                    <LabelInput label="Nome da empresa" value={nome} setValue={setNome} id="name" />
                    <LabelInput label="Seguimento" value={seguimento} setValue={setSeguimento} id="seguimento" />
                    <LabelInput label="Status" value={status} setValue={setStatus} id="status" type="select" options={["Ativo", "Inativo", "Pendente"]} />
                    <LabelInput label="Contato" value={contato} setValue={setContato} id="contato" />
                    <LabelInput label="Email" value={email} setValue={setEmail} id="email" />
                    <LabelInput label="Customer Success" value={cs} setValue={setCs} id="cs" type="select" options={["Jéssica", "Amanda", "Ana", "Gabriela"]} />
                    <LabelInput label="Prompt" value={prompt} setValue={setPrompt} id="prompt" />
                    <LabelInput label="Objetivo" value={objetivos} setValue={setObjetivos} id="objetivos" />

                    <div className="col-span-2 pt-6">
                      <h3 className="text-lg font-semibold">Dados do Contrato</h3>
                    </div>

                    <LabelInput label="Serviço Contratado" value={servicoContratado} setValue={setServicoContratado} id="servicoContratado" />
                    <LabelInput label="Descrição do Serviço" value={descricaoServico} setValue={setDescricaoServico} id="descricaoServico" />
                    <LabelInput label="Prazo" value={prazo} setValue={setPrazo} id="prazo" />
                    <LabelInput label="Início" value={inicio} setValue={setInicio} id="inicio" type="date" />
                    <LabelInput label="Término" value={termino} setValue={setTermino} id="termino" type="date" />
                    <LabelInput label="Valor Mensal" value={valorMensal} setValue={setValorMensal} id="valorMensal" />
                    <LabelInput label="Condições de Pagamento" value={condicoesPagamento} setValue={setCondicoesPagamento} id="condicoesPagamento" />
                    <LabelInput label="Responsável da Conta" value={responsavelConta} setValue={setResponsavelConta} id="responsavelConta" />
                    <LabelInput label="Cláusulas Adicionais" value={clausulasAdicionais} setValue={setClausulasAdicionais} id="clausulasAdicionais" />

                    <div className="mt-4 flex flex-col">
                      <Label htmlFor="assinaturaDigital">Assinatura Digital</Label>
                      <input
                        id="assinaturaDigital"
                        type="checkbox"
                        className="mt-1"
                        checked={assinaturaDigital}
                        onChange={(e) => setAssinaturaDigital(e.target.checked)}
                      />
                    </div>

                    <div className="mt-9 col-span-2 flex justify-end">
                      <Button type="submit" className="w-80 rounded cursor-pointer">
                        Criar Cliente
                      </Button>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

type LabelInputProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
  id: string;
  type?: string;
  options?: string[];
};

function LabelInput({ label, value, setValue, id, type = "text", options }: LabelInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={id}>{label}:</Label>
      {type === "select" && options ? (
        <select
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
        >
          <option value="">Selecione...</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={`Digite o ${label.toLowerCase()}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default ManagementClient;
