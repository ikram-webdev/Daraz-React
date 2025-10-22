import React from "react";
import "./daraz.css";

let Products = [
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/7bd3c3788e111a36d9a90d11badf8948.jpg_400x400q80.jpg_.webp",
    productName: "Dettol Handwash Pump Original 250ml - Pack of 2",
    price: "Price: $32",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/04f31ecb1bb3449c4cff8612635aa50a.png_400x400q80.png_.webp",
    productName: "Organic Inn Peanut Butter - Smooth 1 kg",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/1e97f5bb82c865acbf974d65571bd89d.jpg_400x400q80.jpg_.webp",
    productName:
      "Bona Papa Super Diapers - Super Economy Pack - Large Size 4 - 50 Pcs",
    price: "Price: $7",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/e338592c1ea45f30451028b06fc8461f.png_400x400q80.png_.webp",
    productName: "Tea Whitener - NESTLE EVERYDAY Powder 850g Pouch - Original",
    price: "Price: $8",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/9de17b05293252566b56e2a7b1022039.jpg_400x400q80.jpg_.webp",
    productName:
      "Height grow powder, height increase supplement, height gain powder.",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/3c9d8394ee094b6d23cf203916a02c68.jpg_400x400q80.jpg_.webp",
    productName:
      "Beeswax Polish (PACK OF 2) ,Beewax Wood Polish and Cleaner for Furniture Care (85g) - 2 pcs",
    price: "Price: $3",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/3b744a6615b4729c047ae01df1a22293.jpg_400x400q80.jpg_.webp",
    productName:
      "Seed Cycle For PCOS Kit 150 grams each | Imported | Premium Quality | Flax | Pumpkin | Sesame | Sunflower By Nuts N Snax",
    price: "Price: $3",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/9de17b05293252566b56e2a7b1022039.jpg_400x400q80.jpg_.webp",
    productName:
      "Height grow powder, height increase supplement, height gain powder, natural height booster, ayurvedic height grow.",
    price: "Price: $1.5",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/3f906e6e50f6ae459a81834a1768dc96.png_400x400q80.png_.webp",
    productName:
      "Baby Head Shaping Pillow – Soft Memory Foam, Flat Head Prevention (3-6 Months), Anti-Roll, Neck Support – For Crib, Car Seat, Stroller",
    price: "Price: $5",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: " A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/a73030cbe03ac38102dbc8b906612684.png_400x400q80.png_.webp",
    productName:
      "Cat Creamy Treats Chicken 75gm - 5 Sticks of 15GM - Wimow Cat Snacks Creamy Cat Treats",
    price: "Price: $2",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/4744e231fb4fef71b4e4a3c069a93da1.jpg_400x400q80.jpg_.avif",
    productName:
      "AirPods Pro 6 Hi-Fi Wireless Airbuds 5.0 Bluetooth Earphone Slim small size with Charging Case White",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/S6d83cb9f519c4152a7a99979ea8b8725c.jpg_400x400q80.jpg_.avif",
    productName:
      "Full Sleeves Winter Palin shirt and Trousers Tracksuits For Men's And Women's Gym Wear ,Running",
    price: "Price: $5",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/b829d9164429f20393786d5c8bd0d459.jpg_400x400q80.jpg_.avif",
    productName:
      "Brown Genuine Leather Wallet For Men/Premium Quality Leather Wallet For Men/Boys",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/Sddfb51d3f1b1468c9e943e1c01229fe4F.jpg_400x400q80.jpg_.avif",
    productName: "Quality Laptop bag , Backpack, Travel bag",
    price: "Price: $30",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/fbd03319531804d10f1bbd15e9cea349.jpg_400x400q80.jpg_.avif",
    productName:
      "Manual Water Pump | For 19 Liter Cans Large - Bottle Water Pump Dispenser |",
    price: "Price: $7",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/collect/sg/p/74d0ca57323f265f3923185ffd8d75e3.jpg_400x400q80.jpg_.avif",
    productName:
      "Luxury Brand 3 Pcs/set Women's Cross Body & Shoulder Bag - Large Capacity Women Bag Ladies Leather Tote Fashion Shoulder Bags for Women 2021 Wallet",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/63dda1a2861dcc81a31d23e80da70272.jpg_400x400q80.jpg_.avif",
    productName:
      "Newstyle Leaf Shape Soap Box Drain Soap Holder Box Bathroom Shower Soap Holder Dish Storage Plate Tray Bathroom Supplies Bathroom Gadget",
    price: "Price: $0.5",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/2ca2015bd30ed6d0b9e6c92f9790c898.jpg_400x400q80.jpg_.avif",
    productName:
      "Sandals For Men || New Stylish and Tranding Sandals For Boys House slippers for men",
    price: "Price: $2",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/73323a1c5241047e9bfb4b7c07386966.jpg_400x400q80.jpg_.avif",
    productName:
      "Game over printed Summer Tracksuit T-Shirt and Shorts for Men",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/Sc01905cd4a934ef89beee57867487ecen.jpg_400x400q80.jpg_.avif",
    productName:
      "Dior Sauvage Perfume For Men | Sauvage Dior | 100ml - Impression | Good Long Lasting | Savage Perfume",
    price: "Price: $9",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/a23c4afa59fe2fa90cae404feb9d9594.jpg_400x400q80.jpg_.avif",
    productName: "3Pcs Large Foldable Clothes Storage Zipper Bag",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/S72bcc1928e35463d8a0d77d83834c4deL.jpg_400x400q80.jpg_.avif",
    productName:
      "Silicone Phone Cases For iPhone 16Promax, 16Pro, 16, 15Promax, 15Pro, 15Plus, iPhone 15, 14Promax, 14Pro, 14Plus, 14, 13Promax, 13Pro, 13, 12Promax, 12Pro, 12, 11Promax, 11Pro, 11, X/Xs, XMAX",
    price: "Price: $4",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/S6851bac42be4472fbe5f159584c939cbm.jpg_400x400q80.jpg_.avif",
    productName: "Airsoft Machine Toy for Kids",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/a6d9970694706088548fc668ff0c7e1b.png_400x400q80.png_.avif",
    productName:
      "10 Colors Quick-drying Slippers For Bathroom/Washroom Anti-slip Bathroom chappal",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/Sb49f7d9ca2c04ba2a43b2c002fb9363aX.jpg_400x400q80.jpg_.webp",
    productName:
      "All Season Men & Women Bathroom Slippers Casual Shower House Slippers Waterproof Non-Slip Chappal for Unisex",
    price: "Price: $2",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/b87ec6f92e4af49dc4fa9ddccf7bda8f.png_400x400q80.png_.avif",
    productName:
      "Silicone Double Head Mask Brush, Silicone Face Wash Brush, & Silicone Shampoo Brush Clean The Scalp , Mud Film Special Scraper Applicator, Facial Cleansing Brush, Cleaning Tool",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/ad7f24a2bf79b0e7064a2b85fea1ce7b.jpg_400x400q80.jpg_.avif",
    productName:
      "Mini Wireless Bluetooth Earbuds In-Ear Stereo Headphones with Noise Cancellation",
    price: "Price: $1",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/c5ae45dbc61f2c06af94d68c3b2912d4.jpg_400x400q80.jpg_.avif",
    productName:
      "Silicone Suction Pad Phone Holder Self-Adhesive Rubber Mat 8x5.5cm",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/S141b56908a5f40428152bfefe1048043D.jpg_400x400q80.jpg_.avif",
    productName: "Spiderman Costume For Kid For 2 to 11 Years",
    price: "Price: $2",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/90238f131195096ae8aaad774de4345b.jpg_400x400q80.jpg_.avif",
    productName:
      "Keratin Hair Mask Keratin Hair Treatment Straighten Hair For Hair 500 ML",
    price: "Price: $20",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/334781221a91d31b0804384c2fc402a9.jpg_400x400q80.jpg_.avif",
    productName: "Dell Pro Sleeve 13 (Original)",
    price: "Price: $100",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/6d7ed11cd11543c8592839ee0fb0818b.jpg_400x400q80.jpg_.avif",
    productName:
      "Beautiful Glass Bottle Water Bottle with Vacuum Flask and Loop (400 ML) Temperature Resistant for Hot and Cold Water, Milk, Lassi, Juice, Smoothie...",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/3d84ff8a217a68d6479f9973882e58b5.jpg_400x400q80.jpg_.avif",
    productName:
      "Stylish Pocket Winter Jacket and Upper for Men Fine Stitched - Premium Quality and Fashionable Outerwear",
    price: "Price: $33",
    cart: "Buy Now",
  },
  {
    productImage:
      "Stylish Pocket Winter Jacket and Upper for Men Fine Stitched - Premium Quality and Fashionable Outerwear",
    productName:
      "Moon Touch Lip & Cheek Tint – 20ml – Natural Finish – Hydrating & Long-Lasting – 7 Shades",
    price: "Price: $4",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/g/kf/S3524ff8a08ff43b0bdfb97b4bf938b77e.jpg_400x400q80.jpg_.avif",
    productName: "Loafers for men || Shoes for men || trending loafers for men",
    price: "Price: $12",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/b0f7ad4ad69993c103f06d6806b88bdc.jpg_400x400q80.jpg_.webp",
    productName: "Sandal for men / Peshawari chappal for men / Stylish sandals for men",
    price: "Price: $29",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/3106f110002032588cae8ad7c7568092.jpg_400x400q80.jpg_.avif",
    productName: "Pack of 3 pairs| Ankle socks for men women| multi-colors| Low cut socks| Short socks",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
  {
    productImage:
      "https://img.drz.lazcdn.com/static/pk/p/66ba3edb6537c7f2a47452bb986d53d7.jpg_400x400q80.jpg_.webp",
    productName: "The Bookshop: A History of the American Bookstore",
    price: "Price: $10",
    cart: "Buy Now",
  },
];

function Daraz() {
  return (
    <div>
      <div className="logo">
        <img src="./public/daraz.png" alt="" />
      </div>
      <div className="products">
        {Products.map((meriProduct) => {
          return <DarazProducts {...meriProduct} />;
        })}
      </div>
    </div>
  );
}

export default Daraz;

function DarazProducts(props) {
  console.log(props);
  return (
    <div className="product">
      <img src={props.productImage} alt="product" />
      <h5>{props.productName}</h5>
      <div className="priceCart">
        <p>{props.price}</p>
        <button>{props.cart}</button>
      </div>
    </div>
  );
}
