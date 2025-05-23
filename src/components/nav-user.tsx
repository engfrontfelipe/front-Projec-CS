import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="">
        <Link to={"/"} className="cursor-pointer">
          <SidebarMenuButton>
            <Link className="flex items-center gap-2 cursor-pointer" to={"/"}>
              <LogOut size={20} /> Logout
            </Link>
          </SidebarMenuButton>
        </Link>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
