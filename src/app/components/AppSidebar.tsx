import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Home, Play, CreditCard, MessageCircle, Settings, Trophy, Calendar, BarChart3 } from "lucide-react"
import Link from "next/link"
import { RxAvatar } from "react-icons/rx"

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Meus Planos",
    url: "/planos",
    icon: CreditCard,
  },
  {
    title: "Vídeos",
    url: "/videos",
    icon: Play,
  },
  {
    title: "Progresso",
    url: "/progresso",
    icon: BarChart3,
  },
  {
    title: "Calendário",
    url: "/calendario",
    icon: Calendar,
  },
  {
    title: "Conquistas",
    url: "/conquistas",
    icon: Trophy,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-800">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-anderson-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AT</span>
          </div>
          <div>
            <h2 className="font-bold text-white">ANDERSON&apos;s</h2>
            <p className="text-xs text-anderson-green">TRAINING</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-gray-300 hover:text-white hover:bg-gray-800">
                    <Link href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-gray-800" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider">Suporte</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Link href="/contato">
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar com Anderson</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <Link href="/configuracoes">
                    <Settings className="w-4 h-4" />
                    <span>Configurações</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800">
          <RxAvatar className="w-8 h-8">
          </RxAvatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">João Silva</p>
            <p className="text-xs text-gray-400 truncate">Plano Premium</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
