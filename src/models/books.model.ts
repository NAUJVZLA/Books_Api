export interface BodyResponseGetAllBooks {
    message: string;
    data: Datum[];
}

export interface Datum {
    id: string;
    title: string;
    author: string;
    description: string;
    summary: string;
    publicationDate: Date;
    createdBy: string;
    updatedBy: null;
    deletedBy: null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: null;
    files: any[];
}

export interface BodyRequestCreateBook {

    title: string,
    author: string,
    description: string,
    summary: string,
    publicationDate: string
}

export interface BodyResponseCreateBook {
    message: string,
    data: Record<string, string>;
}

export interface BodyResponseGetById {
    message: string;
    data: Record<string, string>;

}


//actualizacion de libros 
export interface BodyRequestUpdatebooks {

    title: string,
    author: string,
    description: string,
    summary: string,
    publicationDate: string
}

export interface BodyResponseUpdatebooks {
    message: string;
    data: Record<string, string>;

}


export interface BodyResponseDeletebooks {
    message: string,
    data: null
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjYWYzNzUxLTgwNDAtNGY3ZC1hZWYzLWM3OGFjZDY0MDNlMCIsImlhdCI6MTcyMTM4OTEyMSwiZXhwIjoxNzIxNDMyMzIxfQ.7b3jAMFacgmwxFpbkMOTb2ERDcNgRj1-BXOTFuBty3I