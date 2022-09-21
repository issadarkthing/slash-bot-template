import { Client } from "./structure/Client";
import { config } from "dotenv";
import path from "path";

config();

export const client = new Client({ intents: ["GuildMessages"] });
const discordClient = client.discordClient;

discordClient.on("ready", () => {
  client.commandManager.loadCommands(path.join(__dirname, "commands"));
  console.log(`${discordClient.user!.username} is ready!`);
});

discordClient.on("interactionCreate", (i) =>
  client.commandManager.handleInteraction(i)
);

discordClient.login(process.env.BOT_TOKEN);
