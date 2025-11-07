import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";

import upload_area from "./upload_area.png";


import checkmark from "./checkmark.png";

import { useLanguage } from "@/context/LanguageContext";

export const assets = {
    
   agrozyme:"/images/agrozyme.png",
  kohinoor: "/images/kohinoor.png",
  shakti: "/images/shakti.png",
  starplus: "/images/starplus.png",
  fungi_killer: "/images/fungi_killer.png",
  vijay_growing: "/images/vijay_growing.png",
  banner: "/images/banner.jpg",
  banner1: "/images/banner1.jpg",
  banner2: "/images/banner2.jpg",

    
  logo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  upload_area,
  checkmark
};

export const BagIcon = () => {
  return (
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
    </svg>
  )
}

export const CartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>

  )
}

export const BoxIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);


// export const productsDummyData = [
//   {
//     _id: "1",
//     name: "Kohinoor",
//     description: "Kohinoor Powder delivers essential nutrients for healthier, greener, and more productive plants.",
//     price: 100,
//     offerPrice: 90,
//     image: ["/images/kohinoor.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "2",
//     name: "Agrozyme",
//     description: "Agrozyme enhances plant growth, improves soil fertility, and boosts yield naturally.",
//     price: 110,
//     offerPrice: 95,
//     image: ["/images/agrozyme.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "3",
//     name: "Fungi Killer",
//     description: "Fungi Killer protects crops from fungal infections, ensuring healthy plant growth.",  price: 120,
//     offerPrice: 100,
//     image: ["/images/fungi_killer.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "4",
//     name: "Kashtkaar Sulfur",
//     description: "Kashtkaar Sulfur improves soil health, boosts yield, and controls fungal diseases.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/kashtkaar_sulfur.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "5",
//     name: "Kings Plus",
//     description: "Kashtkaar Sulfur improves soil health, boosts yield, and controls fungal diseases.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/kings_plus.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "6",
//     name: "Krishi Amrit",
//     description: "Kohinoor Powder delivers essential nutrients for healthier, greener, and more productive plants.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/krishi_amrit.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "7",
//     name: "Milk Magic 40kg",
//     description: "Milk Magic 40kg enhances plant growth and increases crop productivity effectively.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/milk_magic_40kg.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "8",
//     name: "Milk Magic",
//     description: "Milk Magic boosts soil fertility and promotes healthy, sustainable crop growth.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/milk_magic.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "9",
//     name: "Root Plus",
//     description: "Root Plus enhances root strength and boosts overall plant growth naturally.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/Root_Plus.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "10",
//     name: "Shakti",
//     description: "Shakti improves soil fertility and strengthens plant growth for higher yield.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/shakti.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "11",
//     name: "Starplus",
//     description: "Starplus enhances crop health and boosts yield with balanced nutrients.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/starplus.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "12",
//     name: "Suprimo Liquid",
//     description: "Suprimo Liquid promotes strong root growth and improves overall plant health.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/suprimo_liquid.png"],
//     category: "Fertilizer",
//   },
//   {
//     _id: "13",
//     name: "Vijay Growing",
//     description: "Milk Magic boosts soil fertility and promotes healthy, sustainable crop growth.",
//     price: 120,
//     offerPrice: 100,
//     image: ["/images/vijay_growing.png"],
//     category: "Fertilizer",
//   },

// ];

