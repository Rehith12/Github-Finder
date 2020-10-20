class GitHub {
  constructor() {
    this.client_id = "5a310ffc350b1e7c0a8c";
    this.client_secret = "944f8d9707f78c4f66014a21de52132af733a3f0";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return {
      profile,
      repos,
    };
  }
}
