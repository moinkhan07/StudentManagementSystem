
let array = JSON.parse(localStorage.getItem("Student")) ||  [];
class User{
    #password;
    constructor(){
        this.organization = "Masai"
    }

    #validateUsername(username){
        let value = username.includes("@")?false:true;
        return value;
    }

    #validatePassword(password){
        let value = password.includes("123")?false:true;
        return value;
    }


    login(username, password) {
        if (username == this.username && password == this.#password) {
            console.log("Successfully LogIn");
        } else {
            console.log("Authentication failed");
        }
    }


    sign_up(username,password){
        let isValidated = false;
        isValidated = this.#validateUsername(username) && this.#validatePassword(password);

        if(isValidated){
            this.username = username;
            this.#password = password;
            console.log("Successfully Registered");
            // array.push(this);
            
        }else{
            console.log("Sign-Up Failed");
        }

    }
}


class Student extends User {
    constructor() {
        super();
        this.numOfAssignments = 0;
    }

    // submitAssignments() {
    //     this.numOfAssignments++;
    //     console.log("%c Accepted","color:green");
    // }

}


class Admin extends User{
    constructor(){
        super();
    }

    // removeUser(userName){

    //    arr =  arr.filter((el)=>{
    //         return el.userName != userName;
    //     });
    // }
}


// Student--------------------------------------------------
let s1;
let signup_stud = (event)=>{
    event.preventDefault();
    let user_ = document.getElementById("user_1").value;
    let pass_ = document.getElementById("pass_1").value;

    s1 = new Student();
    s1.sign_up(user_,pass_);

    console.log(array);
}
let login_stud = (event)=>{
    event.preventDefault();
    let userN = document.getElementById("user_2").value;
    let passW = document.getElementById("pass_2").value;

    s1.login(userN,passW);
    array.push(s1);
    localStorage.setItem("Student",JSON.stringify(array));
    console.log(array);
    window.location.href = "./Student/dashBoard.html";
}


// Admin-----------------------------------------------
let a1;
let signup_adm = (event)=>{
    event.preventDefault();
    let un = document.getElementById("user_3").value;
    let pass = document.getElementById("pass_3").value;

    a1 = new Admin();
    a1.sign_up(un,pass);

    console.log(array);
}

let login_adm = (event)=>{
    event.preventDefault();
    let uname = document.getElementById("user_4").value;
    let pWord = document.getElementById("pass_4").value;

    a1.login(uname,pWord);

    console.log(array);
    window.location.href = "./admin/dashboard.html";
}
