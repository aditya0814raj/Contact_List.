import React from 'react';
import type { Contact } from '@/lib/types';
import ContactCard from './contact-card';

interface ContactListProps {
  contacts: Contact[];
  onUpdateContact: (contact: Contact) => void;
  onDeleteContact: (id: number) => void;
}

export default function ContactList({ contacts, onUpdateContact, onDeleteContact }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No contacts found.</p>
        <p className="text-muted-foreground">Try adjusting your search or add a new contact.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {contacts.map((contact) => (
        <ContactCard 
          key={contact.id} 
          contact={contact} 
          onUpdateContact={onUpdateContact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
}
