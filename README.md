# Aaron's Code Canvas

**Aaron's Code Canvas** is a modern, interactive, and visually appealing personal portfolio website designed to showcase projects, skills, and provide a seamless way for potential clients or collaborators to get in touch. Built with cutting-edge web technologies, it offers a dynamic user experience with smooth animations and responsive design.

## Live Demo

**(Link to your deployed website here - e.g., https://aaronscodecanvas.vercel.app)**

## Features

-   **Interactive Project Showcase**: Display projects in a beautiful and engaging manner.
    -   **Grid View**: A card-based layout for visual previews.
    -   **List View**: A compact, detailed list for quick scanning.
-   **Advanced Filtering**: Filter projects by technologies or tags.
-   **Project Details Modal**: Click on a project to view more detailed information, including a live preview iframe.
-   **"Need a Commission?" Modal**: A dedicated contact modal with links to GitHub, Facebook, Email, and Phone.
-   **Responsive Design**: Optimized for a seamless experience across desktops, tablets, and mobile devices.
-   **Smooth Animations**: Built with Framer Motion for fluid transitions and interactive elements.
-   **Dark Mode Aesthetics**: A sleek, modern dark theme consistent throughout the application.
-   **Built with shadcn/ui**: Utilizes a collection of re-usable UI components.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (React Framework)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **State Management**: React Context API
-   **Deployment**: (e.g., [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/))

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18.x or later recommended)
-   pnpm (or npm/yarn)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd Aarons-Code-Canvas # Or your repository name
    ```

2.  **Install dependencies:**
    If using pnpm (recommended, based on `pnpm-lock.yaml`):

    ```bash
    pnpm install
    ```

    Alternatively, if you prefer npm or yarn:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    Or if using npm/yarn:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows a standard Next.js `app` directory structure:

```
Aaron-Code-Canvas/
├── app/                        # Main application folder
│   ├── components/             # UI components specific to pages or larger features
│   │   ├── CommissionButton.tsx
│   │   ├── FilterSection.tsx
│   │   ├── ProjectCarousel.tsx
│   │   └── ProjectModal.tsx
│   ├── context/                # React Context for global state management
│   │   └── ProjectContext.tsx
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── components/                 # Shared UI components (e.g., shadcn/ui)
│   └── ui/
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── public/                     # Static assets (images, fonts, etc.)
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Customization

-   **Project Data**: Project details are managed in `app/context/ProjectContext.tsx`. You can update the `projects` array in this file to add, remove, or modify your projects.
-   **Styling**:
    -   Global styles are in `app/globals.css`.
    -   Tailwind CSS utility classes are used throughout the components.
    -   Customize Tailwind configuration (colors, fonts, etc.) in `tailwind.config.js`.
-   **Contact Information**: Update contact links and details in `app/components/CommissionButton.tsx`.

## Deployment

This Next.js application can be easily deployed to platforms like [Vercel](https://vercel.com/) (recommended, by the creators of Next.js), [Netlify](https://www.netlify.com/), or any other hosting provider that supports Node.js applications.

For Vercel, connect your Git repository, and it will automatically build and deploy your site.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` file for more information (if you choose to add one).

## Author & Contact

-   **Aaron Jay Gabato**
-   **GitHub**: [AaronJay30](https://github.com/AaronJay30)
-   **Email**: aaronjaygabato30@gmail.com

---

Generated on June 12, 2025.
