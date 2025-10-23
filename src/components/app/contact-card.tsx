import React from 'react';
import Image from 'next/image';
import type { Contact } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, MapPin, MoreVertical, Phone } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import EditContactDialog from './edit-contact-dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog';


interface ContactCardProps {
  contact: Contact;
  onUpdateContact: (contact: Contact) => void;
  onDeleteContact: (id: number) => void;
}

export default function ContactCard({ contact, onUpdateContact, onDeleteContact }: ContactCardProps) {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return name.substring(0, 2);
  };

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white/90 backdrop-blur-sm text-slate-800">
      <CardHeader className="flex flex-row items-center justify-between gap-4 pb-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={contact.avatarUrl} alt={contact.name} className="object-cover" data-ai-hint="person portrait" />
            <AvatarFallback className="text-xl bg-primary text-primary-foreground">
              {getInitials(contact.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-xl font-headline text-slate-900">{contact.name}</CardTitle>
          </div>
        </div>
        <AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full hover:bg-slate-200">
                <MoreVertical className="h-5 w-5 text-slate-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <EditContactDialog contact={contact} onUpdateContact={onUpdateContact}>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        Edit
                    </DropdownMenuItem>
                </EditContactDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem>
                  Delete
                </DropdownMenuItem>
              </AlertDialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the contact
                for {contact.name}.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-destructive hover:bg-destructive/90"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-center space-y-3 pt-2 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-amber-800" />
          <a href={`mailto:${contact.email}`} className="hover:text-amber-800 transition-colors">{contact.email}</a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-amber-800" />
          <span>{contact.phoneNumber}</span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-amber-800 mt-1 flex-shrink-0" />
          <span>{contact.address}</span>
        </div>
      </CardContent>
    </Card>
  );
}
