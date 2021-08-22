export class Quotes {
    public upvote:number;
    public downvote:number;
    public showDescription: boolean;
    constructor(public id: number,public authorName: string,public quoteDescription: string, public userName:string, public time:Date){
    this.showDescription=false;
    this.upvote=0;
    this.downvote=0;
}
    
    
}
