import { createContext, useState, useCallback } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([]);
        
    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }, []);

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',
                         {title:title}
        );
        
        const updateBooks = [...books,response.data];
        setBooks(updateBooks);
    }

    const updateBook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title: newTitle});

        const updateBooks = books.map((book)=>{
                                if (book.id === id){
                                    return {...book, ...response.data}
                                }
                                return book;
                            });

        setBooks(updateBooks);
    }

    const deleteBook = async (id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log("deleted:", response.data);
        
        const updateBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updateBooks);
    };

    const valueToShare = {
        books,
        deleteBook,
        updateBook,
        createBook,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;