import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import Item from './Item.jsx';
import { Meteor } from 'meteor/meteor';
Papers = new Meteor.Collection('paper');

describe('Item', () => {
  it('should render', () => {
    // Defines a Mock paper object
    const pres = Factory.define('papers', Papers, {
      title: 'testing',
      thumbnail: 'https://placeimg.com/400/400/any',
      creator: {
        name: 'Test author',
        profileUrl: 'http://randomprofile.paper.com/'
      },
      createdAt: 'July 31, 2015'
    });
    // Inserts the Mock paper object into the database
    const paper = Factory.create('papers',
      pres.attributes
    );
    const item = shallow(<Item paper={paper} />);
    // Test UI
    chai.assert(item.hasClass('col-lg-4'));
    // change this to 0 and it will fail
    chai.assert.equal(item.find('.item-container').length, 1);
    chai.assert(!item.hasClass('test'));
  });
});
