import React from 'react';
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Hangman from './Hangman';

it('renders without crashing', function() {
    shallow(<Hangman />);
});

it("matches snapshot", function() {
    let wrapper = shallow(<Hangman />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
});