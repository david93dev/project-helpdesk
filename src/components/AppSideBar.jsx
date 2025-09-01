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
import { useTheme } from "@/components/theme-provider";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";
import { Separator } from "./ui/separator";

const items = [
  { title: "Dashboard", url: "/app/dashboard", icon: ChartNoAxesCombined },
  { title: "Abrir Chamado", url: "/app/nova-chamada", icon: Headset },
  { title: "Meus Chamados", url: "/app/meus-chamados", icon: Calendar },
  { title: "Perfil", url: "/app/perfil", icon: UserCog },
  { title: "Configurações", url: "/app/configuracoes", icon: Settings },
  { title: "Sair", url: "/login", icon: LogOut },
];

export function AppSidebar() {
  const { theme, resolvedTheme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  const logoSrc = isDark ? logoWhite : logoBlack;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader>
            <div className="flex items-center">
              <div className="w-40">
                <img src={logoSrc} alt="logo" />
              </div>
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
