export class List {
	
  id: number;
  login: string;
  avatar_url: string;
  repos_url: string;

  constructor(id: number, login: string, avatar_url: string, repos_url: string) {
    this.id = id;
    this.login = login;
    this.avatar_url = avatar_url;
    this.repos_url = repos_url;
  }
}
