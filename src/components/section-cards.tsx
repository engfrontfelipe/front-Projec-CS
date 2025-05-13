
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="p-6 lg: grid grid-cols-2 gap-4">
      <Card className="@container/card ">
        <CardHeader>
          <CardDescription className="text-xl">Total de Clientes</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="text-muted-foreground">
            Total de Clientes Cadastrados:
          </div>
          <div className=" mt-2 flex gap-1 font-medium ">
            20 Clientes
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card ">
        <CardHeader>
          <CardDescription className="text-xl">Total de Consultorias</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col items-start text-sm">
          <div className="text-muted-foreground">
            Total de Consultorias Prestadas:
          </div>
          <div className=" mt-2 flex gap-1 font-medium ">
            20 Consultorias
          </div>
        </CardFooter>
      </Card>   
    </div>
  )
}
