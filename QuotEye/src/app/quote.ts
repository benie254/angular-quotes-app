export class Quote {

    public showDescription: boolean;

    constructor(public id: number,public description: string,public author: string,public name: string,public completeDate: (Date),public upvotes: number,public downvotes: number){

        this.showDescription = false;
    }
}
