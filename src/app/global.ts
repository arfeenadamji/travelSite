export class Global {

  public static instance: Global;
  private loggedIn: boolean = false;

  constructor() {
    Global.instance = this;

    if (localStorage.hasOwnProperty('isLoggedIn')) {
      this.loggedIn = true;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(flag: boolean): void {
    this.loggedIn = flag;

    if (flag) {
      localStorage.setItem('isLoggedIn', '1');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  }
}
