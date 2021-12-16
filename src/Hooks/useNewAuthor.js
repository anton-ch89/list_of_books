import { useState } from "react";
import { useAuthor } from "./useAuthor";

export const useNewAuthor = () => {
    const {author} = useAuthor();
    const [newAuthor, setNewAuthor] = useState(author);
    return { newAuthor, setNewAuthor };
}
