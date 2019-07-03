export class Job{
    category:string;
    company:string;
    description:string;
    location:string; 
    position:string; 
    type:string;
    url:string;

    public constructor(category:string, company:string, description:string, location:string, position:string, type:string, url:string){
        this.category = category;
        this.company = company;
        this.description = description;
        this.location = location;
        this.position = position;
        this.type = type;
        this.url = url;
    }
}