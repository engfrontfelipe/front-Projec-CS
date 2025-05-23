import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function ManagementClient() {
  const [name, setName] = useState("");
  const [segment, setSegment] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [cs, setCs] = useState("");
  const [prompt, setPrompt] = useState("");
  const [objectives, setObjectives] = useState("");

  const [contractedService, setContractedService] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [monthlyValue, setMonthlyValue] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [accountManager, setAccountManager] = useState("");
  const [additionalClauses, setAdditionalClauses] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const contract = {
      contractedService,
      serviceDescription,
      deadline,
      start,
      end,
      monthlyValue,
      paymentTerms,
      accountManager,
      additionalClauses,
 
    };

    const newClient = {
      name,
      segment,
      status,
      contact,
      email,
      cs,
      prompt,
      objectives,
      contract: JSON.stringify(contract),
    };

    try {
      const response = await fetch("http://localhost:5000/clientes/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });

      if (response.ok) {
        alert("Client created successfully!");
      } else {
        alert("Error creating client");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Server communication error");
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader title="Client Management" />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <Card>
                  <div className="pl-4 -mb-6">
                    <h3 className="text-lg font-semibold">Client Data</h3>
                  </div>

                  <form className="grid grid-cols-2 p-5 gap-6" onSubmit={handleSubmit}>
                    <LabelInput label="Company Name" value={name} setValue={setName} id="name" />
                    <LabelInput label="Segment" value={segment} setValue={setSegment} id="segment" />
                    <LabelInput
                      label="Status"
                      value={status}
                      setValue={setStatus}
                      id="status"
                      type="select"
                      options={["Active", "Inactive", "Pending"]}
                    />
                    <LabelInput label="Contact" value={contact} setValue={setContact} id="contact" />
                    <LabelInput label="Email" value={email} setValue={setEmail} id="email" />
                    <LabelInput
                      label="Customer Success"
                      value={cs}
                      setValue={setCs}
                      id="cs"
                      type="select"
                      options={["Jessica", "Amanda", "Ana", "Gabriela"]}
                    />
                    <LabelInput label="Prompt" value={prompt} setValue={setPrompt} id="prompt" />
                    <LabelInput label="Objective" value={objectives} setValue={setObjectives} id="objectives" />

                    <div className="col-span-2 pt-6">
                      <h3 className="text-lg font-semibold">Contract Data</h3>
                    </div>

                    <LabelInput label="Contracted Service" value={contractedService} setValue={setContractedService} id="contractedService" />
                    <LabelInput label="Service Description" value={serviceDescription} setValue={setServiceDescription} id="serviceDescription" />
                    <LabelInput label="Deadline" value={deadline} setValue={setDeadline} id="deadline" />
                    <LabelInput label="Start Date" value={start} setValue={setStart} id="start" type="date" />
                    <LabelInput label="End Date" value={end} setValue={setEnd} id="end" type="date" />
                    <LabelInput label="Monthly Value" value={monthlyValue} setValue={setMonthlyValue} id="monthlyValue" />
                    <LabelInput label="Payment Terms" value={paymentTerms} setValue={setPaymentTerms} id="paymentTerms" />
                    <LabelInput label="Account Manager" value={accountManager} setValue={setAccountManager} id="accountManager" />
                    <LabelInput label="Additional Clauses" value={additionalClauses} setValue={setAdditionalClauses} id="additionalClauses" />

                    <div className="mt-5 flex justify-end">
                      <Button type="submit" className="w-80 rounded cursor-pointer">
                        Create Client
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
          <option value="">Select...</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={`Enter ${label.toLowerCase()}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
}

export default ManagementClient;
