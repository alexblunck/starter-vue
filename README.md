# starter-vue
Starting point for Vue 2+ applications using webpack as the build step.

## Setup
The project uses [alexblunck/webpack-config](https://github.com/alexblunck/webpack-config) for its webpack configuration. It is included as a submodule in the `lib` directory.

```bash
git clone https://github.com/alexblunck/starter-vue --recurse-submodules
```

## Workflow

### Development
Run `npm start` to start a development server, open a browser & watch for changes.

### Production
Run `npm run build` to create a production ready build in the `dist` directory.

### Analyze
Run `npm run analyze` to analyze the production build.
