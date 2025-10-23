'use client';

import React, { useState, useMemo } from 'react';
import { initialContacts } from '@/lib/data';
import type { Contact } from '@/lib/types';
import AppHeader from '@/components/app/header';
import SearchBar from '@/components/app/search-bar';
import ContactList from '@/components/app/contact-list';

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddContact = (newContact: Omit<Contact, 'id' | 'avatarUrl'>) => {
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    // For simplicity, we'll cycle through avatars. A more robust solution might involve a placeholder service or user uploads.
    const avatarUrl = `https://picsum.photos/seed/${newId}/200/200`;

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: newId, avatarUrl },
    ]);
  };

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [contacts, searchTerm]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-background">
      <div className="w-full max-w-4xl p-4 md:p-8">
        <AppHeader onAddContact={handleAddContact} />
        <div className="my-6">
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <ContactList contacts={filteredContacts} />
      </div>
    </main>
  );
}
