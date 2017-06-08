import { AngularSignupPage } from './app.po';

describe('angular-signup App', () => {
  let page: AngularSignupPage;

  beforeEach(() => {
    page = new AngularSignupPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
