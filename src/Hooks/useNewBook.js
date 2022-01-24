import { useState } from "react";

export const useNewBook = () => {
    const [newBook, setNewBook] = useState('');
    return { newBook, setNewBook }
}

