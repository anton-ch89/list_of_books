import React, {useState} from "react";


export const useEdit = () => {
    const [edit, setEdit] = useState(null);
    return {edit, setEdit}
}