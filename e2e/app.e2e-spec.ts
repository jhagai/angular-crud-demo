import { AngularDemoPage } from './app.po';

describe('angular-demo App', () => {
  let page: AngularDemoPage;

  beforeEach(() => {
    page = new AngularDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
