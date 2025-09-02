import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSideBar"
import { Outlet } from "react-router-dom"
import { ModeToggle } from "@/components/mode-toggle"

export function Layout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        {/* Sidebar fixa */}
        <AppSidebar />

        {/* Conteúdo principal */}
        <main className="flex-1 p-4">
          {/* Botão para abrir/fechar sidebar */}
          
            <SidebarTrigger />
          
          <div className="absolute top-0 right-0 m-4">
            <ModeToggle />
          </div>
                 
        
          {/* Aqui entram as rotas filhas */}
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
