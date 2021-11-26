import { useState } from "react";

const NewBook = (props) => {
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //make sure the page isnt refreshed
        props.addBook({title,author});
        //add the book thats been input
        props.setVisibility(false);
        //hide the form again
        setTitle("");
        setAuthor("");
        //reset variables
    }

    return (
        <div>
            <h2>New Book Form</h2>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={title} onChange={(event)=>setTitle(event.target.value)}/>
                <p>Author</p>
                <input value={author} onChange={(event)=>setAuthor(event.target.value)}/>
                <button>Add Book</button>
            </form>
        </div>
    )

};

export default NewBook;