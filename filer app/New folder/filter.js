const userdata = [
  {
    id: 1, name: "Rohan Patel", email: "rohan@gmail.com", gender: "male",
    hobby: ["cricket", "reading"], city: "Surat", salary: 5000, designation: "Junior"
  },
  {
    id: 2, name: "Priya Sharma", email: "priya@gmail.com", gender: "female",
    hobby: ["painting", "music"], city: "Ahmedabad", salary: 6000, designation: "Senior"
  },
  {
    id: 3, name: "Arjun Mehta", email: "arjun@gmail.com", gender: "male",
    hobby: ["gaming", "reading"], city: "Rajkot", salary: 5500, designation: "Junior"
  },
  {
    id: 4, name: "Sneha Desai", email: "sneha@gmail.com", gender: "female",
    hobby: ["cooking", "dancing"], city: "Vadodara", salary: 7000, designation: "Senior"
  },
  {
    id: 5, name: "Vikas Shah", email: "vikas@gmail.com", gender: "male",
    hobby: ["cycling", "writing"], city: "Surat", salary: 5000, designation: "Junior"
  },
  {
    id: 6, name: "Aditi Nair", email: "aditi@gmail.com", gender: "female",
    hobby: ["reading", "traveling"], city: "Ahmedabad", salary: 7500, designation: "Senior"
  },
  {
    id: 7, name: "Kunal Joshi", email: "kunal@gmail.com", gender: "male",
    hobby: ["swimming", "reading"], city: "Rajkot", salary: 4800, designation: "Junior"
  },
  {
    id: 8, name: "Anjali Gupta", email: "anjali@gmail.com", gender: "female",
    hobby: ["gardening", "writing"], city: "Vadodara", salary: 7200, designation: "Senior"
  },
  {
    id: 9, name: "Manish Yadav", email: "manish@gmail.com", gender: "male",
    hobby: ["gaming", "cycling"], city: "Surat", salary: 5400, designation: "Junior"
  },
  {
    id: 10, name: "Pooja Singh", email: "pooja@gmail.com", gender: "female",
    hobby: ["dancing", "cooking"], city: "Ahmedabad", salary: 6100, designation: "Senior"
  },
  {
    id: 11, name: "Ravi Mishra", email: "ravi@gmail.com", gender: "male",
    hobby: ["football", "trekking"], city: "Pune", salary: 5200, designation: "Junior"
  },
  {
    id: 12, name: "Nidhi Iyer", email: "nidhi@gmail.com", gender: "female",
    hobby: ["singing", "gardening"], city: "Chennai", salary: 6800, designation: "Senior"
  },
  {
    id: 13, name: "Aman Verma", email: "aman@gmail.com", gender: "male",
    hobby: ["cricket", "gaming"], city: "Delhi", salary: 4900, designation: "Junior"
  },
  {
    id: 14, name: "Kavita Reddy", email: "kavita@gmail.com", gender: "female",
    hobby: ["yoga", "photography"], city: "Hyderabad", salary: 7300, designation: "Senior"
  },
  {
    id: 15, name: "Rajesh Pandey", email: "rajesh@gmail.com", gender: "male",
    hobby: ["cycling", "writing"], city: "Mumbai", salary: 5000, designation: "Junior"
  },
  {
    id: 16, name: "Meera Jain", email: "meera@gmail.com", gender: "female",
    hobby: ["traveling", "painting"], city: "Indore", salary: 7200, designation: "Senior"
  },
  {
    id: 17, name: "Harsh Thakur", email: "harsh@gmail.com", gender: "male",
    hobby: ["reading", "hiking"], city: "Nagpur", salary: 5300, designation: "Junior"
  },
  {
    id: 18, name: "Sonal Patel", email: "sonal@gmail.com", gender: "female",
    hobby: ["gardening", "baking"], city: "Surat", salary: 6900, designation: "Senior"
  },
  {
    id: 19, name: "Rahul Bhat", email: "rahul@gmail.com", gender: "male",
    hobby: ["photography", "gaming"], city: "Bangalore", salary: 5100, designation: "Junior"
  },
  {
    id: 20, name: "Neha Kulkarni", email: "neha@gmail.com", gender: "female",
    hobby: ["yoga", "reading"], city: "Pune", salary: 7500, designation: "Senior"
  }
];

