import { ArticleFormsPage } from './app.po';

describe('article-forms App', () => {
  let page: ArticleFormsPage;

  beforeEach(() => {
    page = new ArticleFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
