import React from 'react';

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import './TypeWriter.css';

function Type() {
    return (
        <div className="Type-writer">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Introducing Sabi:")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Creating videos from text.")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Try SabiGPT Now!")
                        .start();
                }}
            />
        </div>
    );
}

export default Type;