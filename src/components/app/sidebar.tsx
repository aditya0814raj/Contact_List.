import React from 'react';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from '@/components/ui/sidebar';
import { Users, Star, BookUser } from 'lucide-react';

type View = 'all' | 'favourites';

interface AppSidebarProps {
  currentView: View;
  onSetView: (view: View) => void;
}

export default function AppSidebar({ currentView, onSetView }: AppSidebarProps) {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <BookUser className="h-8 w-8 text-amber-800" />
            <h2 className="text-2xl font-bold text-primary">Contacts</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onSetView('all')}
              isActive={currentView === 'all'}
              tooltip="All Contacts"
            >
              <Users />
              <span>All Contacts</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onSetView('favourites')}
              isActive={currentView === 'favourites'}
              tooltip="Favourites"
            >
              <Star />
              <span>Favourites</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
