import { client } from "..";

export class Player {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  static async load(id: string) {
    const data = await client.players.get(id);
    const player = new Player(id);

    Object.assign(player, data);

    return player;
  }

  async save() {
    await client.players.set(this.id, { ...this });
  }
}
