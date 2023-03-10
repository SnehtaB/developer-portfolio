interface SanityBody{
    _createdAt: string,
    _id: String,
    _rev: string,
    _updatedAt: String,
}

interface Image{
    _type: "image";
    asset:{
        _ref:string;
        _type:"reference"
    }
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email:string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image
}

export interface Technology extends SanityBody{
    _type: "skill";
    title: string;
    progress: number;
    image: Image;
}
export interface Skill extends SanityBody{
    _type: "skill";
    title: string;
    progress: number;
    image: Image;
}

export interface Experience extends SanityBody{
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorking: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody{
    _type: "project";
    title: string;
    mage: Image;  
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}



