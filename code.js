const slideshow = [
    {
        name: "First Slide",        
        image: "photos/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
    },
    {
        name: "Second Slide",
        image: "photos/mac-pro-2019-gallery2-2.jpeg"
    }
];


const data = [
    {
        name: "Macbook Pro 16\" Silver",
        price: 2399,
        description: "M1 MAX chip",
        image: "photos/mbp16-silver-select-202110.jpeg"            
    },
    {
        name: "Macbook Pro 16\" Spacegray",
        price: 2399,
        description: "M1 Pro chip",
        image: "photos/mbp16-spacegray-select-202110.jpeg"
    },
    {
        name: "Macbook Pro 14\" Silver",
        price: 2199,
        description: "M1 Pro chip",
        image: "photos/mbp14-silver-select-202110.jpeg"
    },
    {
        name: "Macbook Pro 14\" Spacegray",
        price: 2199,
        description: "M1 Pro chip",
        image: "photos/mbp14-spacegray-select-202110.jpeg"             
    },
    {
        name: "Macbook Pro 13\" Silver",
        price: 1199,
        description: "M1 chip",
        image: "photos/mbp-silver-select-202011_GEO_US.jpeg"
    },
    {
        name: "Macbook Pro 13\" Spacegray",
        price: 1199,
        description: "M1 chip",
        image: "photos/mbp-spacegray-select-202011_GEO_US.jpeg"
    }
];



const slideItems = document.querySelectorAll(".swiper-wrapper")[0];

slideshow.forEach((element, index) => {
    slideItems.innerHTML += 
    `    
        <div class="swiper-slide">
            <img src="${element.image}" alt="${element.name}">
        </div>        
    `
})


const items = document.querySelectorAll(".swiper-wrapper")[1];
data.forEach((element, index) => {
    items.innerHTML += 
    `    
        <div class="swiper-slide">
            <div class="card mx-4" style="width: 18rem;">
                <img class="card-img-top" src="${element.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <h5 class="card-title">$${element.price}</h5>
                    <p class="card-text">${element.description}</p>
                    <a class="btn btn-primary" onclick="addProductToCart(${index})">Add to cart</a>
                </div>
            </div>            
        </div>        
    `
})

let cart_sum = 0;
const cartItems = document.querySelector(".cart-items")

function addProductToCart(index) {
    cart_sum += 1;
    cartItems.innerHTML = `
        <img src="/photos/154fdf2f2759676a96e9aed653082276.png" width="30px">
        ${cart_sum}
    `;
}
