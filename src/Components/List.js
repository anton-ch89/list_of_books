import React from "react";
import styled from "styled-components";
import { useNewBook } from "../Hooks/useNewBook";
import { useNewAuthor } from "../Hooks/useNewAuthor";
import { useEdit } from "../Hooks/useEdit";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  margin: 20px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  min-width: 30%;
  padding: 20px;
`;

const WrapperBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  margin-left: 15px;
  color: red;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  height: 30px;
  font-weight: bold;
  margin-top: 20px;
`;

const EditButton = styled.button`
  margin-left: 15px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  height: 30px;
  margin-top: 20px;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;
const Input = styled.input`
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  height: 30px;
  font-size: 14px;
`;

const List = ({ setListItems, data }) => {
  const { newBook, setNewBook } = useNewBook();
  const { newAuthor, setNewAuthor } = useNewAuthor();
  const { edit, setEdit } = useEdit();

  console.log(data);
  const getValue = (prop) => {
    return data.reduce((res, elem) => {
      if (elem.id === edit) {
        console.log('elem[prop]: ', elem[prop]);
        return elem[prop]
      } else { return res }
    }, '')
  }

  const changeItem = (event, prop) => {
    setListItems(
      data.map(elem => elem.id === edit ? { ...elem, [prop]: event.target.value } : elem)
    )
  }

  const editInputAuthor = (
    <>
      <Input
        type="text"
        value={getValue('author')}
        onChange={(e) => changeItem(e, 'author')}
      />
    </>
  )
  const editInputBook = (
    <>
      <Input
        type="text"
        value={getValue('book')}
        onChange={(e) => changeItem(e, 'book')}
      />
    </>
  )


  const res = data.map(elem => {
    return <Item key={elem.id} >
      <WrapperBook>
        <P>{elem.author}</P>
        {edit === elem.id ? editInputAuthor : null}
        <P>{elem.book}</P>
        {edit === elem.id ? editInputBook : null}
      </WrapperBook>
      <WrapperButtons>
        {edit === elem.id
          ? <EditButton onClick={() => setEdit(null)}>Сохранить</EditButton>
          : null}
        <EditButton onClick={() => setEdit(elem.id)}>Редактировать</EditButton>
        <DeleteButton onClick={() => setListItems(data.filter((e) => elem.id !== e.id))}>
          Удалить
        </DeleteButton>
      </WrapperButtons>
    </Item>
  })

  return (
    <Container>
      {res}
    </Container>
  )

};

export default List;
