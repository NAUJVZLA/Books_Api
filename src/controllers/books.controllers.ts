import { BodyResponseGetAllBooks, BodyRequestCreateBook, BodyResponseGetById, BodyResponseUpdatebooks, BodyResponseCreateBook, BodyResponseDeletebooks, BodyRequestUpdatebooks } from '../models/books.model';
export class booksController {
    public domain: string;
    constructor(domain: string) {
        this.domain = domain;

    }
    //petiion get para pedir los libros 
    async allBooks(token: string, limit: number, page: number): Promise<BodyResponseGetAllBooks> {
        const headers: Record<string, string> = {
            "accept": "*/*",
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,

        };
        const requestOptions: RequestInit = {
            method: "GET",
            headers: headers,
        }

        const response: Response = await fetch(`${this.domain}/api/vi/books?limit=${limit}&page=${page}`, requestOptions)
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`)
        }
        const responseBodyGetAllBooks: BodyResponseGetAllBooks = await response.json();
        return responseBodyGetAllBooks;
    }

    async create(title: HTMLInputElement, author: HTMLInputElement, description: HTMLInputElement, summary: HTMLInputElement, publicationDate: HTMLInputElement, token: string): Promise<BodyResponseCreateBook> {

        const newBook: BodyRequestCreateBook = {
            title: title.value,
            author: author.value,
            description: description.value,
            summary: summary.value,
            publicationDate: publicationDate.value
        };
        const headers: Record<string, string> = {
            "accept": "*/*",
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }

        const request: RequestInit = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(newBook)
        };

        const response: Response = await fetch(`${this.domain}/api/vi/books`, request);
        if (!response.ok) {
            console.log(`responde body error:  ${(await response.json()).message}`);
            throw new Error(`error: ${response.status}:${response.statusText}`);
        }

        const responseBodyCreateBook: BodyResponseCreateBook = await response.json();
        return responseBodyCreateBook;
    }
    async GetById(id: string, token: string): Promise<BodyResponseGetById> {
        const headers: Record<string, string> = {
            "accept": "*/*",
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };

        const requestOptions: RequestInit = {
            method: "GET",
            headers: headers,
        }
        const response: Response = await fetch(`${this.domain}/api/v1/books/id${id}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`)
        }
        const responseBodyGetById: BodyResponseGetById = await response.json();
        return responseBodyGetById;
    }
    async update(idcatche: string, title: HTMLInputElement, author: HTMLInputElement, description: HTMLInputElement, summary: HTMLInputElement, publicationDate: HTMLInputElement, token: string): Promise<BodyResponseUpdatebooks> {
        const updatedBook: BodyRequestUpdatebooks = {
            title: title.value,
            author: author.value,
            description: description.value,
            summary: summary.value,
            publicationDate: publicationDate.value
        };

        const headers: Record<string, string> = {
            "accept": "*/*",
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
        const requestOptions: RequestInit = {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(updatedBook)
        }

        const response: Response = await fetch(`${this.domain}/api/v1/books/id${idcatche}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`)
        }
        const responseBodyUpdateBooks: BodyResponseUpdatebooks = await response.json();
        return responseBodyUpdateBooks
    }
    //borrando libros 
    async delete(id: string, token: string): Promise<BodyResponseDeletebooks> {
        const headers: Record<string, string> = {
            "accept": "*/*",
            "content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        };
        const requestOptions: RequestInit = {
            method: "DELETE",
            headers: headers,
        }
        const response: Response = await fetch(`${this.domain}/api/v1/books/id${id}`, requestOptions);
        if (!response.ok) {
            throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`)
        }
        const responseBodyDeleteBooks: BodyResponseDeletebooks = await response.json();
        return responseBodyDeleteBooks;
    }
}