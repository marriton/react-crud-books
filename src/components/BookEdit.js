import { useState } from "react";
import UseBooksContext from "../hooks/use-books-context";

function BookEdit( {book, onSubmit} ){
    const [title, setTitle] = useState(book.title);

    const { updateBook } = UseBooksContext();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        onSubmit();
        updateBook(book.id, title);
    }
    
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
        
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" onChange={handleChange} value={title}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;