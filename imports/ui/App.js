import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Papers } from '../api/papers.js';
var _ = require('lodash');
import Item from './Item.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    const props = {
      ...this.props,
      ...nextProps
    };
    this.setState({
      papers: props.papers,
    });
  }
  renderPapers() {
    return this.state.papers.map((item) => {
      return <Item
               key={item.id}
               paper={item} />
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <header>
            <h1>Papers Grid</h1>
            <div className="filter-container">
              <div className="pull-right">
                <span className="pull-left">Filter by title</span>
                <input
                  onChange={this.searchPaper.bind(this)}
                  type="text"
                  ref="textInput"
                  className="pull-right"
                  placeholder="Type to filter" />
              </div>
            </div>
          </header>
          {this.renderPapers()}
        </div>
      </div>
      );
  }
  searchPaper(event) {
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    var result = _.filter(this.props.papers, function(item) {
      return item.title.indexOf(text) > -1;
    });
    this.setState({
      papers: result
    });
  }
}

export default AppContainer = createContainer(() => {
  return {
    papers: Papers.find({}, {
      sort: {
        createdAt: -1
      }
    }).fetch()
  };
}, App);