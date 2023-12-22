import { useState } from "react";

function BookEdit( {book, onSubmit} ){
    const [title, setTitle] = useState(book.title);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(book.id, title);
    }

    const hanldeChange = (event) => setTitle(event.target.value);
        
    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" onChange={hanldeChange} value={title}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;