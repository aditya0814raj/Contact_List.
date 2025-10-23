import React from 'react';
import Image from 'next/image';
import type { Contact } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, MapPin, Phone, User } from 'lucide-react';

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return name.substring(0, 2);
  };

  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={contact.avatarUrl} alt={contact.name} data-ai-hint="person portrait" />
          <AvatarFallback className="text-xl bg-primary text-primary-foreground">
            {getInitials(contact.name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl font-headline">{contact.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow justify-center space-y-3 pt-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-accent" />
          <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">{contact.email}</a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-4 w-4 text-accent" />
          <span>{contact.phoneNumber}</span>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
          <span>{contact.address}</span>
        </div>
      </CardContent>
    </Card>
  );
}
