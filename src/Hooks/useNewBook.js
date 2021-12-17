import { useState } from "react";

export const useNewBook = () => {
    const [newBook, setNewBook] = useState('Название не задано');
    return { newBook, setNewBook }
}

