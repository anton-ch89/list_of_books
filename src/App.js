import { GlobalStyle } from "./style/GlobalStyles";
import BooksAddForm from "./Components/BooksAddForm";
import List from "./Components/List";
import { useList } from "./Hooks/useList";
import { useBook } from "./Hooks/useBook";
import { useAuthor } from "./Hooks/useAuthor";


function App() {

  const list = useList();
  const book = useBook();
  const author = useAuthor();

  return (
    <>
      <GlobalStyle />
        <BooksAddForm {...list} {...book}  {...author}/>
        <List {...list} {...book} {...author}/>
    </>
  );
}

export default App;
