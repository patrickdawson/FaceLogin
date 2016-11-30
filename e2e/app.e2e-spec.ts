import { Angular2CordovaStarterPage } from './app.po';

describe('angular2-cordova-starter App', function() {
  let page: Angular2CordovaStarterPage;

  beforeEach(() => {
    page = new Angular2CordovaStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
