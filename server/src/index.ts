import { AppDataSource } from "./data-source";
import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong!!!!\n";
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized successfully.");

    server.listen({ port: 8080 }, (err, address) => {
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
