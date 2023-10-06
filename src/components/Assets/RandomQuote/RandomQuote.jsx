import React, { useState } from "react";
import './RandomQuote.css'
import { FaXTwitter } from "react-icons/fa6";
import {AiOutlineReload,AiOutlineWhatsApp} from 'react-icons/ai'


const RandomQuote = () =>{

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json();
    }


    const [quote, setQuote] = useState({
            text:"When you have a dream, you've got to grab it and never let go.",
            author: "Carol Burnett",
    });

    const random = () =>{
        const select =quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    const twitter = () =>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - {quote.author.split(',')[0]}`);
    }

    const whatsapp = () =>{
        window.open(`https://web.whatsapp.com/send?phone=${quote.text} - ${quote.author.split(',')[0]}`);
    }
    loadQuotes();

    return(
        <div className="container">

            <div className="quote">
                {quote.text}
            </div>

            <div>
                <div className="line"></div>

                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>

                    <div className="Icons">
                        <AiOutlineReload id="reload" onClick={()=>{random()}}/>
                        <AiOutlineWhatsApp id="whatsapp" onClick={()=>{whatsapp()}}/>
                        <FaXTwitter id="twitter" onClick={()=>{twitter()}}/> 
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default RandomQuote