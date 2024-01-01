import { useState } from "react";
import UseBooksContext from "../hooks/use-books-context";

function BookCreate(){
    const [book, setBook] = useState('');
    
    const { createBook } = UseBooksContext();

    const handleChange = (event) =>{
        setBook(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(book);
        setBook('');
    };

    return (
        <div className="book-create">
            <h3>Add Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" type='text' value={book} onChange={handleChange}/>
                <button className="button">Create</button>
            </form>
        </div>
    );
}

export default BookCreate;