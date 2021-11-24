import { useState, useEffect } from "react";
import axios from "axios";

const Books = (props) => {
    const [books, setBooks] = useState([]);

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

    return (
        <div className="books-container">
            {renderBooks()}
        </div>
    );
};

export default Books;