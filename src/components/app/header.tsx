import React from 'react';
import type { Contact } from '@/lib/types';
import AddContactDialog from './add-contact-dialog';

interface AppHeaderProps {
  onAddContact: (newContact: Omit<Contact, 'id' | 'avatarUrl'>) => void;
}

export default function AppHeader({ onAddContact }: AppHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
      <h1 className="text-4xl font-headline font-bold text-primary mb-4 sm:mb-0">
        Contact Keeper
      </h1>
      <AddContactDialog onAddContact={onAddContact} />
    </header>
  );
}