export const productsDummyData = [
  {
    _id: "1",
    name: "Kohinoor",
    description:
      "Kohinoor Powder delivers essential nutrients for healthier, greener, and more productive plants.",
    price: 100,
    offerPrice: 90,
    image: [
      "/images/kohinoor.png",
      "/images/kohinoor.png",
      "/images/kohinoor.png",
      "/images/kohinoor.png",
      "/images/kohinoor.png",
      "/images/kohinoor.png",
      "/images/kohinoor.png",
      "/images/kohinoor.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "2",
    name: "Agrozyme",
    description:
      "Agrozyme enhances plant growth, improves soil fertility, and boosts yield naturally.",
    price: 110,
    offerPrice: 95,
    image: [
      "/images/agrozyme.png",
      "/images/agrozyme.png",
      "/images/agrozyme.png",
      "/images/agrozyme.png",
      "/images/agrozyme.png",
      "/images/agrozyme.png",
      "/images/agrozyme.png",
      "/images/agrozyme.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "3",
    name: "Fungi Killer",
    description:
      "Fungi Killer protects crops from fungal infections, ensuring healthy plant growth.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
      "/images/fungi_killer.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "4",
    name: "Kashtkaar Sulfur",
    description:
      "Kashtkaar Sulfur improves soil health, boosts yield, and controls fungal diseases.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
      "/images/kashtkaar_sulfur.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "5",
    name: "Kings Plus",
    description:
      "Kings Plus enhances soil fertility and promotes healthy crop growth.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/kings_plus.png",
      "/images/kings_plus.png",
      "/images/kings_plus.png",
      "/images/kings_plus.png",
      "/images/kings_plus.png",
      "/images/kings_plus.png",
      "/images/kings_plus.png",
      "/images/kings_plus.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "6",
    name: "Krishi Amrit",
    description:
      "Krishi Amrit boosts plant nutrition and enhances overall yield naturally.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
      "/images/krishi_amrit.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "7",
    name: "Milk Magic 40kg",
    description:
      "Milk Magic 40kg enhances plant growth and increases crop productivity effectively.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
      "/images/milk_magic_40kg.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "8",
    name: "Milk Magic",
    description:
      "Milk Magic boosts soil fertility and promotes healthy, sustainable crop growth.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/milk_magic.png",
      "/images/milk_magic.png",
      "/images/milk_magic.png",
      "/images/milk_magic.png",
      "/images/milk_magic.png",
      "/images/milk_magic.png",
      "/images/milk_magic.png",
      "/images/milk_magic.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "9",
    name: "Root Plus",
    description:
      "Root Plus enhances root strength and boosts overall plant growth naturally.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
      "/images/Root_Plus.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "10",
    name: "Shakti",
    description:
      "Shakti improves soil fertility and strengthens plant growth for higher yield.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/shakti.png",
      "/images/shakti.png",
      "/images/shakti.png",
      "/images/shakti.png",
      "/images/shakti.png",
      "/images/shakti.png",
      "/images/shakti.png",
      "/images/shakti.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "11",
    name: "Starplus",
    description:
      "Starplus enhances crop health and boosts yield with balanced nutrients.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/starplus.png",
      "/images/starplus.png",
      "/images/starplus.png",
      "/images/starplus.png",
      "/images/starplus.png",
      "/images/starplus.png",
      "/images/starplus.png",
      "/images/starplus.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "12",
    name: "Suprimo Liquid",
    description:
      "Suprimo Liquid promotes strong root growth and improves overall plant health.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
      "/images/suprimo_liquid.png",
    ],
    category: "Fertilizer",
  },
  {
    _id: "13",
    name: "Vijay Growing",
    description:
      "Vijay Growing boosts soil fertility and promotes healthy, sustainable crop growth.",
    price: 120,
    offerPrice: 100,
    image: [
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
      "/images/vijay_growing.png",
    ],
    category: "Fertilizer",
  },
];

// export const userDummyData = {
//   "_id": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
//   "name": "GreatStack",
//   "email": "admin@example.com",
//   "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
//   "cartItems": {
//     // "67a1f4e43f34a77b6dde9144": 3
//   },
//   "__v": 0
// }
export const userDummyData = {
  _id: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  name: "Mastek Academy",
  email: "admin@example.com",
  imageUrl: "/images/milk_magic.png", // changed to local image
  cartItems: {
    // "1": 3
  },
  __v: 0
};




export const orderDummyData = [
  {
    "_id": "67a20934b3db72db5cc77b2b",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "1",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Sample Product 1",
          "description": "Sample description",
          "price": 100,
          "offerPrice": 90,
          "image": ["/images/kohinoor.png"],
          "category": "Sample Category",
          "date": Date.now(),
          "__v": 0
        },
        "quantity": 1,
        "_id": "item_1"
      }
    ],
    "amount": 90,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "GreatStack",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": Date.now(),
    "__v": 0
  },
  {
    "_id": "67a20949b3db72db5cc77b2e",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "items": [
      {
        "product": {
          "_id": "2",
          "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          "name": "Sample Product 2",
          "description": "Sample description",
          "price": 150,
          "offerPrice": 120,
          "image": ["/images/kohinoor.png"],
          "category": "Sample Category",
          "date": Date.now(),
          "__v": 0
        },
        "quantity": 1,
        "_id": "item_2"
      }
    ],
    "amount": 120,
    "address": {
      "_id": "67a1e4233f34a77b6dde9055",
      "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      "fullName": "GreatStack",
      "phoneNumber": "0123456789",
      "pincode": 654321,
      "area": "Main Road , 123 Street, G Block",
      "city": "City",
      "state": "State",
      "__v": 0
    },
    "status": "Order Placed",
    "date": Date.now(),
    "__v": 0
  }
]


// export const addressDummyData = [
//   {
//     "_id": "67a1e4233f34a77b6dde9055",
//     "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
//     "fullName": "GreatStack",
//     "phoneNumber": "0123456789",
//     "pincode": 654321,
//     "area": "Main Road , 123 Street, G Block",
//     "city": "City",
//     "state": "State",
//     "__v": 0
//   }
// ]
export const addressDummyData = [
  {
    _id: "address_1",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    fullName: "GreatStack",
    phoneNumber: "0123456789",
    pincode: 654321,
    area: "Main Road, 123 Street, G Block",
    city: "Your City",
    state: "Your State",
    __v: 0
  }
];
