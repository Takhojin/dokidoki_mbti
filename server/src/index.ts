import { AppDataSource } from "./plugins/data-source";
import fastify from "fastify";
import { config } from "dotenv";
config();

const server = fastify();
server.get("/", async (request, reply) => {
  return "Hi ! we are GaeBackSoo !! ";
});
server.get("/ping", async (request, reply) => {
  return "pong! You're Server health Good ! 😃";
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized successfully.");
    const port = parseInt(process.env.PORT);
    const host = process.env.HOST;
    server.listen({ port, host }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  })
  .catch((error) => {
    console.error("Error initializing database:", error);
    process.exit(1);
  });
