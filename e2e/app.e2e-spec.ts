import { GitUsersPage } from './app.po';

describe('git-users App', () => {
  let page: GitUsersPage;

  beforeEach(() => {
    page = new GitUsersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
