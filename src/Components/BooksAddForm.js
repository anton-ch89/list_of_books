import React from "react";
import styled from "styled-components";

const BooksForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  color: #292525;
  margin-top: 50px;
`;
const Input = styled.input`
  width: 250px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  height: 30px;
`;

const Button = styled.button`
  width: 250px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  height: 30px;
  font-weight: bold;
`;

const BooksAddForm = ({ setListItems, book, setBook, author, setAuthor }) => {
  return (
    <BooksForm>
      <MainTitle>Список книг</MainTitle>
      <Input
        type="text"
        placeholder="Автор"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Название книги"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />

      {book.trim() === "" || author.trim() === "" ? (
        <Button onClick={() => alert("Заполните обязательные поля")}>
          Добавить
        </Button>
      ) : (
        <Button
          onClick={() => {
            setListItems((prevList) => [{ author, book }, ...prevList]);
            setAuthor("");
            setBook("");
          }}
        >
          Добавить
        </Button>
      )}
    </BooksForm>
  );
};

export default BooksAddForm;
