const logindata = () => {
    class user {
        constructor() {
            this.entername = document.querySelector(`#name`).value;
            this.enteraccno = document.querySelector(`#accno`).value;
            this.enteremail = document.querySelector(`#email`).value;
            this.enterpassword = document.querySelector(`#password`).value;

            
        }
    }
    class usercheck extends user {
        constructor(entername, enteraccno, enteremail, enterpassword, users) {
            super();
            this.namerecord = users.filter((val) => val.name === this.entername && val.accountNumber === this.enteraccno && val.email === this.enteremail && val.password === this.enterpassword);

            this.tbl = "";
            if (this.namerecord.length > 0) {
                this.namerecord.forEach((val) => {
                    this.tbl += `
                    <tr>
                        <td>${val.name}</td>
                        <td>${val.accountNumber}</td>
                        <td>${val.email}</td>
                        <td>${val.password}</td>
                    </tr>
                    `;
                });
            } else {
                this.tbl = `<tr><td colspan="4">No matching user found</td></tr>`;
            }
            document.getElementById('data').innerHTML = this.tbl;
            console.log(this.namerecord);
        }

    }
    let obj = new usercheck();




}

