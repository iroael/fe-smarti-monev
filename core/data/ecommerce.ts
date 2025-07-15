export interface product {
  sku: number;
  name: string;
  images: string[];
  shortDescription: string;
  description: string;
  details: string;
  salePrice: string;
  price: string;
  sale: boolean;
  category: string[];
  colors: string[];
  size: string[];
  brand: string;
  tags: string[];
  stock: number;
  quantity: number;
  off?: boolean;
  star: number
}
interface PricingOption {
  for: string;
  title: string;
  checked?: boolean
}
interface services {
  icon: string,
  title: string,
  desc: string
}
interface category {
  image: string,
  name: string,
  category: string,
  color: string,
  status: string
}
interface ProductItem {
  img: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  qty: string;
  status: string;
  statusclass: string;
  rating: string;
  product: string;
}
interface order {
  img: string,
  title: string
}
interface history {
  id: number;
  img: string;
  product: string;
  status: string;
  size: string;
  color: string;
  articleNumber: number;
  units: number;
  price: number;
}
interface wishlist {
  name: string;
  img: string;
  star1: string;
  star2: string;
  price: string;
  color: string;
  stock: string;
}
interface pricing {
  id: number;
  title: string;
  price: string;
  disk: string;
  email: string;
  Sub: string;
  domains: string;
}
interface simple {
  id: number;
  title: string;
  price: string;
}
interface SocialLink {
  link: string;
  icon: string;
}
export const allProduct: product[] = [
  {
    sku: 1,
    name: "Women's Top",
    images: [
      "ecommerce/01.jpg",
      "ecommerce/02.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Regular Flare Fit Women's white Top",
    description:
      "Rock Paper Scissors Women Tank Top High Neck Cotton Top Stylish Women Top..",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "35.00",
    price: "50.00 ",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["white", "black", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: ["woman jeans", "white", "black", "green", "zara"],
    stock: 10,
    quantity: 1,
    star: 3,
  },
  {
    sku: 2,
    name: "Men's Jacket",
    images: [
      "ecommerce/02.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Cotton Blend Men's Blue Jacket",
    description:
      "Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Jacket.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "50.00",
    price: "45.00 ",
    sale: true,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "green", "red"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: [
      "man jeans",
      "mens tshirt",
      "yellow",
      "gray",
      "green",
      "zara",
      "red",
    ],
    quantity: 1,
    stock: 10,
    star: 4,
  },
  {
    sku: 3,
    name: "Women's Coat",
    images: [
      "ecommerce/03.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Cotton Blend Women's Coat",
    description:
      "Women's Classic Stretchy All Time Trendy Pleated Skirt Western coat midi Skirt plited Lehenga.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "480.0",
    price: "426.00",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "max",
    tags: ["woman jeans", "yellow", "gray", "green", "max"],
    quantity: 1,
    stock: 10,
    star: 2,
  },
  {
    sku: 4,
    name: "Men's Shirt",
    images: [
      "ecommerce/04.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Cotton Regular Fit Men's Shirt",
    description:
      "Glamcci Men's Cotton Blend Printed One Piece Party Jacket",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "35.00",
    price: "26.00",
    sale: false,
    off: true,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "white"],
    size: ["M", "L", "XL"],
    brand: "biba",
    tags: ["man jeans", "mens tshirt", "yellow", "gray", "white", "biba"],
    quantity: 1,
    stock: 10,
    star: 5,
  },
  {
    sku: 5,
    name: "Track Suit",
    images: [
      "ecommerce/05.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Cotton Regular Fit Men's Shirt",
    description:
      "Glamcci Men's Cotton Blend Printed One Piece Track Suit.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "25.00",
    price: "20.00 ",
    sale: false,
    off: false,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "white"],
    size: ["M", "L", "XL"],
    brand: "biba",
    tags: ["man jeans", "mens tshirt", "yellow", "gray", "white", "biba"],
    quantity: 1,
    stock: 10,
    star: 4,
  },
  {
    sku: 6,
    name: "Women's Jacket",
    images: [
      "ecommerce/06.jpg",
      "ecommerce/02.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Solid Denim Jacket",
    description:
      "Rock Paper Scissors Womens Tank Top High Neck Cotton Top Stylish Women Top..",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "30.00",
    price: "25.00",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["white", "black", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: ["woman jeans", "white", "black", "green", "zara"],
    quantity: 1,
    stock: 10,
    star: 3,
  },
  {
    sku: 7,
    name: "Denim Jacket",
    images: [
      "ecommerce/07.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/02.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Denim Regular Men's Jacket",
    description:
      "Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Men Denim Shirt.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "35.00",
    price: "30.00",
    sale: false,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: [
      "woman top",
      "man jeans",
      "mens tshirt",
      "yellow",
      "gray",
      "green",
      "zara",
    ],
    quantity: 1,
    stock: 10,
    star: 4,
  },
  {
    sku: 8,
    name: "Men's Formal shirt",
    images: [
      "ecommerce/08.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/02.jpg"
    ],
    shortDescription: "Regular Men's Denim Shirt.",
    description:
      "Ravaiyaa - Attitude is everything Cotton Men's Formal One Top Shirt.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "40.00 ",
    price: "35.00 ",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "max",
    tags: ["man shirt", "yellow", "gray", "green", "max"],
    quantity: 1,
    stock: 10,
    star: 3,
  },
  {
    sku: 9,
    name: "Woman's Gown",
    images: [
      "ecommerce/04.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/02.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Woman's Long Gown",
    description:
      "Women Tank Top High Neck Cotton Top Stylish Women Gown..",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "50.00",
    price: "45.00 ",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "max",
    tags: ["woman jeans", "yellow", "gray", "green", "max"],
    quantity: 1,
    stock: 10,
    star: 4,
  },
  {
    sku: 10,
    name: "Men's Black Suit",
    images: [
      "ecommerce/04.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Men's Full Black Suit",
    description:
      "Attitude is everything Cotton Men's Black Suit.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "55.00",
    price: "50.00 ",
    sale: false,
    off: false,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "white"],
    size: ["M", "L", "XL"],
    brand: "biba",
    tags: ["man jeans", "mens tshirt", "yellow", "gray", "white", "biba"],
    quantity: 1,
    stock: 10,
    star: 5,
  },
  {
    sku: 11,
    name: "Woman's Dress",
    images: [
      "ecommerce/04.jpg",
      "ecommerce/02.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Tops for Stylish Woman's Dress",
    description:
      "Tops for Stylish Woman's Dress",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "65.00",
    price: "60.00",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["white", "black", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: ["woman jeans", "white", "black", "green", "zara"],
    quantity: 1,
    stock: 10,
    star: 5,
  },
  {
    sku: 12,
    name: "Slim Fit Plastic Coat",
    images: [
      "ecommerce/05.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/02.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Slim Fit Plastic Thunder Coat",
    description:
      "Premier Cropped Skinny Jean",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "35.00",
    price: "30.00 ",
    sale: false,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: ["man jeans", "mens tshirt", "yellow", "gray", "green", "zara"],
    quantity: 1,
    stock: 10,
    star: 3,
  },
  {
    sku: 13,
    name: "Women's Hoodie",
    images: [
      "ecommerce/07.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/02.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Women's Hoodie T-Shirt",
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "360.00 ",
    price: "30.00 ",
    sale: true,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: ["woman top", "yellow", "gray", "green", "zara"],
    quantity: 1,
    stock: 10,
    star: 4,
  },
  {
    sku: 14,
    name: "Men's T-shirt",
    images: [
      "ecommerce/02.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/02.jpg",
      "ecommerce/07.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Men's Denim T-shirt",
    description:
      "Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With Button Closure Long Sleeve Casual Torn Lycra Denim Shirt.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "70.00",
    price: "60.00",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["yellow", "gray", "green"],
    size: ["M", "L", "XL"],
    brand: "max",
    tags: ["man shirt", "yellow", "gray", "green", "max"],
    quantity: 1,
    stock: 10,
    star: 4,

  },
  {
    sku: 15,
    name: "Woman Party Wear",
    images: [
      "ecommerce/07.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/01.jpg",
      "ecommerce/06.jpg",
      "ecommerce/02.jpg",
      "ecommerce/08.jpg"
    ],
    shortDescription: "Stylish Party Wear for women",
    description:
      "Stylish Party Wear for women",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "350.00",
    price: "30.00",
    sale: false,
    off: true,
    category: ["man shirt", "man jeans", "mens tshirt"],
    colors: ["yellow", "gray", "white"],
    size: ["M", "L", "XL"],
    brand: "biba",
    tags: ["woman top", "yellow", "gray", "white", "biba"],
    quantity: 1,
    stock: 10,
    star: 5,
  },
  {
    sku: 16,
    name: "Dream Beauty Fashion",
    images: [
      "ecommerce/01.jpg",
      "ecommerce/02.jpg",
      "ecommerce/03.jpg",
      "ecommerce/04.jpg",
      "ecommerce/05.jpg",
      "ecommerce/06.jpg",
      "ecommerce/07.jpg",
      "ecommerce/01.jpg"
    ],
    shortDescription: "Tops for Women Stylish",
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.",
    details:
      "This is where some detailes on monkies would go. This monkey done seent some shit.",
    salePrice: "360.00",
    price: "30.00 ",
    sale: false,
    category: ["woman top", "woman jeans"],
    colors: ["white", "black", "green"],
    size: ["M", "L", "XL"],
    brand: "zara",
    tags: ["woman jeans", "white", "black", "green", "zara"],
    quantity: 1,
    stock: 10,
    star: 5,
  },
],
  newproduct = [
    {
      productbox: [
        {
          img: '/images/ecommerce/01.jpg',
          name: 'Woman T-shirt',
          price: '100.00'
        },
        {
          img: '/images/ecommerce/02.jpg',
          name: 'Dream Beauty Fashion',
          price: '150.00'
        },
        {
          img: '/images/ecommerce/03.jpg',
          name: 'VOXATI',
          price: '200.00'
        }
      ]
    },
    {
      productbox: [
        {
          img: '/images/ecommerce/01.jpg',
          name: 'Fancy Shirt',
          price: '100.00'
        },
        {
          img: '/images/ecommerce/02.jpg',
          name: 'Fancy Shirt',
          price: '150.00'
        },
        {
          img: '/images/ecommerce/03.jpg',
          name: 'Fancy Shirt',
          price: '200.00'
        }
      ]
    }
  ],
  brand: string[] = ["Clothing", "Bags", "Footwear", "Watches", "Accessories"],
  services: services[] = [
    {
      icon: "cil:truck",
      title: "Free Shipping",
      desc: "Free Shipping World Wide",
    },
    {
      icon: "ic:round-access-time",
      title: "24 X 7 Service",
      desc: "Online Service For New Customer",
    },
    {
      icon: "octicon:gift-16",
      title: "Festival Offer",
      desc: "New Online Special Festival",
    },
    {
      icon: "lucide:credit-card",
      title: "Online Payment",
      desc: "Contrary To Popular Belief.",
    },
  ],
  CategoryPageTableData: category[] = [
    {
      image: "product/1.png",
      name: "T-Shirts",
      category: "Special PriceGet at flat ₹229",
      color: "badge-light-primary",
      status: "Clothing",
    },
    {
      image: "product/category/1.png",
      name: "Shoes",
      category: "Special PriceGet at flat ₹229",
      color: "badge-light-primary",
      status: "Footwear",
    },
    {
      image: "product/category/2.png",
      name: "Handbags",
      category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
      color: "badge-light-secondary",
      status: "Accessories",
    },
    {
      image: "product/products/1.png",
      name: "Chairs",
      category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
      color: "badge-light-secondary",
      status: "Electronic",
    },
    {
      image: "product/category/3.png",
      name: "Toys",
      category: "Assembling Shape Educational Toys (Multicolor)",
      color: "badge-light-success",
      status: "Electronic",
    },
    {
      image: "product/category/4.png",
      name: "Slipper",
      category: "Easy to wear and comfortable slip on slippers",
      color: "badge-light-primary",
      status: "Footwear",
    },
    {
      image: "product/category/5.png",
      name: "Cameras",
      category: "Our computers and tablets include all the big brands.",
      color: "badge-light-success",
      status: "Electronic",
    },
    {
      image: "product/2.png",
      name: "T-Shirts",
      category: "Special PriceGet at flat ₹100",
      color: "badge-light-primary",
      status: "Clothing",
    },
    {
      image: "product/product-categories/watch.png",
      name: "Watches",
      category: "Experience luxury and precision with our meticulously crafted timepieces",
      color: "badge-light-success",
      status: "Electronic",
    },
    {
      image: "product/12.png",
      name: "T-Shirts",
      category: "Special PriceGet at flat ₹300",
      color: "badge-light-primary",
      status: "Clothing",
    },
    {
      image: "product/category/1.png",
      name: "Shoes",
      category: "Up to ₹300, on orders of ₹1750 and above T&C",
      color: "badge-light-primary",
      status: "Footwear",
    },
    {
      image: "product/category/3.png",
      name: "Toys",
      category: "Assembling Shape Educational Toys (Multicolor)",
      color: "badge-light-success",
      status: "Electronic",
    },
    {
      image: "product/category/4.png",
      name: "Slipper",
      category: "Easy to wear and comfortable slip on slippers",
      color: "badge-light-primary",
      status: "Footwear",
    },
    {
      image: "product/category/5.png",
      name: "Cameras",
      category: "Our computers and tablets include all the big brands.",
      color: "badge-light-success",
      status: "Electronic",
    },
    {
      image: "product/product-categories/watch.png",
      name: "Watches",
      category: "Experience luxury and precision with our meticulously crafted timepieces",
      color: "badge-light-success",
      status: "Electronic",
    },
    {
      image: "product/1.png",
      name: "T-Shirts",
      category: "Special PriceGet at flat ₹229",
      color: "badge-light-primary",
      status: "Clothing",
    },
    {
      image: "product/category/1.png",
      name: "Shoes",
      category: "Up to ₹300, on orders of ₹1750 and above T&C",
      color: "badge-light-primary",
      status: "Footwear",
    },
    {
      image: "product/category/2.png",
      name: "Handbags",
      category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
      color: "badge-light-secondary",
      status: "Accessories",
    },
    {
      image: "product/products/1.png",
      name: "Chairs",
      category: "Passed 30+ quality checks performed by experts for Comfort & Design.",
      color: "badge-light-secondary",
      status: "Electronic",
    },
  ],
  productlist: ProductItem[] = [
    {
      img: "product/product-categories/laptop.png",
      name: "Apple Desktop 2024",
      sku: "02145YK796",
      category: "Laptops",
      price: "56000.00",
      qty: "13",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/phone.png",
      name: "Apple iphone 13 Pro",
      sku: "56379FG3AW",
      category: "Smart Phones",
      price: "19000.00",
      qty: "48",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "3",
      product: ""
    },
    {
      img: "product/product-categories/headphone.png",
      name: "Headphones",
      sku: "33KR5689B1",
      category: "Smart Headphones",
      price: "10000.00",
      qty: "5",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/wireless-headphone.png",
      name: "wireless-headphone",
      sku: "AD6789HEY0",
      category: "Smart Headphones ",
      price: "15000.00",
      qty: "4",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: ""
    },
    {
      img: "product/1.png",
      name: "Wood Chair",
      sku: "456DF78DFQ",
      category: "Furniture",
      price: "99000.00",
      qty: "2",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "5",
      product: ""
    },
    {
      img: "email-template/3.png",
      name: "Wood Chair",
      sku: "5633GD3K54",
      category: "Furniture",
      price: "1000.00",
      qty: "8",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "5",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/ipad.png",
      name: "MacBook Air 13.3-inch",
      sku: "589KO8PPQ8",
      category: "Laptops ",
      price: "45000.00",
      qty: "10",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: ""
    },
    {
      img: "product/product-categories/mouse.png",
      name: "M185 Compact Wireless Mouse",
      sku: "02145YK796",
      category: "E-Commerce",
      price: "56000.00",
      qty: "13",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "2",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "other-images/cart-img.jpg",
      name: "Wood chairs",
      sku: "568GH3LLQ2",
      category: "Furniture",
      price: "78000.00",
      qty: "50",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: ""
    },
    {
      img: "product/product-categories/watch.png",
      name: "Smart watch",
      sku: "58FR7K34F6",
      category: "Electric",
      price: "25000.00",
      qty: "48",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "5",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/dvd.png",
      name: "DVD",
      sku: "HG5667DFQ1",
      category: "Electric",
      price: "5600.00",
      qty: "10",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: ""
    },
    {
      img: "product/product-categories/speaker.png",
      name: "Speakers",
      sku: "02145YK796",
      category: "Electric",
      price: "12200.00",
      qty: "50",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: ""
    },
    {
      img: "product/product-categories/phone.png",
      name: "Apple iphone 13 Pro",
      sku: "56379FG3AW",
      category: "Smart Phones",
      price: "19000.00",
      qty: "48",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "3",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/headphone.png",
      name: "Headphones",
      sku: "33KR5689B1",
      category: "Smart Headphones",
      price: "10000.00",
      qty: "5",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: ""
    },
    {
      img: "other-images/cart-img.jpg",
      name: "Wood chairs",
      sku: "568GH3LLQ2",
      category: "Furniture",
      price: "78000.00",
      qty: "50",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: ""
    },
    {
      img: "product/product-categories/watch.png",
      name: "Smart watch",
      sku: "58FR7K34F6",
      category: "Electric",
      price: "25000.00",
      qty: "48",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/phone.png",
      name: "Apple iphone 13 Pro",
      sku: "56379FG3AW",
      category: "Smart Phones",
      price: "19000.00",
      qty: "48",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: ""
    },
    {
      img: "product/product-categories/headphone.png",
      name: "Headphones",
      sku: "33KR5689B1",
      category: "Smart Headphones",
      price: "10000.00",
      qty: "5",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "3",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/wireless-headphone.png",
      name: "wireless-headphone",
      sku: "AD6789HEY0",
      category: "Smart Headphones",
      price: "15000.00",
      qty: "4",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "5",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/1.png",
      name: "Wood Chair",
      sku: "456DF78DFQ",
      category: "Furniture",
      price: "99000.00",
      qty: "2",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: ""
    },
    {
      img: "email-template/3.png",
      name: "Wood Chair",
      sku: "5633GD3K54",
      category: "Furniture",
      price: "1000.00",
      qty: "8",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "3",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/laptop.png",
      name: "Apple Desktop 2024",
      sku: "02145YK796",
      category: "Laptops",
      price: "56000.00",
      qty: "13",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: ""
    },
    {
      img: "product/product-categories/phone.png",
      name: "Apple iphone 13 Pro",
      sku: "56379FG3AW",
      category: "Smart Phones",
      price: "19000.00",
      qty: "48",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/headphone.png",
      name: "Headphones",
      sku: "33KR5689B1",
      category: "Smart Headphones",
      price: "10000.00",
      qty: "5",
      status: "In Stock",
      statusclass: "badge-light-primary",
      rating: "5",
      product: "Apple iphone 13 Pro"
    },
    {
      img: "product/product-categories/wireless-headphone.png",
      name: "wireless-headphone",
      sku: "AD6789HEY0",
      category: "Smart Headphones",
      price: "15000.00",
      qty: "4",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "4",
      product: ""
    },
    {
      img: "product/1.png",
      name: "Wood Chair",
      sku: "456DF78DFQ",
      category: "Furniture",
      price: "99000.00",
      qty: "2",
      status: "Sold Out",
      statusclass: "badge-light-secondary",
      rating: "2",
      product: "Apple iphone 13 Pro"
    }
  ],
  order: order[] = [
    {
      img: "ecommerce/product-table-6.png",
      title: "Women Top",
    },
    {
      img: "ecommerce/product-table-5.png",
      title: "Women Shorts",
    },
    {
      img: "ecommerce/product-table-4.png",
      title: "Cyclamen ",
    },
    {
      img: "ecommerce/product-table-3.png",
      title: "Men Solid Denim jacket",
    },
    {
      img: "ecommerce/product-table-2.png",
      title: "Blue shirt",
    },
    {
      img: "ecommerce/product-table-1.png",
      title: "red shirt",
    },
    {
      img: "ecommerce/product-table-1.png",
      title: "Red shirt",
    },
    {
      img: "ecommerce/product-table-6.png",
      title: "Women Top",
    },
    {
      img: "ecommerce/product-table-5.png",
      title: "Women shorts",
    },
  ],
  shippings: order[] = [
    {
      img: "ecommerce/product-table-6.png",
      title: "Women Top",
    },
    {
      img: "ecommerce/product-table-5.png",
      title: "Women Shorts",
    },
    {
      img: "ecommerce/product-table-4.png",
      title: "Cyclamen ",
    },
    {
      img: "ecommerce/product-table-3.png",
      title: "Men Solid Denim jacket",
    },
    {
      img: "ecommerce/product-table-2.png",
      title: "Blue shirt",
    },
    {
      img: "ecommerce/product-table-1.png",
      title: "red shirt",
    },
    {
      img: "ecommerce/product-table-1.png",
      title: "Red shirt",
    },
    {
      img: "ecommerce/product-table-6.png",
      title: "Women Top",
    },
    {
      img: "ecommerce/product-table-5.png",
      title: "Women shorts",
    },
  ],
  cancal: order[] = [
    {
      img: "ecommerce/product-table-6.png",
      title: "Women Top",
    },
    {
      img: "ecommerce/product-table-5.png",
      title: "Women Shorts",
    },
    {
      img: "ecommerce/product-table-4.png",
      title: "Cyclamen ",
    },
    {
      img: "ecommerce/product-table-3.png",
      title: "Men Solid Denim jacket",
    },
    {
      img: "ecommerce/product-table-2.png",
      title: "Blue shirt",
    },
    {
      img: "ecommerce/product-table-1.png",
      title: "red shirt",
    },
    {
      img: "ecommerce/product-table-1.png",
      title: "Red shirt",
    },
    {
      img: "ecommerce/product-table-6.png",
      title: "Women Top",
    },
    {
      img: "ecommerce/product-table-5.png",
      title: "Women shorts",
    },
  ],
  history: history[] = [
    {
      id: 1,
      img: "product/1.png",
      product: "Party Wear Gown",
      status: "Processing",
      size: "M",
      color: "Red",
      articleNumber: 4215738,
      units: 2,
      price: 21,
    },
    {
      id: 2,
      img: "product/13.png",
      product: "Fancy watch",
      status: "Processing",
      size: "Free Size",
      color: "Brown",
      articleNumber: 5476182,
      units: 1,
      price: 10,
    },
    {
      id: 3,
      img: "product/4.png",
      product: "Man shoes",
      status: "Processing",
      size: "8",
      color: "Black & white",
      articleNumber: 1756457,
      units: 1,
      price: 18,
    },
    {
      id: 4,
      img: "product/10.png",
      product: "Ladies side bag",
      status: "Shipped",
      size: "Medium",
      color: "Yellow",
      articleNumber: 7451725,
      units: 1,
      price: 13,
    },
    {
      id: 5,
      img: "product/12.png",
      product: "Ladies Hills",
      status: "Shipped",
      size: "8",
      color: "Pink",
      articleNumber: 4127421,
      units: 2,
      price: 10,
    },
    {
      id: 6,
      img: "product/3.png",
      product: "Fancy Ladies Jacket",
      status: "Shipped",
      size: "XL",
      color: "Red",
      articleNumber: 3581714,
      units: 2,
      price: 24,
    },
    {
      id: 7,
      img: "product/2.png",
      product: "Ladies Handbag",
      status: "Shipped",
      size: "Small",
      color: "Brown",
      articleNumber: 6748142,
      units: 1,
      price: 15,
    },
    {
      id: 8,
      img: "product/15.png",
      product: "I phone 13 mobile",
      status: "Cancelled",
      size: "Small",
      color: "Blue",
      articleNumber: 5748214,
      units: 1,
      price: 250,
    },
    {
      id: 9,
      img: "product/14.png",
      product: "Smart Watch",
      status: "Cancelled",
      size: "Free Size",
      color: "Black",
      articleNumber: 2471254,
      units: 2,
      price: 30,
    },
    {
      id: 10,
      img: "product/11.png",
      product: "Slipper",
      status: "Cancelled",
      size: "6",
      color: "Brown",
      articleNumber: 8475112,
      units: 1,
      price: 6,
    },
    {
      id: 11,
      img: "product/2.png",
      product: "Ladies Handbag",
      status: "Shipped",
      size: "Small",
      color: "Brown",
      articleNumber: 6748142,
      units: 1,
      price: 30,
    },
    {
      id: 12,
      img: "product/15.png",
      product: "I phone 13 mobile",
      status: "Cancelled",
      size: "Small",
      color: "Blue",
      articleNumber: 5748214,
      units: 1,
      price: 250,
    },
    {
      id: 13,
      img: "product/14.png",
      product: "Smart Watch",
      status: "Cancelled",
      size: "Free Size",
      color: "Black",
      articleNumber: 2471254,
      units: 2,
      price: 30,
    },
    {
      id: 14,
      img: "product/11.png",
      product: "Slipper",
      status: "Cancelled",
      size: "6",
      color: "Brown",
      articleNumber: 8475112,
      units: 1,
      price: 6,
    },
    {
      id: 15,
      img: "product/1.png",
      product: "Party Wear Gown",
      status: "Processing",
      size: "M",
      color: "Red",
      articleNumber: 4215738,
      units: 2,
      price: 21,
    },
    {
      id: 16,
      img: "product/13.png",
      product: "Fancy watch",
      status: "Processing",
      size: "Free Size",
      color: "Brown",
      articleNumber: 5476182,
      units: 1,
      price: 10,
    },
    {
      id: 17,
      img: "product/4.png",
      product: "Man shoes",
      status: "Processing",
      size: "8",
      color: "Black & white",
      articleNumber: 1756457,
      units: 1,
      price: 18,
    },
    {
      id: 18,
      img: "product/10.png",
      product: "Ladies side bag",
      status: "Shipped",
      size: "Medium",
      color: "Yellow",
      articleNumber: 7451725,
      units: 1,
      price: 13,
    },
    {
      id: 19,
      img: "product/12.png",
      product: "Ladies Hills",
      status: "Shipped",
      size: "8",
      color: "Pink",
      articleNumber: 4127421,
      units: 2,
      price: 10,
    },
    {
      id: 20,
      img: "product/3.png",
      product: "Fancy Ladies Jacket",
      status: "Shipped",
      size: "XL",
      color: "Red",
      articleNumber: 3581714,
      units: 2,
      price: 24,
    },
  ],
  wishlist: wishlist[] = [
    {
      name: "Women's Top",
      img: "ecommerce/01.jpg",
      star1: "fa-star-o",
      star2: "fa-star-o",
      price: "220",
      color: "text-success",
      stock: "In stock",
    },
    {
      name: "Men's Jacket",
      img: "ecommerce/02.jpg",
      star1: "fa-star",
      star2: "fa-star-half-o",
      price: "250",
      color: "text-danger",
      stock: "Out of stock",
    },
    {
      name: "Women's T-shirt",
      img: "ecommerce/03.jpg",
      star1: "fa-star",
      star2: "fa-star-half-o",
      price: "200",
      color: "text-danger",
      stock: "Out of stock",
    },
    {
      name: "Denim Jacket",
      img: "ecommerce/04.jpg",
      star1: "fa-star-half-o",
      star2: "fa-star-o",
      price: "300",
      color: "text-success",
      stock: "In stock",
    },
    {
      name: "Women's Dress",
      img: "ecommerce/05.jpg",
      star1: "fa-star-half-o",
      star2: "fa-star-o",
      price: "150",
      color: "text-danger",
      stock: "Out of stock",
    },
    {
      name: "Women's Jacket",
      img: "ecommerce/06.jpg",
      star1: "fa-star",
      star2: "fa-star",
      price: "250",
      color: "text-success",
      stock: "In stock",
    },
    {
      name: "Women's Dress",
      img: "ecommerce/05.jpg",
      star1: "fa-star-half-o",
      star2: "fa-star-o",
      price: "150",
      color: "text-danger",
      stock: "Out of stock",
    },
    {
      name: "Men's Shirt",
      img: "ecommerce/07.jpg",
      star1: "fa-star",
      star2: "fa-star-o",
      price: "210",
      color: "text-success",
      stock: "In stock",
    },
    {
      name: "Men's Shirt",
      img: "ecommerce/08.jpg",
      star1: "fa-star-half-o",
      star2: "fa-star-o",
      price: "150",
      color: "text-danger",
      stock: "out of stock",
    },
    {
      name: "Women's Top",
      img: "ecommerce/01.jpg",
      star1: "fa-star-o",
      star2: "fa-star-o",
      price: "120",
      color: "text-danger",
      stock: "Out of stock",
    },
    {
      name: "Men's Jacket",
      img: "ecommerce/02.jpg",
      star1: "fa-star",
      star2: "fa-star-half-o",
      price: "300",
      color: "text-success",
      stock: "In stock",
    },
    {
      name: " Women's T-shirt",
      img: "ecommerce/03.jpg",
      star1: "fa-star",
      star2: "fa-star-half-o",
      price: "150",
      color: "text-danger",
      stock: "Out of stock",
    },
  ],
  pricing: pricing[] = [
    {
      id: 1,
      title: "standard",
      price: "20",
      disk: "50GB Disk Space",
      email: "50 Email Accounts",

      Sub: "Maintenance",
      domains: "15 Subdomains",
    },
    {
      id: 2,
      title: "PREMIUM",
      price: "20",
      disk: "10% on all product",
      email: "50 Email Accounts",

      Sub: "Maintenance",
      domains: "15 Subdomains",
    },
    {
      id: 3,
      title: " AUTHER PACK",
      price: "50",
      disk: "Upload 50 product",
      email: "50 Email Accounts",

      Sub: "Maintenance",
      domains: "15 Subdomains",
    },
    {
      id: 4,
      title: "auther pack",
      price: "50",
      disk: "Upload 50 product",
      email: "50 Email Accounts",

      Sub: "Maintenance",
      domains: "15 Subdomains",
    },
  ],
  simplePrice: simple[] = [
    {
      id: 1,
      title: "Standard",
      price: "$15",
    },
    {
      id: 2,
      title: "Business",
      price: "$25",
    },
    {
      id: 3,
      title: "Premium",
      price: "$35",
    },
    {
      id: 4,
      title: "Extra",
      price: "$45",
    },
  ],
  discount: PricingOption[] = [
    {
      for: "radio-icon",
      title: "Fixed Price",
      checked: false
    },
    {
      for: "radio-icon4",
      title: "BOGO(Buy one, Get one)",
      checked: true
    },
    {
      for: "radio-icon5",
      title: "Seasonal or holiday discount",
      checked: false
    },
    {
      for: "radio-icon6",
      title: "Percentage-based discount(%)",
      checked: false
    },
    {
      for: "radio-icon7",
      title: "Volume or bulk discount",
      checked: false
    }
  ],
  social: SocialLink[] = [
    {
      link: "https://www.facebook.com/",
      icon: "fa-facebook"
    },
    {
      link: "https://accounts.google.com/",
      icon: "fa-google-plus"
    },
    {
      link: "https://twitter.com/",
      icon: "fa-twitter"
    },
    {
      link: "https://www.instagram.com/",
      icon: "fa-instagram"
    },
    {
      link: "https://rss.app/",
      icon: "fa-rss"
    }
  ]