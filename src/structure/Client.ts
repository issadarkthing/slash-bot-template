import { CommandManager } from "@jiman24/slash-commandment";
import Josh from "@joshdb/core";
//@ts-ignore
import provider from "@joshdb/sqlite";
import { ClientOptions, Client as DiscordClient } from "discord.js";
import { Player } from "./Player";

export class Client {
  commandManager: CommandManager;
  players: Josh<Player>;
  discordClient: DiscordClient;

  constructor(options: ClientOptions) {
    this.discordClient = new DiscordClient(options);
    this.commandManager = new CommandManager({
      client: this.discordClient,
      devGuildID: "899466085735223337",
      isDev: process.env.ENV !== "PROD",
    });

    this.players = new Josh({
      name: "players",
      provider,
    });
  }
}
