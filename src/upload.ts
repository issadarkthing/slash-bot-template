import { Client } from "discord.js";
import { config } from "dotenv";
import { CommandManager } from "@jiman24/slash-commandment";
import path from "path";

config();

const client = new Client({ intents: ["GuildMessages"] });
const commandManager = new CommandManager({
  client,
  devGuildID: "899466085735223337",
  isDev: process.env.ENV !== "PROD",
});

client.on("ready", async () => {
  await commandManager.registerCommands(path.join(__dirname, "commands"));
  process.exit(0);
});

client.login(process.env.BOT_TOKEN);
