import React, { useRef, useEffect } from "react";
import { TweenMax, Elastic, TimelineMax, Back, Power3 } from "gsap";
import "gsap/TextPlugin";

function QuoteBoxComponent(props) {
  let newQuoteButton = useRef(null);
  let QuoteBox = useRef(null);

  useEffect(() => {
    TweenMax.from(newQuoteButton, 2.7, {
      y: "-500",
      ease: Elastic.easeOut.config(1, 0.3),
    });
    TweenMax.from(QuoteBox, 2.7, {
      y: "500",
      ease: Elastic.easeOut.config(1, 0.3),
    });
  }, []);

  const newQuoteAnimation = () => {
    var slide = new TimelineMax();

    slide.to(QuoteBox, 0.7, {
      marginLeft: "-175%",
      ease: Power3.easeOut(),
    });
    slide.to(QuoteBox, 0, {
      marginLeft: "150%",
    });
    setTimeout(() => {
      props.onClick();
    }, 700);
    slide.to(QuoteBox, 0.7, {
      marginLeft: "0%",
      opacity: 1,
      ease: Back.easeOut,
    });
  };

  return (
    <div className="quote-box">
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => newQuoteAnimation()}
        id="new-quote"
        ref={(element) => (newQuoteButton = element)}
      >
        <strong>New Quote</strong>
      </button>
      <div
        className="card"
        style={{ width: "45rem" }}
        ref={(element) => (QuoteBox = element)}
      >
        <div className="card-body">
          <p className="card-text" id="text">
            <i className="fa fa-quote-left" aria-hidden="true"></i>
            <br />
            <span>{props.loading ? "Loading..." : props.text}</span>
            <br />
          </p>
          <h6 className="card-subtitle mb-2 text-muted" id="author">
            {props.author === null ? "Anonymous" : props.author}
          </h6>
          <a
            href={`https://twitter.com/intent/tweet?text=${props.text}   - ${
              props.author || "Anonymous"
            }`}
            id="tweet-quote"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default QuoteBoxComponent;
