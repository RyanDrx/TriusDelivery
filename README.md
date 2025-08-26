# TriusDelivery - Astro Sanity Starter

![TriusDelivery](https://assets.stackbit.com/docs/astro-sanity-starter-thumb.jpg)

A modern delivery service website built with [Astro](https://astro.build/) and [Sanity CMS](https://www.sanity.io/), featuring visual editing capabilities with [Netlify Visual Editor](https://docs.netlify.com/visual-editor/overview/).

## 🚀 Features

- **Fast & Modern**: Built with Astro for optimal performance
- **Headless CMS**: Content management with Sanity Studio
- **Visual Editing**: Real-time content editing with Netlify Visual Editor
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Monorepo Structure**: Organized project structure with separate Sanity Studio

## 📋 Prerequisites

| Requirement | Version |
|-------------|---------|
| [Node.js](https://nodejs.org/) | v20.+ |
| [pnpm](https://pnpm.io/) | v8.+ |
| (optional) [nvm](https://github.com/nvm-sh/nvm) | For Node version management |

## 🛠️ Getting Started

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd TriusDelivery
pnpm install
```

### 2. Set Up Sanity

#### Install Sanity CLI and Authenticate

```bash
pnpm add -g @sanity/cli
sanity login
```

This will open a browser and walk you through the authentication process.

#### Create Sanity Project and Import Content

```bash
pnpm run create-project
```

_Note: You may want to sign into Sanity in the browser and rename your project._

Once the project exists, import the content:

```bash
pnpm run import {projectId}
```

Replace `{projectId}` with the project ID output from the previous command.

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
SANITY_PROJECT_ID="your-project-id"
SANITY_DATASET="production"
SANITY_TOKEN="your-editor-token"
```

To get your editor token:
1. Sign into [Sanity](https://www.sanity.io/)
2. Navigate to: `https://www.sanity.io/manage/personal/project/SANITY_PROJECT_ID/api#tokens`
3. Create a new token with read permissions

### 4. Set Up Sanity Studio

The Sanity Studio is located in the `studio` directory. Install its dependencies:

```bash
cd studio
pnpm install
```

Create a `.env` file in the `studio` directory:

```env
SANITY_STUDIO_PROJECT_ID="your-project-id"
SANITY_STUDIO_DATASET="production"
```

Start the Sanity Studio development server:

```bash
pnpm run dev
```

The studio will be available at [http://localhost:3333](http://localhost:3333).

### 5. Start Development Server

Return to the root directory and start the Astro development server:

```bash
cd ..
pnpm run dev
```

Your site will be available at [http://localhost:4321](http://localhost:4321).

### 6. Set Up Visual Editing (Optional)

Install the Netlify Visual Editor CLI:

```bash
pnpm add -g @stackbit/cli
```

Start the Stackbit development server:

```bash
stackbit dev
```

This will output your Netlify Visual Editor URL. Open it, register or sign in, and you'll have access to visual editing capabilities.

## 📁 Project Structure

```
TriusDelivery/
├── src/                    # Astro source files
│   ├── components/         # Reusable components
│   ├── data/              # Data fetching utilities
│   ├── layouts/           # Page layouts
│   ├── pages/             # Astro pages
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── studio/                # Sanity Studio
│   ├── schemaTypes/       # Content schemas
│   └── static/            # Static assets
├── sanity-export/         # Sanity import/export scripts
├── types/                 # TypeScript type definitions
└── stackbit.config.ts     # Stackbit configuration
```

## 🚀 Available Scripts

### Root Directory
- `pnpm run dev` - Start Astro development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run create-project` - Create new Sanity project
- `pnpm run import` - Import content to Sanity
- `pnpm run export` - Export content from Sanity

### Studio Directory
- `pnpm run dev` - Start Sanity Studio
- `pnpm run build` - Build Sanity Studio
- `pnpm run deploy` - Deploy Sanity Studio

## 🎨 Customization

### Adding New Content Types
1. Create new schema files in `studio/schemaTypes/`
2. Import them in `studio/schemaTypes/index.ts`
3. Update TypeScript types in `types/index.ts`

### Styling
The project uses Tailwind CSS for styling. Global styles are in `src/styles/globals.css`.

### Components
Reusable components are located in `src/components/`. Each component is built as an Astro component with TypeScript support.

## 📚 Next Steps

Here are some suggestions for extending your project:

- **Learn Visual Editing**: Check out the [Netlify Visual Editor documentation](https://docs.netlify.com/visual-editor/concepts/how-visual-editor-works/)
- **Customize Content**: Modify Sanity schemas to match your content needs
- **Add Features**: Implement additional functionality like user authentication, e-commerce, etc.
- **Deploy**: Set up deployment to Netlify, Vercel, or your preferred platform

## 🆘 Support

- **Documentation**: [Astro Docs](https://docs.astro.build/) | [Sanity Docs](https://www.sanity.io/docs)
- **Community**: [Astro Discord](https://astro.build/chat) | [Sanity Discord](https://discord.gg/sanity)
- **Issues**: [Netlify Support Forums](https://answers.netlify.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
