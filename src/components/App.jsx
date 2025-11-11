// create your App component here
import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDogImage()
    }, []);

    function fetchDogImage() {
        setLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if(!response.ok) { throw new Error('Error getting the dog to fetch'); }
                return response.json();
            })
            .then(data => {
                setDogImage(data.message);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="app">
            <p>Here is your puppy!</p>
            {loading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
            <button onClick={fetchDogImage}>Click for a new dog!</button>
        </div>
    )
}

export default App;