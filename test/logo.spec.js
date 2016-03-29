// import Logo from '../components/logo';
// import React from 'react';
// import cheerio from 'cheerio';
// import ReactDOMServer from 'react/lib/ReactDOMServer';
// import { expect } from 'chai';
//
// describe('Testing my div', function() {
//   let $, props, logo, html, logoHtml, anchorAttr, imgAttr;
//   beforeEach(() => {
//
//   	props = {
//   		banner: 'kroger',
//   		environment: 'test'
//   	};
//
//   	logo = React.createElement(Logo, props);
//
//   	html = ReactDOMServer.renderToStaticMarkup(logo);
//
//   	$ = cheerio.load(html);
//   	logoHtml = $('.logo').html();
//
//     anchorAttr = $('.logo > a').attr();
//     imgAttr = $('.logo > a > img').attr();
//   })
//
//   it('Should load the props for the logo component', function() {
//     expect(logo.props.banner).to.equal('kroger');
//     expect(logo.props.environment).to.equal('test');
//   });
//
//   it('Should display the correct logo for the banner',function(){
//
//     expect(anchorAttr.title).to.equal('Kroger');
//     expect(imgAttr.src).to.equal('https://www.kroger.com/asset/567807b384ae2fc86a1b1f45?data=1');
//   });
//
//   it('Should render a default image if no banner provided',function(){
//
//   });
//
//   it('Should leverage cached images where possible',function(){
//
//   });
//
//   it('Should link to the provided URL',function(){
//
//   });
//
//   it('Should go to the home page (relative) if no link url is provided',function(){
//
//     expect(anchorAttr.href).to.equal('/');
//   });
//
//
// });
