import { BaseRepository } from "../base";

export class WeaponRepository extends BaseRepository{
    constructor (){
        super ('weapons')
    }

    async getAll(): Promise<void> {
        const response = await this.httpClient.get(this.path);
    }
}