import { Angular4clientPage } from './app.po';

describe('angular4client App', () => {
  let page: Angular4clientPage;

  beforeEach(() => {
    page = new Angular4clientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
