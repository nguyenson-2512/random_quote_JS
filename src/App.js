import { React, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("I would rather die of passion than of boredom.");
  const [author, setAuthor] = useState("Vincent van Gogh");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesData, setQuotesData] = useState([]);
  const [randomColor, setRandomColor] = useState("#bf6565")

  const urlData =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const fetchData = async (url) => {
    const response = await fetch(url);
    const parsedData = await response.json();
    setQuotesData(parsedData.quotes);
    console.log(quotesData);
  };

  useEffect(() => {
    fetchData(urlData);
  }, [urlData]);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * quotesData.length));
  };

  const handleNewQuote = () => {
    generateRandomNumber();
    setQuote(quotesData[randomNumber].quote);
    setAuthor(quotesData[randomNumber].author);
    setRandomColor(COLORS_ARRAY[randomNumber])
  };

  return (
    <div className="App" style={{backgroundColor: randomColor, color: randomColor }}>
      <div id="quote-box">
        <p className="quote-text">
          <span className="quote-left">"</span>
          {quote}
        </p>
        <p className="quote-author">- {author}</p>
        <div className="buttons">
          <a
            style={{backgroundColor: randomColor, color: 'white'}}
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            href={encodeURI(`https://twitter.com/intent/tweet?text=${quote}-${author}`)}>
            Tweeter
          </a>
          <a
            style={{backgroundColor: randomColor, color: 'white'}}
            className="button"
            id="new-quote"
            onClick={() => handleNewQuote()}
            >
            New quote
          </a>
        </div>
      </div>
    </div>
  );
}
const COLORS_ARRAY = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

export default App;
