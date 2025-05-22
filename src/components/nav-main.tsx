import { Link } from "react-router-dom"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BicepsFlexed, ChartLine, UserRoundPen } from "lucide-react"

export function NavMain() {

  return(
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>     
            <SidebarMenuItem>
              <SidebarMenuButton className="cursor-pointer">
                  <Link to={"/initial"} className="flex gap-1">
                    <ChartLine size={18} />
                    <span>Tela de Clientes</span>
                  </Link>
              </SidebarMenuButton>
              
              <SidebarMenuButton className="cursor-pointer">
                  <Link to={"/management-trainning"} className="flex gap-1">
                    <BicepsFlexed size={18} />
                    <span>Base de Conhecimento</span>
                  </Link>
              </SidebarMenuButton>

              <SidebarMenuButton className="cursor-pointer">
                  <Link to={"/management-client"} className="flex gap-1">
                    <UserRoundPen size={18} />
                    <span>Gestão de Clientes</span>
                  </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )

}
