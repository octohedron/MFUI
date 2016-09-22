import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div className="item-container">
          <div className="img-container">
            <img
              className="img-responsive"
              src={this.props.paper.thumbnail} />
          </div>
          <div className="pad20">
            <span className="text-success"><strong>{this.props.paper.title}</strong></span>
            <p className="text-right">
              <a
                className="text-danger"
                href={this.props.paper.creator.profileUrl}>
                {this.props.paper.creator.name}
              </a>
            </p>
            <p className="text-danger text-right">
              <i>{this.props.paper.createdAt}</i>
            </p>
          </div>
        </div>
      </div>
      );
  }
}

Item.propTypes = {
  paper: PropTypes.object.isRequired,
};
