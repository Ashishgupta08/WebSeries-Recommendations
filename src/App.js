import React, { useState } from "react";
import "./styles.css";

//database
var webSeries = {
  Comedy: [
    {
      Title: "Friends ",
      Rating: `8.9/10`
    },
    {
      Title: "The Big Bang Theory",
      Rating: `8.1/10`
    },
    {
      Title: "Young Sheldon",
      Rating: `7.4/10`
    }
  ],
  Drama: [
    {
      Title: "Kota Factory",
      Rating: `9/10`
    },

    {
      Title: "Hostel Daze",
      Rating: `8.6/10`
    },

    {
      Title: "The Family Man",
      Rating: `8.6/10`
    }
  ],

  Crime: [
    {
      Title: "Scam 1992,The Harshad Mehta Story",
      Rating: `9.5/10`
    },
    {
      Title: "Mirzapur",
      Rating: `8.4/10`
    },
    {
      Title: "Sacred Games",
      Rating: `8.7/10`
    }
  ]
};

var genreNames = Object.keys(webSeries);
var tvEmoji = "📺";
export default function App() {
  var [seriesList, setSeriesList] = useState(webSeries.Comedy);

  function genreClickHandler(genre) {
    var series = webSeries[genre];
    setSeriesList(series);
  }

  function getSeriesDetails(series) {
    var title = series.Title;
    var rating = series.Rating;
    var listOfSeries = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h2>{title}</h2>
          <p>
            <small>IMDB Rating - {rating}</small>
          </p>
        </div>
      </li>
    );
    return listOfSeries;
  }

  return (
    <div className="App">
      <h1>
        <span>{tvEmoji}</span>
        Web Series <br />
        Recommendations
      </h1>
      <h5>My recommendations for Web Series. Select a genre to get started</h5>
      <div>
        {genreNames.map(function (genre) {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {seriesList.map(function (series) {
          return getSeriesDetails(series);
        })}
      </ul>
    </div>
  );
}
