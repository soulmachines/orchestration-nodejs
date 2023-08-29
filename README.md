# Orchestration-nodejs

This is an example orchestration server implementation using Node JS.
It is set up to be used as a conversation server.

## Run it

Run the dev npm script for development, it will automatically re-start and update as you make any code changes:

```sh
npm install
npm run dev
```

You can change the server port by editing the `.env` file.

## Modify it

You can edit the `handleRequest()` function in `controller.ts`.
The example takes the input from the conversation request and sends an "echo" conversation response. It also shows examples of how to set up a welcome message, a fallback response (this can be useful if you have other skills configured in your DDNA Studio project), and a response with SM content cards.
