import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LogOut } from "lucide-react"

export function NavUser(){


  return (
    <SidebarMenu>
      <SidebarMenuItem>
       <SidebarMenuButton>
        <LogOut />  Log out
       </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
