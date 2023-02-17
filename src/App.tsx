import React from "react";
import "./App.css";

function App() {
    return (
        <div className="book">
            <h1 className="title">Andrzej Sapkowski. 'The Witcher: The Last Wish'</h1>
            <div className="genre">Genre: Fantasy</div>
            <div className="pages">288 pages</div>
            <h2 className="title">Reviews</h2>
            <ul className="reviews">
                <li className="review">
                    <h3 className="review-author">Mark Lawrence</h3>
                    <p className="review-text">
                        So, this is a collection of short stories loosely threaded around a stay by our point-of-view
                        character, the eponymous witcher, at a temple while recuperating from his latest fight. The
                        stories are mostly (all?) retellings of / inspired by well known fairy stories, like Beauty and
                        the Beast. They share a slightly fairy tale vibe too. It's a world where destiny is a real force
                        and unlikely promises about first born children etc made to strangers carry their own weight
                        both magically and in popular opinion.
                    </p>
                </li>
                <li className="review">
                    <h3 className="review-author">Nilufer Ozmekik</h3>
                    <p className="review-text">
                        I have to give you a secret! My admiration for the Witcher based on video games! Don’t get me
                        wrong, I’m not video game fan! If I would have been, I could have never written a word or read
                        any books! But my ugly singer neighbor’s kid (can you imagine to listen the worst covers of
                        least likable boy bands’ song every day! I can because I have this maniac living next door)
                        escape from his father’s encore times and hides himself at my living room with his PS4. So I
                        started to rent my place to him in exchange of his mother’s delicious pastries! (I know I’m
                        shameless human being) and I started to accompany with him during the games, having so much fun.
                    </p>
                </li>
                <li className="review">
                    <h3 className="review-author">Kevin Kelsey</h3>
                    <p className="review-text">
                        Fantasy isn't really my thing, but this was enjoyable enough. It's nice to read some non-English
                        fantasy, especially since this didn't seem to be as influenced by the usual Tolkien style
                        stories as most English written epic fantasy. A few of the stories were casually misogynistic,
                        but there were also some really good ones in here as well. The second half is much, much better
                        than the first.
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default App;

