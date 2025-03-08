const products = [
    {
        id: 1,
        image: "https://storage.googleapis.com/a1aa/image/l4IxopNCYl6sEQNIC7eeXmHW5u3lGZ9jIV7tLo-GcgE.jpg",
        name: "Smartphone",
        description: "128GB",
        price: "₹29,999"
    },
    {
        id: 2,
        image: "https://storage.googleapis.com/a1aa/image/1YKRBTAs8tlcYuRKzbvXamxZJSMsE0cKEirU-8h8_tw.jpg",
        name: "Laptop",
        description: "16GB RAM",
        price: "₹59,999"
    },
    {
        id: 3,
        image: "https://storage.googleapis.com/a1aa/image/ftFkdIyLjudgKQGo4aaYq-hcjZRSmdlc2H9nxZH7f18.jpg",
        name: "Smartwatch",
        description: "Series 6",
        price: "₹19,999"
    },
    {
        id: 4,
        image: "https://storage.googleapis.com/a1aa/image/obYrjE5Z8EmE2BG3czEcCOqb9f6-gOeyZnI1bLudYXw.jpg",
        name: "Tablet",
        description: "64GB",
        price: "₹24,999"
    },
    {
        id: 5,
        image: "https://storage.googleapis.com/a1aa/image/64SVZQUSbRtB4cs5D7oeKDCD8jZU75G6PLsNreYc0jA.jpg",
        name: "Wireless Earbuds",
        description: "Noise Cancelling",
        price: "₹9,999"
    },
    {
        id: 6,
        image: "https://storage.googleapis.com/a1aa/image/hQMe76ryQNJOiLdXhX6ECbADE-7rkHfUn7X-JWVrRWM.jpg",
        name: "Gaming Console",
        description: "1TB",
        price: "₹39,999"
    },
    {
        id: 7,
        image: "https://storage.googleapis.com/a1aa/image/q9GGkSnKoc2qyrEB0wnGfMG5aJcwWRZ_2ldrYEjt8ik.jpg",
        name: "Bluetooth Speaker",
        description: "Waterproof",
        price: "₹4,999"
    },
    {
        id: 8,
        image: "https://storage.googleapis.com/a1aa/image/1YKRBTAs8tlcYuRKzbvXamxZJSMsE0cKEirU-8h8_tw.jpg",
        name: "Laptop",
        description: "16GB RAM",
        price: "₹59,999"
    },
    {
        id: 9,
        image: "https://storage.googleapis.com/a1aa/image/ftFkdIyLjudgKQGo4aaYq-hcjZRSmdlc2H9nxZH7f18.jpg",
        name: "Smartwatch",
        description: "Series 6",
        price: "₹19,999"
    },
    {
        id: 10,
        image: "https://storage.googleapis.com/a1aa/image/obYrjE5Z8EmE2BG3czEcCOqb9f6-gOeyZnI1bLudYXw.jpg",
        name: "Tablet",
        description: "64GB",
        price: "₹24,999"
    },
    {
        id: 11,
        image: "https://storage.googleapis.com/a1aa/image/64SVZQUSbRtB4cs5D7oeKDCD8jZU75G6PLsNreYc0jA.jpg",
        name: "Wireless Earbuds",
        description: "Noise Cancelling",
        price: "₹9,999"
    },
    {
        id: 12,
        image: "https://storage.googleapis.com/a1aa/image/hQMe76ryQNJOiLdXhX6ECbADE-7rkHfUn7X-JWVrRWM.jpg",
        name: "Gaming Console",
        description: "1TB",
        price: "₹39,999"
    },
    {
        id: 13,
        image: "https://storage.googleapis.com/a1aa/image/q9GGkSnKoc2qyrEB0wnGfMG5aJcwWRZ_2ldrYEjt8ik.jpg",
        name: "Bluetooth Speaker",
        description: "Waterproof",
        price: "₹4,999"
    },
    {
        id: 14,
        image: "https://storage.googleapis.com/a1aa/image/l4IxopNCYl6sEQNIC7eeXmHW5u3lGZ9jIV7tLo-GcgE.jpg",
        name: "Smartphone",
        description: "128GB",
        price: "₹29,999"
    },
    {
        id: 15,
        image: "https://storage.googleapis.com/a1aa/image/1YKRBTAs8tlcYuRKzbvXamxZJSMsE0cKEirU-8h8_tw.jpg",
        name: "Laptop",
        description: "16GB RAM",
        price: "₹59,999"
    },
    {
        id: 16,
        image: "https://storage.googleapis.com/a1aa/image/ftFkdIyLjudgKQGo4aaYq-hcjZRSmdlc2H9nxZH7f18.jpg",
        name: "Smartwatch",
        description: "Series 6",
        price: "₹19,999"
    },
    {
        id: 17,
        image: "https://storage.googleapis.com/a1aa/image/obYrjE5Z8EmE2BG3czEcCOqb9f6-gOeyZnI1bLudYXw.jpg",
        name: "Tablet",
        description: "64GB",
        price: "₹24,999"
    },
    {
        id: 18,
        image: "https://storage.googleapis.com/a1aa/image/64SVZQUSbRtB4cs5D7oeKDCD8jZU75G6PLsNreYc0jA.jpg",
        name: "Wireless Earbuds",
        description: "Noise Cancelling",
        price: "₹9,999"
    },
    {
        id: 19,
        image: "https://storage.googleapis.com/a1aa/image/hQMe76ryQNJOiLdXhX6ECbADE-7rkHfUn7X-JWVrRWM.jpg",
        name: "Gaming Console",
        description: "1TB",
        price: "₹39,999"
    },
    {
        id: 20,
        image: "https://storage.googleapis.com/a1aa/image/q9GGkSnKoc2qyrEB0wnGfMG5aJcwWRZ_2ldrYEjt8ik.jpg",
        name: "Bluetooth Speaker",
        description: "Waterproof",
        price: "₹4,999"
    },
    {
        id: 21,
        image: "https://storage.googleapis.com/a1aa/image/l4IxopNCYl6sEQNIC7eeXmHW5u3lGZ9jIV7tLo-GcgE.jpg",
        name: "Smartphone",
        description: "128GB",
        price: "₹29,999"
    },
    {
        id: 22,
        image: "https://storage.googleapis.com/a1aa/image/1YKRBTAs8tlcYuRKzbvXamxZJSMsE0cKEirU-8h8_tw.jpg",
        name: "Laptop",
        description: "16GB RAM",
        price: "₹59,999"
    },
    {
        id: 23,
        image: "https://storage.googleapis.com/a1aa/image/ftFkdIyLjudgKQGo4aaYq-hcjZRSmdlc2H9nxZH7f18.jpg",
        name: "Smartwatch",
        description: "Series 6",
        price: "₹19,999"
    },
    {
        id: 24,
        image: "https://storage.googleapis.com/a1aa/image/obYrjE5Z8EmE2BG3czEcCOqb9f6-gOeyZnI1bLudYXw.jpg",
        name: "Tablet",
        description: "64GB",
        price: "₹24,999"
    },
    {
        id: 25,
        image: "https://storage.googleapis.com/a1aa/image/64SVZQUSbRtB4cs5D7oeKDCD8jZU75G6PLsNreYc0jA.jpg",
        name: "Wireless Earbuds",
        description: "Noise Cancelling",
        price: "₹9,999"
    },
    {
        id: 26,
        image: "https://storage.googleapis.com/a1aa/image/hQMe76ryQNJOiLdXhX6ECbADE-7rkHfUn7X-JWVrRWM.jpg",
        name: "Gaming Console",
        description: "1TB",
        price: "₹39,999"
    }
];
localStorage.setItem("products", JSON.stringify(products));


