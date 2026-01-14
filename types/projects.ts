export interface IProject {
    id: number;
    title: string;
    toptitle: string;
    toptext: string;
    description: string;
    category: string;
    image: string;
    section?: string;
    tasks?: string[];
    solutions?: string[];
    results?: string[]; 
}