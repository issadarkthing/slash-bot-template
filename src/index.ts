import { Client } from "discord.js";
import { config } from "dotenv";
import { CommandManager } from "@jiman24/slash-commandment";
import path from "path";

config();


const client = new Client({ intents: ["GuildMessages"] });
const commandManager = new CommandManager({ 
  client, 
  devGuildID: "899466085735223337",
});

client.on("ready", () => {
  commandManager.loadCommands(path.join(__dirname, "commands"));
})


client.on("interactionCreate", i => commandManager.handleInteraction(i));


client.login(process.env.BOT_TOKEN).then(() => console.log("bot is ready"));
