const FakeAuth = {
  isLoggedIn: false,
  login(cb) {
    this.isLoggedIn = true
    setTimeout(cb, 100) // fake async
  },
  logout(cb) {
    this.isLoggedIn = false
    setTimeout(cb, 100) // fake async
  }
};

export default FakeAuth;