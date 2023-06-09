# Nx + Storybook (Webpack and Vite)

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Installation

```sh
npx create-nx-workspace@latest nx-storybook-comparison

✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · react-monorepo
✔ Application name                      · admin
✔ Bundler to be used to build the application · webpack
✔ Default stylesheet format             · @emotion/styled
✔ Enable distributed caching to make your CI faster · Yes
```

```sh
npm install json2csv
npm install --save-dev @types/json2csv
npm install stream-browserify
```

```sh
npm install --save-dev @nrwl/storybook

npx nx g @nrwl/react:lib storybook-webpack

✔ What unit test runner should be used? · none
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · none

npx nx g @nrwl/storybook:configuration storybook-webpack

✔ Configure a cypress e2e app to run against the storybook instance? (y/N) · false
✔ Choose the Storybook framework that you need to use · @storybook/react

npx nx g @nrwl/react:lib storybook-vite

✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite

npx nx g @nrwl/storybook:configuration storybook-vite

>  NX  Generating @nrwl/storybook:configuration
✔ Configure a cypress e2e app to run against the storybook instance? (y/N) · false
✔ Choose the Storybook framework that you need to use · @storybook/react
```

```sh
npx nx storybook storybook-webpack
npx nx storybook storybook-vite
```

## Development server

Run `nx serve admin` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
