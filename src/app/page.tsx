'use client';

import React, { useState, useMemo } from 'react';
import { initialContacts } from '@/lib/data';
import type { Contact } from '@/lib/types';
import AppHeader from '@/components/app/header';
import SearchBar from '@/components/app/search-bar';
import ContactList from '@/components/app/contact-list';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleAddContact = (newContact: Omit<Contact, 'id' | 'avatarUrl'>) => {
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    const randomImage = PlaceHolderImages[Math.floor(Math.random() * PlaceHolderImages.length)];
    const avatarUrl = randomImage.imageUrl;

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: newId, avatarUrl },
    ]);
  };

  const handleUpdateContact = (updatedContact: Contact) => {
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    toast({
      title: 'Contact Updated',
      description: `${updatedContact.name}'s details have been updated.`,
    });
  };

  const handleDeleteContact = (contactId: number) => {
    const contactToDelete = contacts.find(c => c.id === contactId);
    if (contactToDelete) {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== contactId)
      );
      toast({
        variant: 'destructive',
        title: 'Contact Deleted',
        description: `${contactToDelete.name} has been removed from your list.`,
      });
    }
  };


  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-background">
      <div className="w-full max-w-4xl p-4 md:p-8">
        <AppHeader onAddContact={handleAddContact} totalContacts={contacts.length} />
        <div className="my-6">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <ContactList 
          contacts={filteredContacts}
          onUpdateContact={handleUpdateContact}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </main>
  );
}
