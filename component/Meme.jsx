import React from "react"
import "./meme.css"
import '../src/App.css';

export default function Meme(props) {
    const [meme, setMeme] = React.useState({   
        topText: "",
        bottomText: "", 
        randomImage: "https://i.imgflip.com/1ur9b0.jpg"
    })


    const [allMeme,setAllMeme]= React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => setAllMeme(data.data.memes)) 
    },[])

    console.log("All memes data is",allMeme)

    
    function getMemeImage() {
        const memesArray = allMeme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function onMeme(e){
        const {name,value}=e.target
        setMeme(prevMeme=>(
            {...prevMeme,
                [name]:value
            }))
    }

    return (
        <main className={`main--element ${props.darkMode ? "dark" : ""}`}>
            <div className={`form ${props.darkMode ? "dark" : ""}`}>
                <input 
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={onMeme}
                />
                <input 
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={onMeme}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 
                </button>
                <div className="meme">
                    <img src={meme.randomImage} alt="meme" className="meme--image"/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}