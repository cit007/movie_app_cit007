import React from "react";

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
      <div>
        <h3 className="detail_title">{location.state.title}</h3>
        <img src={location.state.image} />
        <h3 className="detail_summary">{location.state.summary}</h3>
      </div>
    );
  }
}

export default Detail;
