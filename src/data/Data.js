
import { v4 as uuidv4 } from "uuid";

// ===============================
// LOGO
// ===============================

import LogoImage from "../assets/SweetOclockLogo.png";

export const logoData = {
  image: LogoImage,
  alt: "Sweet O'Clock Logo",
};

// ===============================
// BANNER
// ===============================

export const bannerData = [
  "Get a head start on holiday gifting! Save 20% sitewide through 11/16. No code needed. Excludes corporate gifts.",
  "NEW! Limited-Edition Fall Flavors | Shop Now",
  "Free Standard Shipping on Orders $25+",
];

// ===============================
// HERO
// ===============================

import HeroImage from "../assets/Cookies.png";

export const heroData = [
  {
    id: "hero-1",
    image: HeroImage,
    alt: "Cookies",
    subtitle: "LIMITED-EDITION",
    title: "OG Cookies Chip, Last Call",
    description:
      "Bite into the bright, creamy flavor before this seasonal cookie is gone for good.",
    buttonText: "Shop Now",
  },
];

// ===============================
// CARDS
// ===============================

import Design1 from "../assets/Card/Design1.png";
import Design2 from "../assets/Card/Design2.png";
import Design3 from "../assets/Card/Design3.png";
import Design4 from "../assets/Card/Design4.png";
import Design5 from "../assets/Card/Design5.png";

export const cards = [
  {
    id: uuidv4(),
    image: Design1,
    title: "Premium Baskets",
    subtitle: "Our Signature Cookies",
    className: "cards-1",
  },
  {
    id: uuidv4(),
    image: Design2,
    title: "Limited Edition",
    subtitle: "SEASONAL MUST-HAVES",
  },
  {
    id: uuidv4(),
    image: Design3,
    title: "Premium Baskets",
    subtitle: "GIVE THE GIFT OF SWEETS",
  },
  {
    id: uuidv4(),
    image: Design4,
    title: "Bakery",
    subtitle: "EXPLORE OUR BAKERY",
  },
  {
    id: uuidv4(),
    image: Design5,
    title: "Sweet O'clock Market",
    subtitle: "BRANDED MERCH",
  },
];

// ===============================
// DROPDOWN DATA
// ===============================

export const dropdownData = {
  shop: {
    columns: [
      {
        title: "SHOP BY PRODUCT",
        links: [
          "Cookies",
          "Bakery",
          "Limited Edition",
          "Merch",
          "Shop All",
        ],
      },
      {
        title: "SHOP GIFTING",
        links: [
          "Baskets",
          "Gift Sets",
          "Party Favors",
          "Corporate Gifting",
          "Events",
          "Shop All Gifts",
        ],
      },
    ],
  },

  cookies: {
    columns: [
      {
        title: "SHOP COOKIES",
        links: [
          "Chocolate Chip Cookies",
          "Classic Cookies",
          "Cookie Assortments",
          "Limited Edition",
          "Shop All Cookies",
        ],
      },
    ],
  },

  bakery: {
    columns: [
      {
        title: "SHOP BAKERY",
        links: [
          "Brownies",
          "Cakes",
          "Pastries",
          "Bakery Favorites",
          "Shop All Bakery",
        ],
      },
    ],
  },

  gifting: {
    columns: [
      {
        title: "SHOP GIFTS",
        links: [
          "Gift Baskets",
          "Gift Sets",
          "Cookie Gifts",
          "Party Favors",
          "Shop All Gifts",
        ],
      },
      {
        title: "SPECIAL OCCASIONS",
        links: [
          "Birthday Gifts",
          "Holiday Gifts",
          "Thank You Gifts",
          "Corporate Gifts",
        ],
      },
    ],
  },

  story: {
    columns: [
      {
        title: "ABOUT US",
        links: [
          "Our History",
          "Our Ingredients",
          "Our Philosophy",
          "Our Team",
        ],
      },
    ],
  },

  corporate: {
    columns: [
      {
        title: "CORPORATE GIFTING",
        links: [
          "Corporate Gift Boxes",
          "Custom Gifts",
          "Business Orders",
          "Bulk Orders",
        ],
      },
      {
        title: "BUSINESS SERVICES",
        links: [
          "Personalized Gifts",
          "Client Appreciation",
          "Employee Gifts",
          "Contact Us",
        ],
      },
    ],
  },
};

// ===============================
// NAVIGATION
// ===============================

export const navItems = [
  { label: "Shop", key: "shop" },
  { label: "Cookies", key: "cookies" },
  { label: "Bakery", key: "bakery" },
  { label: "Gifting", key: "gifting" },
  { label: "Our Story", key: "story" },
  { label: "Corporate Gifting", key: "corporate" },
];

// ===============================
// PRODUCT IMAGES
// ===============================

import Product1 from "../assets/Product/Product1.png";
import Product2 from "../assets/Product/Product2.png";
import Product3 from "../assets/Product/Product3.png";

// ===============================
// SHOP PRODUCTS
// ===============================

export const carouselCardsData = [
  {
    image: Product1,
    productType: "COOKIES",
    name: "Wedding Favors",
    price: "$45",
  },
  {
    image: Product2,
    productType: "COOKIES",
    name: "OG Chocolate Chip",
    price: "$18",
  },
  {
    image: Product3,
    productType: "COOKIES",
    name: "Double Chocolate Chip",
    price: "$15",
  },
  {
    image: Product1,
    productType: "COOKIES",
    name: "Sugar Cookies",
    price: "$20",
  },
  {
    image: Product2,
    productType: "COOKIES",
    name: "Red Velvet",
    price: "$22",
  },
  {
    image: Product3,
    productType: "COOKIES",
    name: "Peanut Butter",
    price: "$19",
  },
];

// ===============================
// SHOP FILTER OPTIONS
// ===============================

// PRODUCT LINE
export const categories = [
  "Bakery Items",
  "Cookies",
  "Gifting",
  "Merch",
];

// FLAVOR
export const flavors = [
  "Chocolate",
  "Vanilla",
  "Peanut Butter",
  "Sugar",
];

// DIETARY OPTIONS
export const dietaryOptions = [
  "Gluten Free",
  "Nut Free",
  "Vegan",
];

// BASKET OPTIONS
export const basketOptions = [
  "Cookies",
  "Brownies",
  "Assorted Treats",
];