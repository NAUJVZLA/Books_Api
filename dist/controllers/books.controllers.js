var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class booksController {
    constructor(domain) {
        this.domain = domain;
    }
    //petiion get para pedir los libros 
    allBooks(token, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const requestOptions = {
                method: "GET",
                headers: headers,
            };
            const response = yield fetch(`${this.domain}/api/vi/books?limit=${limit}&page=${page}`, requestOptions);
            console.log(response);
            if (!response.ok) {
                throw new Error(`Error al obtener libros : ${response.status}:${response.statusText}`);
            }
            const responseBodyGetAllBooks = yield response.json();
            return responseBodyGetAllBooks;
        });
    }
    create(title, author, description, sumary, publicationDate, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = {
                title: title.value,
                author: author.value,
                description: description.value,
                summary: summary.value,
                publicationDate: publicationDate.value
            };
            const headers = {
                "accept": "*/*",
                "content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            };
            const request = {
                method: "POST",
                headers: headers,
                body: JSON.stringify(newBook)
            };
            const response = yield fetch(`${this.domain}/api/vi/books`, request);
            (!response.ok);
            {
                console.log(`responde body error:  ${(yield response.json()).message}`);
                throw new Error(`error: ${response.status}:${response.statusText}`);
            }
            const responseBodyCreateBook = yield response.json();
            return responseBodyCreateBook;
        });
    }
}
