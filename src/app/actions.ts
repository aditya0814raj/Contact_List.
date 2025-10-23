'use server';

import { suggestContactDetails, SuggestContactDetailsOutput } from '@/ai/flows/suggest-contact-details';

export async function handleSuggestDetails(prompt: string): Promise<SuggestContactDetailsOutput | { error: string }> {
  if (!prompt) {
    return { error: 'Prompt cannot be empty.' };
  }

  try {
    const result = await suggestContactDetails(prompt);
    return result;
  } catch (error) {
    console.error('Error suggesting contact details:', error);
    return { error: 'Failed to suggest contact details. Please try again.' };
  }
}
