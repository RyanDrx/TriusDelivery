# Setup Guide

## Sanity Integration Setup

### Step 1: Create a Sanity Project

**Option A: Manual Setup (Recommended)**
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create new project"
3. Choose "Start from scratch"
4. Name your project (e.g., "Trius Delivery")
5. Choose a dataset name (default: "production")
6. Copy your Project ID

**Option B: Using the create-project script**
1. Install Sanity CLI: `npm install -g @sanity/cli`
2. Login to Sanity: `sanity login`
3. Run: `pnpm run create-project`

### Step 2: Set up Environment Variables

Create a `.env` file in your project root:

```bash
cp .env-sample .env
```

Edit the `.env` file with your Sanity credentials:
```
SANITY_PROJECT_ID="your-actual-project-id"
SANITY_TOKEN="your-actual-token"
SANITY_DATASET="production"
```

### Step 3: Get Your API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API section
4. Click "Add API token"
5. Name it (e.g., "Astro Integration")
6. Choose "Read" permissions
7. Copy the token

### Step 4: Start the Sanity Studio

```bash
cd studio
pnpm install
pnpm dev
```

The studio will be available at `http://localhost:3333`

### Step 5: Add Content

1. Open the Sanity Studio
2. Create a new "Page" document
3. Set the slug to "/" for the homepage
4. Add sections (Hero, Cards, etc.)
5. Publish the page

### Step 6: Run Your Astro Site

```bash
pnpm dev
```

Your site will now display content from Sanity!

## Troubleshooting

- **404 errors**: Make sure you have at least one page with slug "/" in Sanity
- **Missing content**: Check that your pages are published in Sanity Studio
- **Token errors**: Verify your API token has read permissions

## Notes

- The project will show warnings if environment variables are not set
- You can still run the project without Sanity integration for development
- Make sure to add `.env` to your `.gitignore` file to keep your credentials secure
