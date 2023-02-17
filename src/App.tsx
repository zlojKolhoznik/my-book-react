import React from "react";
import "./App.css";

function App() {
    return (
        <div className="book">
            <div className="title">The Title</div>
            <div className="author">The Author</div>
            <div className="genre">Genre</div>
            <div className="pages">Pages</div>
            <ul className="reviews">
                <li className="review">Review 1</li>
                <li className="review">Review 2</li>
                <li className="review">Review 3</li>
            </ul>
        </div>
    );
}

export default App;

