const logindata = () => {
    class user {
      constructor(username, email, pass, accnum) {
        this.username = username;
        this.email = email;
        this.pass = pass;
        this.accnum = accnum;
  
        this.users = [
  
          {
            name: "Ronit Darji",
            accountNumber: "ACC1234567",
            password: "Pass@1234",
            email: "ronit.darji@example.com"
          },
          {
            name: "Aarav Patel",
            accountNumber: "ACC9876543",
            password: "Secure@5678",
            email: "aarav.patel@example.com"
          },
          {
            name: "Nidhi Shah",
            accountNumber: "ACC1122334",
            password: "Hello@2024",
            email: "nidhi.shah@example.com"
          },
          {
            name: "Krishna Mehta",
            accountNumber: "ACC5566778",
            password: "Mehta@7890",
            email: "krishna.mehta@example.com"
          },
          {
            name: "Vivek Joshi",
            accountNumber: "ACC3344556",
            password: "VJ@4321",
            email: "vivek.joshi@example.com"
          },
          {
            name: "Pooja Desai",
            accountNumber: "ACC7788991",
            password: "Pooja@5678",
            email: "pooja.desai@example.com"
          },
          {
            name: "Raj Solanki",
            accountNumber: "ACC9988776",
            password: "Raj@0987",
            email: "raj.solanki@example.com"
          },
          {
            name: "Simran Kaur",
            accountNumber: "ACC6655443",
            password: "Kaur@1122",
            email: "simran.kaur@example.com"
          },
          {
            name: "Hardik Trivedi",
            accountNumber: "ACC2233445",
            password: "Hardik@5566",
            email: "hardik.trivedi@example.com"
          },
          {
            name: "Anjali Rana",
            accountNumber: "ACC5566889",
            password: "Anjali@7788",
            email: "anjali.rana@example.com"
          }
        ];
      }
  
    }
  
    
    let userd = new user(entername, enteracc, enteremail, enterpass);
  
    // console.log(userd.users);
  
    // let checkuser = user.users.filter((val) => val.name.includes(entername) && val.accountNumber.includes(accnum) && val.email.includes(enteremail) && val.password.includes(enterpass))
  
  
  
    // if (checkuser.length == 0) {
    //   console.log(`user found`);
  
    // } else {
    //   console.log(`user not found`);
  
    // }
    // console.log(checkuser.length);
  
  
  }
  
  