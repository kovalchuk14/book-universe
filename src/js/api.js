import axios from "axios";

const endPoint = [
    "https://books-backend.p.goit.global/books/category-list",
    "https://books-backend.p.goit.global/books/top-books",
    "https://books-backend.p.goit.global/books/category?category=",
    "https://books-backend.p.goit.global/books/",
]


export async function getBooksCategoriesList() {
    const response = await axios.get(endPoint[0]);
    return response.data;
}

export async function getBooksList() {
    const response = await axios.get(endPoint[1]);
    return response.data;
}

export async function getBooksListByCategory(category) {
    const response = await axios.get(endPoint[2] + category);
    return response.data;
}