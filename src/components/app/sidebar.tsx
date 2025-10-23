import React from 'react';
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { Users, Star } from 'lucide-react';

type View = 'all' | 'favourites';

interface AppSidebarProps {
  currentView: View;
  onSetView: (view: View) => void;
}

export default function AppSidebar({ currentView, onSetView }: AppSidebarProps) {
  return (
    <Sidebar>
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
