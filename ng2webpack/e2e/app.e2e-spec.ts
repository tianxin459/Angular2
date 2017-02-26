import { Ng2webpackPage } from './app.po';

describe('ng2webpack App', function() {
  let page: Ng2webpackPage;

  beforeEach(() => {
    page = new Ng2webpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
