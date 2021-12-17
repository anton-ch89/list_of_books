import {  useState } from "react";
import { list } from "../BooksList";

export const useList = () => {
  const [listItems, setListItems] = useState(() => {
    const response = localStorage.getItem("val");
    const data = JSON.parse(response);
    return data || list;
  });
  localStorage.setItem("val", JSON.stringify(listItems));

  const response = localStorage.getItem("val");
  const data = JSON.parse(response);

  return { listItems, setListItems, data };
};
