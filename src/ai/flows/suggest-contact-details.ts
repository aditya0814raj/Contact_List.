'use server';

/**
 * @fileOverview A contact detail suggestion AI agent.
 *
 * - suggestContactDetails - A function that suggests contact details.
 * - SuggestContactDetailsInput - The input type for the suggestContactDetails function.
 * - SuggestContactDetailsOutput - The return type for the suggestContactDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestContactDetailsInputSchema = z.string().describe('A prompt containing information about a contact.');
export type SuggestContactDetailsInput = z.infer<typeof SuggestContactDetailsInputSchema>;

const SuggestContactDetailsOutputSchema = z.object({
  name: z.string().describe('The name of the contact.'),
  phoneNumber: z.string().describe('The phone number of the contact.'),
  email: z.string().describe('The email address of the contact.'),
  address: z.string().describe('The address of the contact.'),
});
export type SuggestContactDetailsOutput = z.infer<typeof SuggestContactDetailsOutputSchema>;

export async function suggestContactDetails(input: SuggestContactDetailsInput): Promise<SuggestContactDetailsOutput> {
  return suggestContactDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestContactDetailsPrompt',
  input: {schema: SuggestContactDetailsInputSchema},
  output: {schema: SuggestContactDetailsOutputSchema},
  prompt: `You are a helpful assistant that suggests contact details based on a given prompt.

  The prompt will contain information about a contact, such as their name, occupation, and place of work.
  You should use this information to suggest possible contact details, including their phone number, email address, and address.
  The phone number should be a valid phone number.
  The email address should be a valid email address.
  The address should be a valid address.
  Only suggest realistic contact details. Do not include example data.

  Prompt: {{{$input}}}`,
});

const suggestContactDetailsFlow = ai.defineFlow(
  {
    name: 'suggestContactDetailsFlow',
    inputSchema: SuggestContactDetailsInputSchema,
    outputSchema: SuggestContactDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