let check = localStorage.getItem("loginuser") ? JSON.parse(localStorage.getItem("loginuser")) : []
console.log(check);

if (check.length != 0) {
    console.log('check is true');
    document.getElementById("login").style.display = 'none';
    document.getElementById("logout").style.display = 'block';

} else {
    console.log('check is false');
    document.getElementById("login").style.display = 'block';
    document.getElementById("logout").style.display = 'none';
    localStorage.removeItem("loginuser");
}


const showproduct = () => {
    let allproduct = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    card = ""
    allproduct.map((val) => {

        card += `
        <div class="col-md-3 mb-5">
                <div class="card d-flex flex-column">
                    <img src="${val.image}" class="card-img-top" alt="...">
                    <div class="card-body d-flex flex-column flex-grow-1">
                        <h5 class="card-title">${val.name}</h5>
                        <p class="card-text">${val.price}</p>
                        <p class="card-text">${val.description}</p>
                       <button onclick="addcart(${val.id})" type="button" class="btn btn-primary mt-auto">Add To Cart</button>
                       
                    </div>
                </div>
            </div>
        `

    })
    document.getElementById("allcard").innerHTML = card;

}
showproduct();

const addcart = (id) => {
    let allproduct = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    let cart = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : []
    allproduct.find((val) => {
        if (val.id == id) {
            cart.push(val);
            localStorage.setItem('carts', JSON.stringify(cart));
            alert("Product Added to Cart");
        }
    })
}



