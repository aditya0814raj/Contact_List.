import type { Contact } from './types';
import { PlaceHolderImages } from './placeholder-images';

export const initialContacts: Contact[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Maple Street, Springfield, USA',
    avatarUrl: PlaceHolderImages[0]?.imageUrl ?? 'https://picsum.photos/seed/1/200/200',
    isFavourite: false,
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob.w@example.com',
    phoneNumber: '234-567-8901',
    address: '456 Oak Avenue, Springfield, USA',
    avatarUrl: PlaceHolderImages[1]?.imageUrl ?? 'https://picsum.photos/seed/2/200/200',
    isFavourite: true,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    phoneNumber: '345-678-9012',
    address: '789 Pine Lane, Springfield, USA',
    avatarUrl: PlaceHolderImages[2]?.imageUrl ?? 'https://picsum.photos/seed/3/200/200',
    isFavourite: false,
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.p@example.com',
    phoneNumber: '456-789-0123',
    address: '101 Star Avenue, Paradise Island',
    avatarUrl: PlaceHolderImages[3]?.imageUrl ?? 'https://picsum.photos/seed/4/200/200',
    isFavourite: false,
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan.h@example.com',
    phoneNumber: '567-890-1234',
    address: '221B Baker Street, London, UK',
    avatarUrl: PlaceHolderImages[4]?.imageUrl ?? 'https://picsum.photos/seed/5/200/200',
    isFavourite: true,
  },
];
