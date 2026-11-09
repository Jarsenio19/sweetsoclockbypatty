import { v4 as uuidv4 } from "uuid";

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

