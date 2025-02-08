let userdata = [
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
  userdata.map((val) => {
    tbl += `
        <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby}</td>
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
        </tr>
        `
  })


  document.getElementById('data').innerHTML = tbl;
}
showdata();



const cityfind = () => {
  let city = document.getElementById('city').value;

  let filtercity = userdata.filter((val) => val.city.includes(city));

  if (filtercity.length == 0) {
    document.getElementById('error').innerHTML = "Record not found"
    return false;
  }

  let tbl = "";
  filtercity.map((val) => {
    tbl += `
        <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby}</td>
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
        </tr>
        `
  })


  document.getElementById('data').innerHTML = tbl;

}

const slarayfind = () => {
  let minsalary = document.getElementById('minsalary').value;
  let maxsalary = document.getElementById('maxsalary').value;

  let salaryrecord = userdata.filter((val) => val.salary >= minsalary && val.salary <= maxsalary
  );

  console.log(salaryrecord);


  if (salaryrecord.length == 0) {
    document.getElementById('error').innerHTML = "Record not found"
  } else {
    let tbl = "";
    salaryrecord.map((val) => {
      tbl += `
        <tr>
        <td>${val?.id}</td>
        <td>${val?.name}</td>
        <td>${val?.email}</td>
        <td>${val?.gender}</td>
        <td>${val?.hobby}</td>
        <td>${val?.city}</td>
        <td>${val?.salary}</td>
        <td>${val?.designation}</td>
        </tr>
        `
    })
    document.getElementById('data').innerHTML = tbl;
  }

}

const hobbyfind = () => {
  let enterhobby = document.getElementById('hobby').value;
  let hobbyrecord = userdata.filter((val) => val.hobby.includes(enterhobby));


  if (hobbyrecord.length == 0) {
    document.getElementById('error').innerHTML = "Record not found"
  }
  let tbl = "";
  hobbyrecord.map((val) => {
    tbl += `
      <tr>
      <td>${val?.id}</td>
      <td>${val?.name}</td>
      <td>${val?.email}</td>
      <td>${val?.gender}</td>
      <td>${val?.hobby}</td>
      <td>${val?.city}</td>
      <td>${val?.salary}</td>
      <td>${val?.designation}</td>
      </tr>
      `
  })
  document.getElementById('data').innerHTML = tbl;
}

const genderfind = () => {
  let entergender = document.getElementById('gender').value;


  let genderrecord = userdata.filter((val) => val.gender === entergender);
  console.log(genderrecord);

  if (genderrecord.length == 0) {
    document.getElementById('error').innerHTML = "Record not found"
  }
  let tbl = "";
  genderrecord.map((val) => {
    tbl += `
      <tr>
      <td>${val?.id}</td>
      <td>${val?.name}</td>
      <td>${val?.email}</td>
      <td>${val?.gender}</td>
      <td>${val?.hobby}</td>
      <td>${val?.city}</td>
      <td>${val?.salary}</td>
      <td>${val?.designation}</td>
      </tr>
      `
  })
  document.getElementById('data').innerHTML = tbl;
}

const reset = () => {
  document.getElementById('city').value = "";
  document.getElementById('minsalary').value = "";
  document.getElementById('maxsalary').value = "";
  document.getElementById('hobby').value = "";
  document.getElementById('gender').value = "";
  showdata();
}








