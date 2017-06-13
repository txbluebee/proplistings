import { ProplistingsPage } from './app.po';

describe('proplistings App', () => {
  let page: ProplistingsPage;

  beforeEach(() => {
    page = new ProplistingsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
