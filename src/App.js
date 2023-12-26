import { useState,useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App(){
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async()=> {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    }
    
    useEffect(()=>{
        fetchBooks();
    }, []);

    const createBook = async (title) =>{
        const response = await axios.post('http://localhost:3001/books',
                         {title:title}
        );
        
        const updateBooks = [...books,response.data];
        setBooks(updateBooks);

        /*const randomID = Math.round(Math.random() * 9999);
        const  updateBooks = [...books,{id:randomID, title:title}];
        setBooks(updateBooks);*/
    }

    const updateBookID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        });

        const updateBooks = books.map((book)=>{
                                if (book.id === id){           
                                    return {...book, ...response.data}
                                }
                                return book;
                            });

        setBooks(updateBooks);
    }

    const deleteBookByID = async (id) =>{
        const response = await axios.delete(`http://localhost:3001/books/${id}`);
        console.log("deleted:", response.data);
        
        const updateBooks = books.filter((book)=>{
            return book.id !== id;
        });
        setBooks(updateBooks);
    };

    return(
        <div className="app">
            <h1>Reading list</h1>
            <BookList books={books} onDelete={deleteBookByID} onEdit={updateBookID}/>
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App;