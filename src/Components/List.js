import React from "react";
import styled from "styled-components";
import { useNewBook } from "../Hooks/useNewBook";
import { useNewAuthor } from "../Hooks/useNewAuthor";

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

const DeleteButton = styled.button`
  margin-left: 15px;
  color: red;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  height: 30px;
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
  const { setNewBook } = useNewBook();
  const { setNewAuthor } = useNewAuthor();

  return (
    <Container>
      {data.map((item, i) => {
        return (
          <Item key={i}>
            <WrapperBook>
              <P>{`${item.author}`}</P>
              <Input
                type="text"
                value={item.author}
                onChange={(e) => setNewAuthor((item.author = e.target.value))}
              />

              <P>{` ${item.book}`}</P>
              <Input
                type="text"
                value={item.book}
                onChange={(e) => setNewBook((item.book = e.target.value))}
              />
            </WrapperBook>
            <DeleteButton
              onClick={() =>
                setListItems((prevList) =>
                  prevList.filter((_, iList) => iList !== i)
                )
              }
            >
              Удалить
            </DeleteButton>
          </Item>
        );
      })}
    </Container>
  );
};

export default List;
