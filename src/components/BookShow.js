import { useState } from "react";
import BookEdit from "./BookEdit";
import UseBooksContext from "../hooks/use-books-context";

function BookShow({ book }){
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBook } = UseBooksContext();

    const handleDeleteClick = ()=>{
        deleteBook(book.id);
    };

    const hadleSubmit = () =>{
        setShowEdit(false);
    };

    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    };

    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit book={book} onSubmit={hadleSubmit}/>;
    }

    return(
        <div className="book-show">
            {/* <img alt="books" src="https://picsum.photos/300/200" /> */}
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;