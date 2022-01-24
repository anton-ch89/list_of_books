import { useState } from "react";

export const useNewAuthor = () => {
    const [newAuthor, setNewAuthor] = useState('');
    return { newAuthor, setNewAuthor };
}
