import { UdemyNodejsAngular2Page } from './app.po';

describe('udemy-nodejs-angular2 App', function() {
  let page: UdemyNodejsAngular2Page;

  beforeEach(() => {
    page = new UdemyNodejsAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
