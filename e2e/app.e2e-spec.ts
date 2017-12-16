import { AddressChangePage } from './app.po';

describe('address-change App', () => {
  let page: AddressChangePage;

  beforeEach(() => {
    page = new AddressChangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
