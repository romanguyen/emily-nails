'use client';

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from 'react';

export function MobileSidebarTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <Button variant="outline" size="icon" onClick={toggleSidebar}>
      <Menu className="h-6 w-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
