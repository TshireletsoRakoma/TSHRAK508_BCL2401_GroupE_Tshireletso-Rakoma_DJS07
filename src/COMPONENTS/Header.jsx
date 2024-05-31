



// Header component: Represents the header section of the Meme Generator
const Header = () => {
    return (
        <>
            {/* The header element containing the header content */}
            <header className="header">
                {/* Image of the troll face, used as a logo or decorative element */}
                <img src="troll-face.png" className="header--image" alt="Troll Face"></img>
                {/* Main title of the header section */}
                <h2 className="header--title">Meme Generator</h2>
                {/* Subtitle or project description */}
                <h4 className="header--project">DJS07 - Project</h4>
            </header>
        </>
    );
};

// Export the Header component as the default export
export default Header;