const showdata = () => {
  let tbl = "";
  userdata.forEach((val) => {
    tbl += `
      <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby.join(", ")}</td> <!-- Fix: Properly display hobbies -->
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
      </tr>
    `;
  });

  document.getElementById('data').innerHTML = tbl;
};
// Call showdata() on page load to show all records initially
showdata();


const cityfind = () => {
  let entercity = document.querySelector(`#city`).value.trim();
  let cityrecord = userdata.filter((val) => val.city.toLowerCase().includes(entercity.toLowerCase()));

  let err = "";
  let tbl = "";

  if (cityrecord.length === 0) {
    err = "<h1>Record not found</h1>";
    document.getElementById('error').innerHTML = err;
    document.getElementById('data').innerHTML = "";  // Clear table if no data
    return;
  }

  cityrecord.forEach((val) => {
    tbl += `
      <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby.join(", ")}</td>
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
      </tr>
    `;
  });

  document.getElementById('error').innerHTML = ""; // Clear error if records are found
  document.getElementById('data').innerHTML = tbl;
};

cityfind();

const slarayfind = () => {
  let minsalary = parseInt(document.querySelector('#minsalary').value) || 0;
  let maxsalary = parseInt(document.querySelector('#maxsalary').value) || Infinity;

  let salaryrecord = userdata.filter((val) => val.salary >= minsalary && val.salary <= maxsalary);

  let tbl = "";
  salaryrecord.forEach((val) => {
    tbl += `
      <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby.join(", ")}</td>
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
      </tr>
    `;
  });

  document.getElementById('data').innerHTML = tbl;
};
slarayfind();

const hobbyfind = () => {
  let enterhobby = document.querySelector(`#hobby`).value.trim().toLowerCase();
  
  let hobbyrecord = userdata.filter((val) =>
    val.hobby.some(hobby => hobby.toLowerCase().includes(enterhobby))
  );

  let tbl = "";
  hobbyrecord.forEach((val) => {
    tbl += `
      <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby.join(", ")}</td>
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
      </tr>
    `;
  });

  document.getElementById('data').innerHTML = tbl;
};

// const hobbyfind = () => {
//   let enterhobby = document.querySelector(`#hobby`).value;
//   let hobbyrecord = userdata.filter((val) => val.hobby === enterhobby);

//   let tbl = "";
//   hobbyrecord.map((val) => {
//     tbl += `
//         <tr>
//         <td>${val?.id}</td>
//         <td>${val?.name}</td>
//         <td>${val?.email}</td>
//         <td>${val?.gender}</td>
//         <td>${val?.hobby}</td>
//         <td>${val?.city}</td>
//         <td>${val?.salary}</td>
//         <td>${val?.designation}</td>
//         </tr>
//         `
//   })

//   document.getElementById('data').innerHTML = tbl;
// }

// hobbyfind();






// const slarayfind = () => {


//   let maxsalray = document.querySelector(`#minsalary`).value;
//   let minsalary = document.querySelector(`#maxsalary`).value;
//   let salaryrecord = userdata.filter((val) => val.salary >= minsalary && val.salary <= maxsalray);


//   // let err = "";
//   // if(cityrecord.length == 0){
//   //   err+=<></>
//   // }

//   document.getElementById(`maxsalary`).value = "";
//   let tbl = "";
//   salaryrecord.map((val) => {
//     tbl += `
//         <tr>
//         <td>${val?.id}</td>
//         <td>${val?.name}</td>
//         <td>${val?.email}</td>
//         <td>${val?.gender}</td>
//         <td>${val?.hobby}</td>
//         <td>${val?.city}</td>
//         <td>${val?.salary}</td>
//         <td>${val?.designation}</td>
//         </tr>
//         `
//   })
//   document.getElementById('data').innerHTML = tbl;
// }

// slarayfind();


// const hobbyfind = () => {



//   let hobbyname = document.querySelector(`#hobby`).value;
//   let hobbyrecord = userdata.filter((val) => val.hobby === hobbyname);

//   // let err = "";




//   document.getElementById('hobby').value = "";
//   let tbl = "";

//   hobbyrecord.map((val, index) => {
//     tbl += `
//         <tr>
//         <td>${val?.id}</td>
//         <td>${val?.name}</td>
//         <td>${val?.email}</td>
//         <td>${val?.gender}</td>
//         <td>${val?.hobby}</td>
//         <td>${val?.city}</td>
//         <td>${val?.salary}</td>
//         <td>${val?.designation}</td>
//         </tr>
//         `
//   })

//   document.getElementById('data').innerHTML = tbl;

// }

// hobbyfind();






