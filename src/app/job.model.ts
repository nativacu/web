export class Job{
    category:string;
    type: string;
    logo: string;
    company:string;
    description:string;
    location:string; 
    position:string; 
    url:string;

    // cat,company,description,location,position,type

    public constructor(category:string, company:string, description:string,location:string,position: string, type:string){
        this.category = category;
        this.company = company;
        this.description = description;
        this.location = location;
        this.position = position;
        this.type = type;
        this.logo = "n/a";
        this.url = "n/a";
    }

    setURL(url:string){
        this.url = url;
    }

    setImage(src: string){
        console.log(src);
        this.logo = src;
    }
}