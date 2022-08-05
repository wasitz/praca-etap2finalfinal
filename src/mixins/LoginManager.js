let loginManager = {
    data () {
        return {
         users: [
        {login: "aaa", password: "aaa"},
        {login: "sss", password: "sss"},
     ]
    }
    },
    methods: {
       checkUserPassword (login, password) {
        let userHasPassword = this.$data.users.filter(user => user.login == login && user.password == password);
        return userHasPassword.length > 0

       },

       checkUserExists (login) {
        let userExists = this.$data.users.filter(user => user.login == login);
        return userExists.length > 0

       },

       checkLoggedUser () {
        return this.getCookie("loggedUser") && this.checkUserExists(this.getCookie("loggedUser"));
       },

       logUser (login) {
        this.setCookie("loggedUser", login);

       },
       logoutNotLogged () {
        if (!this.checkLoggedUser ()) {
            this.$router.push('/');
        }

       },
       setCookie (cookieName, cookieValue) {
        document.cookie = cookieName + "=" + cookieValue ;

       },
       
       getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }

        return null;

        }
    },

}


export default loginManager;

