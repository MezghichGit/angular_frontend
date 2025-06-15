export interface Provider{
    id:number,
    nom:string,
    email:string,
    details:string,
    logo:string,
    ville:string
}

export interface Article{
    id:number,
    libelle:string,
    prix:number,
    photo:string,
    provider:Provider
}