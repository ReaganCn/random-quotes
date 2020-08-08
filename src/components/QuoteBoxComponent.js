import React from "react";

function QuoteBoxComponent(props) {
  return (
    <div className="quote-box">
      <button type="button" className="btn btn-dark" onClick={props.onClick} id="new-quote">
        <strong>New Quote</strong>
      </button>
      <div className="card" style={{ width: "45rem" }}>
        <div className="card-body">
          <p className="card-text" id="text"><i className="fa fa-quote-left" aria-hidden="true"></i><br />
          {props.loading ? "Loading..." : props.text}
            <br/>
          </p>
          <h6 className="card-subtitle mb-2 text-muted" id="author">
            {props.author === null ? "Anonymous" : props.author}
          </h6>
          <a
            href={`https://twitter.com/intent/tweet?text=${props.text}   ${
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
