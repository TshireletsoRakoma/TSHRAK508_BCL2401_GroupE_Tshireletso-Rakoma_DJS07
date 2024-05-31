import React from "react";

// Function component InputFields
export default function InputFields() {

    // State to hold the current meme data
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg", // Default image URL
    });

    // State to hold all the memes fetched from the API
    const [allMemes, setAllMemes] = React.useState([]);

    // useEffect to fetch memes from the API when the component mounts
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json()) // Convert response to JSON
            .then(data => setAllMemes(data.data.memes)); // Set the allMemes state with fetched memes
    }, []); // Empty dependency array means this runs once on mount

    // Function to get a random meme image from the allMemes array
    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url; // Get URL of random meme
        setMeme(prevMeme => ({
            ...prevMeme, // Spread the previous meme state
            randomImage: url // Update the randomImage property with new URL
        }));
    };

    // Function to handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target; // Destructure name and value from event target
        setMeme(prevMeme => ({
            ...prevMeme, // Spread the previous meme state
            [name]: value // Update the corresponding property (topText or bottomText)
        }));
    };

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
