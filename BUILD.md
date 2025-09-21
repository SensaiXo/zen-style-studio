# Build Documentation for Zen Style Studio

This document provides comprehensive instructions for building and deploying the Zen Style Studio project.

## Prerequisites

- Node.js (version 16 or newer)
- npm (usually comes with Node.js)
- Git

## Development Build

To run the development server:

```bash
npm run dev
```

This will start a local development server on port 8080 (or another available port).

## Production Build

To create a production build:

```bash
npm run build
# or
npm run build:prod
```

This will:
1. Run TypeScript type checking
2. Create an optimized production build in the `dist` folder

## Verifying Your Build

To verify that your build works correctly:

```bash
npm run verify
```

This script will:
- Clean previous builds
- Install dependencies
- Lint code
- Build the project
- Verify that critical files exist in the build output

## Testing the Production Build Locally

To preview the production build locally:

```bash
npm run test:build
```

This will build the project and start a local server to preview the production build.

## Deploying the Build

The project is configured to deploy automatically through GitHub Actions when changes are pushed to the main branch.

### Manual Deployment Steps

If you need to deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory.

3. Deploy these files to your web server or hosting service.

## Important Build Configurations

- **Base URL**: The project is configured to use relative paths (`./`) for assets, which makes it suitable for deployment in subdirectories.
- **Routing**: The project uses React Router with HashRouter, which works correctly when deployed to static hosting.
- **Environment Variables**: Environment-specific variables are defined in `.env` files.

## Troubleshooting Common Build Issues

### Issue: Build fails with TypeScript errors

**Solution**: Fix the type errors in your code before building.

### Issue: Routing doesn't work in production

**Solution**: Ensure you're using HashRouter from react-router-dom or configure your server for proper URL rewriting.

### Issue: Missing assets in build

**Solution**: Check that all assets are imported correctly in your code or placed in the public directory.

## CI/CD Pipeline

The project includes GitHub Actions workflows for continuous integration and deployment:

1. `build.yml`: Runs on every push to main and pull request, verifying the build.
2. `deploy.yml`: Deploys the built application to GitHub Pages when the build workflow succeeds.

For more information on the build process, refer to the Vite documentation: https://vitejs.dev/guide/build.html