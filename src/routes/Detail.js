import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
  }

  render() {
    const { location, history } = this.props;
    console.log(this);
    if (location.state == null) {
      history.push("/"); //redirect home
      return null;
    }
    return (
      <div className="detail_container">
        <div>
          <img src={location.state.image} />
        </div>
        <div className="detail_contents">
          <h3 className="detail_title">{location.state.title}</h3>
          <h3 className="detail_title">{location.state.year}</h3>
          <h3 className="detail_title">
            {location.state.genres.map((genre, index) => (
              <li key={index} className="genres_genre">
                {genre}
              </li>
            ))}
          </h3>
          <h3 className="detail_summary">{location.state.summary}</h3>
        </div>
      </div>
    );
  }
}

export default Detail;
