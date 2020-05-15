import React, { Component } from "react";

// A class that represents a comment and renders "Kommentar: *Kommentaren*"
// Made to be used for the Order component.
// Param: comment
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment
    };
  }

  render() {
    return (
      <div>
        <span>Kommentar: {this.state.comment}</span>
        <br />
      </div>
    );
  }
}

export default Comment;
