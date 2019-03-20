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

it("changes images when an incorrect guess is made", function() {
  let wrapper = shallow(<Hangman />);
  wrapper.find("button[value='b']").simulate("click", { target: { value: "b" } });
  let imgSrc = wrapper.find('img').first().html()
  expect(imgSrc).not.toContain('0.jpg');
});

it("does not change image when a correct guess is made", function() {
  let wrapper = shallow(<Hangman />);
  let imgSrc = wrapper.find('img').first().html()
  expect(imgSrc).toContain('0.jpg');
  wrapper.find("button[value='a']").simulate("click", { target: { value: "a" } });
  expect(imgSrc).toContain('0.jpg');
});