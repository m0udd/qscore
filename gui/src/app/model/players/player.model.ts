export class Player {
    constructor(public name: string,
                public email: string,
                public picture_url: string,
                public competitions_count: number) {
    }
}



export class PlayersPaginated {
    constructor(public totalCount: number,
                public players: Player[]) {
    }
}
