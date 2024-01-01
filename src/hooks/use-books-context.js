import { useContext } from "react";
import BooksContext from "../context/books";

function UseBooksContext(){
    return useContext(BooksContext);
}

export default UseBooksContext;