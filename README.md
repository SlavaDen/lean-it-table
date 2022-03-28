# LEAN-IT Table

Demo (https://lean-it-table.vercel.app)

Stasus: Finished

Frontend application. Test task for LEAN-IT.

The test task did not specify the technologies that can be used. Therefore, the minimum number of dependencies was used.
UI components are made by yourself.

## Technologies used

- [React](https://reactjs.org/) single page application
- Module builder [Webpack] (https://webpack.js.org)
- Сode converter [Babel] (https://babeljs.io)

## Setup

1. Clone the repository and install the dependencies

```bash
npm install
```

2. Set the port to start the application, if necessary in the file webpack/webpack.dev.js. Default port 3000

```
devServer: {
  port: 3000,
},
```

3. Start the frontend application locally

```bash
npm start
```

Available commands
npm start: Start the app locally in your development environment, by default it will be in http://localhost:3000.
npm run build: Run build project
