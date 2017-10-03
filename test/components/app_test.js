import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//use describe to group together similar tests
describe('App Component' , () => {
 let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  // //use 'it' to test a single attribute of a target
  // it('shows the correct text', () => {
  //   //create an intance of App
  //   // const component = renderComponent(App);
  //   //use 'expect' to make an 'assertion' about a target
  //   expect(component).to.contain('React simple starter');
  // });

  it('shows a Comment Box component', () => {
    expect(component.find('.comment-box')).to.exist; //component.find: jQuery
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });
});
