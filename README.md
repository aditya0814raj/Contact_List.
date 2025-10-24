# Contact Keeper

Contact Keeper is a simple and elegant contact list application designed to help you manage your contacts with ease. It features a clean, modern interface and leverages AI to suggest contact details, making data entry faster and more intuitive.

## Deployed Application

Link to  deployed application : https://contact-list-rbdh.vercel.app/

## Features

- **Add, Edit, and Delete Contacts**: Core CRUD functionality for managing your contact list.
- **AI-Powered Suggestions**: Describe a contact, and the app's AI assistant will suggest their name, email, phone number, and address.
- **Favourite Contacts**: Mark your most important contacts as favourites for quick access.
- **Search Functionality**: Easily find any contact by name with a responsive search bar.
- **Collapsible Sidebar**: A GitHub-style sidebar for navigating between "All Contacts" and "Favourites".
- **Modern UI/UX**: Built with ShadCN UI and Tailwind CSS for a professional and aesthetically pleasing user experience.
- **Responsive Design**: The application is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation.

### Why these libraries?

- **Next.js**: Provides a robust foundation for building server-rendered React applications with great performance and developer experience. The App Router enables more flexible layouts and improved code organization.
- **Tailwind CSS & ShadCN UI**: This combination allows for rapid UI development while maintaining a consistent and modern design. ShadCN provides beautifully crafted, accessible components that are easy to customize.
- **Genkit**: Simplifies the integration of generative AI features, allowing for powerful capabilities like the "Suggest Details" feature with minimal boilerplate.
- **React Hook Form & Zod**: A powerful duo for creating performant and type-safe forms with robust validation.

## Assumptions & Design Choices

- **Local State Management**: For this version, the application uses React's `useState` for state management. This keeps the app simple and fast for a client-side-only experience. For a more scalable application with backend data, this would be replaced with a data fetching library or a more robust state management solution.
- **AI for Convenience**: The AI feature is designed to be a helpful assistant, not a source of truth. It's great for quickly populating fields but assumes the user will verify the information.
- **UI/UX**: The design is inspired by modern web applications, prioritizing a clean, uncluttered interface. The collapsible sidebar, for instance, is a common pattern that maximizes screen real estate for the main content.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [npm](https://www.npmjs.com/) (or your preferred package manager like yarn or pnpm)

### Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add any necessary environment variables (e.g., API keys for Genkit/Google AI).

    ```
    GEMINI_API_KEY=your_api_key_here
    ```

### Running the Application

To run the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:9002](http://localhost:9002).
