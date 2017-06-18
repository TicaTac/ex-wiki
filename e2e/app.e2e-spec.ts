import { ExWikiPage } from './app.po';

describe('ex-wiki App', () => {
  let page: ExWikiPage;

  beforeEach(() => {
    page = new ExWikiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
