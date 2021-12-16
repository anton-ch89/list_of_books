import { useState } from "react";
import { useBook } from "./useBook";

export const useNewBook = () => {
    const {book, setBook} = useBook();
    const [newBook, setNewBook] = useState(book);
    return { newBook, setNewBook }
}

