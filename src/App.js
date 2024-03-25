import React from "react";

import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    quote: "",
    backgroundUrl: "",
  };

  componentDidMount() {
    this.fetchQuote();
    this.fetchBackgroundImage();
  }

  fetchQuote = async () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        this.setState({
          quote: response?.data?.slip?.advice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  fetchBackgroundImage = async () => {
    axios
      .get(
        "https://api.unsplash.com/photos/random/?topics=nature&content_filter=low&orientation=landscape&client_id=eECFAGsCNO4ty-Gq1L3Ing_CoLwN2pn0PvIDjbEtr6k"
      )
      .then((response) => {
        this.setState({
          backgroundUrl: response.data.urls.full,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${this.state.backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="card">
          <p className="heading">{this.state.quote}</p>
          <button className="button" onClick={this.fetchQuote}>
            <span>I need a quote !</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
