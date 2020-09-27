import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

import QuoteBoxComponent from "./QuoteBoxComponent";

function QuoteBoxContainer() {
  //https://type.fit/api/quotes -Quotes API

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchQuotes() {
    let response = await fetch("https://type.fit/api/quotes");
    response.json().then((response) => {
      setQuotes(response);
    });
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    randomQuote();
  }, [quotes]);

  const randomQuote = () => {
      if (quotes.length !== 0) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
          setText(quotes[randomIndex].text);       
        setAuthor(quotes[randomIndex].author);
        setLoading(false);
      }
  };

  return (
    <QuoteBoxComponent
      text={text}
      author={author}
      onClick={() => randomQuote()}
      loading={isLoading}
    />
  );
}

export default QuoteBoxContainer;
