regindata = () => {
    class enteruser {
        const user = [];
    constructor() {
        // this.user = [];
        this.user.push({
            "ruser": document.getElementById("rname").value,
            "rpass": document.getElementById("rpass").value
        })

    }
}
class show extends enteruser {
    constructor() {
        super()

    }
    adddata() {
        this.local = localStorage.setItem("user", JSON.stringify(this.user));
    }
}
let r = new show();
r.adddata();

}


const regndata = () => {
    this.getdata = JSON.parse(localStorage.getItem("user"));
    console.log(this.getdata);

    const filterdata = this.getdata.filter((val) => val.ruser == document.getElementById("lname").value && val.rpass == document.getElementById("lpass").value);
    console.log(filterdata.length);


    if (filterdata.length > 0) {
        console.log('yes');

    } else {
        console.log('no');

    }

}






