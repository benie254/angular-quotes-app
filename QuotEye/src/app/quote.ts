export class Quote {

    public showDescription: boolean;

    constructor(public id: number,public description: string,public author: string,public name: string,public completeDate: (Date)){

        this.showDescription = false;
    }
}
