import {
  Calendar,
  ChartNoAxesCombined,
  Headset,
  UserCog,
  Settings,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";

const items = [
  { title: "Dashboard", url: "/app/dashboard", icon: ChartNoAxesCombined },
  { title: "Abrir Chamado", url: "/app/novo-chamado", icon: Headset },
  { title: "Meus Chamados", url: "/app/meus-chamados", icon: Calendar },
  { title: "Perfil", url: "/app/perfil", icon: UserCog },
  { title: "Configurações", url: "/app/configuracoes", icon: Settings },
  { title: "Sair", url: "/login", icon: LogOut },
];

export function AppSidebar() {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="flex items-center">
                <span className="scroll-m-20 text-[var(--color-primary)] uppercase text-center text-4xl font-extrabold tracking-tight text-balance">HELPDESK</span>
            </div>
            <Separator />
          </SidebarHeader>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
