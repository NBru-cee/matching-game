import React from "react";
import Header from "./components/Header";
import MatchGame from "./components/MatchGame";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="flex flex-col min-h-[500px] justify-between">
            <Header />
            <main className="container mx-auto p-4">
                <MatchGame />
            </main>
            <Footer />
        </div>
    );
};

export default App;
