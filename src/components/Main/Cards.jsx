import React from "react";
import Card from "./Card.jsx";
import Add from "./Add.jsx";
import ClassNames from "classnames";
import { connect } from "react-redux";
import { dragAndDrop } from "../../actions/";

class Cards extends React.PureComponent {
  state = {
    openCards: true
  };

  render() {
    const { openCards } = this.state;
    const { name, style } = this.props;
    const classes = ClassNames("card-wrapper", style);
    return (
      <div className={classes}>
        <div className="card-wrapper__header">
          <div className="backlog-name">{name}</div>
          <div onClick={this.handleToggle} className="backlog-dots">
            <i className="material-icons">
              {openCards ? "expand_more" : "chevron_right"}
            </i>
          </div>
        </div>
        {this.cardsContainer}
      </div>
    );
  }

  handleToggle = () => {
    return this.setState(prevState => {
      return { openCards: !prevState.openCards };
    });
  };

  get cardsContainer() {
    const { type } = this.props;
    const { openCards } = this.state;
    if (!openCards) {
      return null;
    }
    return (
      <div
        className="cards"
        onDragOver={this.forDragOver}
        onDrop={this.forDrop}
      >
        {this.cardsList}
        <Add typeCards={type} />
      </div>
    );
  }

  forDragOver = ev => {
    this.onDragOver(ev);
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  forDrop = ev => {
    const { data } = this.props;
    this.onDrop(ev, data[0].type);
  };

  onDrop = (ev, cat) => {
    this.props.dragAndDrop(ev, cat);
  };

  get cardsList() {
    const { data } = this.props;
    return data.map(item => (
      <React.Fragment key={item.id}>
        <Card data={item} />
      </React.Fragment>
    ));
  }
}

export default connect(
  null,
  { dragAndDrop }
)(Cards);
