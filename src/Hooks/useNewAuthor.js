import { useState } from "react";

export const useNewAuthor = () => {
    const [newAuthor, setNewAuthor] = useState('Автор не задан');
    return { newAuthor, setNewAuthor };
}
