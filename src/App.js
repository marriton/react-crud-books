import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App(){
    const [books, setBooks] = useState([]);

    const createBook = (title) =>{
        const randomID = Math.round(Math.random() * 9999);

        const  updateBooks = [...books,{id:randomID, title:title}];
        setBooks(updateBooks);
    }

    const updateBookID = (id, newTitle) => {
        const updateBooks = books.map((book)=>{
                                if (book.id === id){
                                    return{...book, title:newTitle}
                                }
                                return book;
                            });

        setBooks(updateBooks);
    }

    const deleteBookByID = (id) =>{
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