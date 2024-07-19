import  {BodyResponseGetAllBooks,BodyRequestCreateBook}  from '../models/books.model';
export class booksController {
    public domain: string;
    constructor(domain: string){
        this.domain=domain;
        
    }
    //petiion get para pedir los libros 
    async allBooks(token:string,limit:number,page:number): Promise<BodyResponseGetAllBooks>{
        const headers: Record<string,string> ={
            "accept":"*/*",
            "content-Type":"application/json",
            "Authorization":`Bearer ${token}`,

        };
            const requestOptions: RequestInit ={
                method :"GET",
                headers: headers,
            }

            const response:Response = await fetch(`${this.domain}/api/vi/books?limit=${limit}&page=${page}`,requestOptions)
            console.log(response);
            if(!response.ok){
                throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`)
            }
            const responseBodyGetAllBooks : BodyResponseGetAllBooks= await response.json();
            return responseBodyGetAllBooks;
    }
    
    async create (title: HTMLInputElement,author:HTMLInputElement,description:HTMLInputElement,sumary:HTMLInputElement,publicationDate: HTMLInputElement,token:string):Promise<BodyRequestCreateBook>{

        const newBook: BodyRequestCreateBook={
            title: title.value,
            author: author.value,
            description: description.value,
            summary:summary.value,
            publicationDate: publicationDate.value
        };
        const headers:Record<string,string> ={
            "accept":"*/*",
            "content-Type":"application/json",
            "Authorization":`Bearer ${token}`,
        }

        const request:RequestInit = {
            method: "POST",
            headers:headers,
            body:JSON.stringify(newBook)
        };

        const response: Response= await fetch (`${this.domain}/api/vi/books`,request);
        (!response.ok) {
            console.log(`responde body error:  ${(await response.json()).message}`);
            throw new Error(`error: ${response.status}:${response.statusText}`);
    }

    const responseBodyCreateBook: BodyRequestCreateBook = await response.json();
    return responseBodyCreateBook;
}

    }