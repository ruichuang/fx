import { RoundFXPage } from './app.po';

describe('round-fx App', () => {
  let page: RoundFXPage;

  beforeEach(() => {
    page = new RoundFXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
