"use client";

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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home,
  CalendarCheck,
  Palette,
  ImageIcon,
  Settings,
  LogOut,
  Sparkles,
  ChevronDown,
  User2,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSidebar } from "@/components/ui/sidebar";

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state } = useSidebar();

  const handleLogout = () => {
    router.push("/logout");
  };

  const adminMenuItems = [
    {
      title: "Prehľad",
      href: "/admin",
      icon: Home,
    },
    {
      title: "Rezervácie",
      href: "/admin/reservations",
      icon: CalendarCheck,
    },
    {
      title: "Služby",
      href: "/admin/services",
      icon: Palette,
    },
    {
      title: "Galéria",
      href: "/admin/gallery",
      icon: ImageIcon,
    },
    {
      title: "Nastavenia",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <Sidebar
      collapsible="icon"
      className={`${state === "expanded" ? "w-60" : "w-16"} transition-all duration-300 ease-in-out`}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span
                    className={`${state === "collapsed" ? "hidden" : "block"}`}
                  >
                    Emily Nails
                  </span>
                  <ChevronDown
                    className={`ml-auto ${state === "collapsed" ? "hidden" : "block"}`}
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Administrátorský panel</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/">
                    <span>Zobraziť verejnú stránku</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administrátorská navigácia</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 className="h-4 w-4" /> <span>Administrátor</span>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem
                  onClick={() => router.push("/admin/settings")}
                >
                  <span>Nastavenia profilu</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Odhlásiť sa</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
          <SidebarMenuItem className="hidden md:block">
            <SidebarTrigger />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}