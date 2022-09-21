import { CommandInteraction } from "discord.js";
import { Command } from "@jiman24/slash-commandment";

export default class extends Command {
  name = "test";
  description = "This is just test command";

  async exec(i: CommandInteraction) {
    i.reply("Success");
  }
}
