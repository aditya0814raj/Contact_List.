'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { initialContacts } from '@/lib/data';
import type { Contact } from '@/lib/types';
import AppHeader from '@/components/app/header';
import SearchBar from '@/components/app/search-bar';
import ContactList from '@/components/app/contact-list';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AppSidebar from '@/components/app/sidebar';
import { SidebarInset } from '@/components/ui/sidebar';

type View = 'all' | 'favourites';

const CONTACTS_STORAGE_KEY = 'contacts';

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentView, setCurrentView] = useState<View>('all');
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedContacts = localStorage.getItem(CONTACTS_STORAGE_KEY);
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      } else {
        setContacts(initialContacts);
      }
    } catch (error) {
      console.error("Failed to parse contacts from localStorage", error);
      setContacts(initialContacts);
    }
  }, []);

  useEffect(() => {
    // Only run on the client
    if (typeof window !== 'undefined') {
        localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);


  const handleAddContact = (newContact: Omit<Contact, 'id' | 'avatarUrl' | 'isFavourite'>) => {
    const newId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    const randomImage = PlaceHolderImages[Math.floor(Math.random() * PlaceHolderImages.length)];
    const avatarUrl = randomImage.imageUrl;

    setContacts(prevContacts => [
      ...prevContacts,
      { ...newContact, id: newId, avatarUrl, isFavourite: false },
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

  const handleToggleFavourite = (contactId: number) => {
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === contactId
          ? { ...contact, isFavourite: !contact.isFavourite }
          : contact
      )
    );
  };

  const filteredContacts = useMemo(() => {
    let filtered = contacts;

    if (currentView === 'favourites') {
      filtered = filtered.filter(contact => contact.isFavourite);
    }

    if (searchTerm) {
      filtered = filtered.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [contacts, searchTerm, currentView]);
  
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <>
      <AppSidebar currentView={currentView} onSetView={setCurrentView} />
      <SidebarInset>
        <div className="flex w-full flex-col">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <AppHeader onAddContact={handleAddContact} totalContacts={contacts.length} />
                <div className="my-6">
                    <SearchBar onSearch={setSearchTerm} />
                </div>
                <ContactList 
                    contacts={filteredContacts}
                    onUpdateContact={handleUpdateContact}
                    onDeleteContact={handleDeleteContact}
                    onToggleFavourite={handleToggleFavourite}
                />
            </div>
        </div>
      </SidebarInset>
    </>
  );
}
