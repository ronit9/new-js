//  // registration
//  const regdata = () => {
//     const rusers = [];
//     const ruser = {
//         username: document.querySelector("#uname").value,
//         passenter: document.querySelector("#enpass").value

//     }


//     rusers.push(ruser);
//     console.log(ruser);

// }


const regndata = () => {
    const rusers = [];

    const user={
         rname: document.querySelector('#rname').value,
         rpass: document.querySelector('#rpass').value
    }
   
        
}



const logindata = () => {
    class user {
        constructor() {
            //registration
            this.rusers = [];
            this.ruser = {
                username: document.querySelector('#rname').value,
                passenter: document.querySelector('#rpass').value

            }

            //login

            this.username = document.querySelector('#lname').value;
            this.accnum = document.querySelector('#laccno').value;
            this.email = document.querySelector('#lemail').value;
            this.pass = document.querySelector('#lpass').value;
        }
    }
    //login
    class check extends user {
        constructor() {
            super()
            this.userrecord = this.rusers.filter((val) => val.name === this.username && val.accountNumber === this.accnum && val.email === this.email && val.password === this.pass);

        }
        usercheck = () => {
            this.userrecord.length == 0 ? console.log(`❌ data is not match ❌`)
                : console.log(`✔️ data is match ✔️`);

        }

    }


    let s = new check;
    s.rusers.push(ruser);
    console.log(ruser);
    s.usercheck();

}

