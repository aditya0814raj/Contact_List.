import React from 'react';
import type { Contact } from '@/lib/types';
import AddContactDialog from './add-contact-dialog';
import { BookUser } from 'lucide-react';

interface AppHeaderProps {
  onAddContact: (newContact: Omit<Contact, 'id' | 'avatarUrl'>) => void;
  totalContacts: number;
}

export default function AppHeader({ onAddContact, totalContacts }: AppHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
        <div className="flex items-center gap-3">
          <BookUser className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-headline font-bold text-primary">
            Contact List
          </h1>
        </div>
        <p className="text-muted-foreground mt-2">Total Contacts: {totalContacts}</p>
      </div>
      <AddContactDialog onAddContact={onAddContact} />
    </header>
  );
}
