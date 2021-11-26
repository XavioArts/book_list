import { useState, useEffect } from "react";
import axios from "axios";
import NewBook from "./NewBook";

const Books = (props) => {
    const [books, setBooks] = useState([]);

    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        let result = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5");
        setBooks(result.data.data)
    };

    const renderBooks = () => {
        if(books.length === 0)
            return <p>No books available</p>
        else
            return books.map((book) => {
                return (
                    <div className="book-container">
                        <h1>{book.title}</h1>
                        <h2>By {book.author}</h2>
                        <img src={book.image} width="25%" height="25%" />
                        <p>{book.description}</p>
                    </div>
                );
            });
    };

    const addBook = (book) => {
        let image = "http:\/\/placeimg.com\/480\/640\/any";
        let description = "Chuck Norris can solve the Towers of Hanoi in one move.";
        let newBook = { ...book, image, description };
        setBooks([...books, newBook]);
    }

    return (
        <div className="books-container">
            { visibility && <NewBook addBook={addBook} setVisibility={setVisibility}/>}
            <button onClick={()=>setVisibility(!visibility)}>Add a new book form</button>
            {renderBooks()}
        </div>
    );
};

export default Books;