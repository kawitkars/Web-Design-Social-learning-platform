import { SocialLearningPlatformPage } from './app.po';

describe('social-learning-platform App', function() {
  let page: SocialLearningPlatformPage;

  beforeEach(() => {
    page = new SocialLearningPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
