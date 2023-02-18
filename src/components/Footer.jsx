import React from "react";

const Footer = () => {
    const date = new Date();
    return (
        <footer className="bg-gray-800 text-white p-4">
            <p className="text-center">
                &copy; {date.getFullYear()} Bruce Games
            </p>
        </footer>
    );
};

export default Footer;
