import { Servicos01Page } from './app.po';

describe('servicos01 App', function() {
  let page: Servicos01Page;

  beforeEach(() => {
    page = new Servicos01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
