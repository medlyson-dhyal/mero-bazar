import Array "mo:core/Array";
import Text "mo:core/Text";
import CatalogTypes "../types/catalog";

module {
  public type Product = CatalogTypes.Product;

  let products : [Product] = [
    // Electronics (10 products)
    {
      id = 1;
      title = "Samsung Galaxy S24 Ultra";
      description = "The ultimate Galaxy experience with 200MP camera, S Pen, and AI-powered features. 6.8-inch Dynamic AMOLED display.";
      price = 109999;
      originalPrice = 129999;
      discountPercent = 15;
      rating = 48;
      reviewCount = 2341;
      images = ["https://picsum.photos/seed/galaxy-s24/400/400", "https://picsum.photos/seed/galaxy-s24-back/400/400"];
      category = "Electronics";
      sellerId = "samsung_official";
      inStock = true;
      specs = [("RAM", "12GB"), ("Storage", "256GB"), ("Battery", "5000mAh"), ("Display", "6.8 inch AMOLED")];
      tags = ["smartphone", "samsung", "android", "flagship"];
    },
    {
      id = 2;
      title = "Apple iPhone 15 Pro";
      description = "Titanium design, A17 Pro chip, and a pro camera system with 48MP main camera. The most advanced iPhone ever.";
      price = 119999;
      originalPrice = 134999;
      discountPercent = 11;
      rating = 49;
      reviewCount = 3876;
      images = ["https://picsum.photos/seed/iphone15/400/400", "https://picsum.photos/seed/iphone15pro/400/400"];
      category = "Electronics";
      sellerId = "apple_store";
      inStock = true;
      specs = [("Chip", "A17 Pro"), ("Storage", "256GB"), ("Camera", "48MP"), ("Display", "6.1 inch Super Retina XDR")];
      tags = ["smartphone", "apple", "ios", "flagship"];
    },
    {
      id = 3;
      title = "Sony WH-1000XM5 Headphones";
      description = "Industry-leading noise cancelling headphones with 30-hour battery life and Auto NC Optimizer.";
      price = 24999;
      originalPrice = 34999;
      discountPercent = 29;
      rating = 47;
      reviewCount = 1562;
      images = ["https://picsum.photos/seed/sony-headphones/400/400"];
      category = "Electronics";
      sellerId = "sony_official";
      inStock = true;
      specs = [("Battery", "30 hours"), ("Driver", "30mm"), ("Connectivity", "Bluetooth 5.2"), ("Weight", "250g")];
      tags = ["headphones", "sony", "noise-cancelling", "wireless"];
    },
    {
      id = 4;
      title = "MacBook Air M2";
      description = "Supercharged by the next-generation M2 chip. Fanless design, 18-hour battery, Liquid Retina display.";
      price = 99999;
      originalPrice = 114999;
      discountPercent = 13;
      rating = 49;
      reviewCount = 987;
      images = ["https://picsum.photos/seed/macbook-air/400/400"];
      category = "Electronics";
      sellerId = "apple_store";
      inStock = true;
      specs = [("Chip", "Apple M2"), ("RAM", "8GB"), ("Storage", "256GB SSD"), ("Display", "13.6 inch Liquid Retina")];
      tags = ["laptop", "apple", "macbook", "m2"];
    },
    {
      id = 5;
      title = "Samsung 55 inch QLED 4K TV";
      description = "Quantum HDR technology with 100% Color Volume. Quantum Processor 4K for brilliant picture quality.";
      price = 64999;
      originalPrice = 84999;
      discountPercent = 24;
      rating = 46;
      reviewCount = 734;
      images = ["https://picsum.photos/seed/samsung-tv/400/400"];
      category = "Electronics";
      sellerId = "samsung_official";
      inStock = true;
      specs = [("Resolution", "4K UHD"), ("Screen Size", "55 inch"), ("HDR", "Quantum HDR"), ("Refresh Rate", "120Hz")];
      tags = ["tv", "samsung", "qled", "4k"];
    },
    {
      id = 6;
      title = "iPad Air 5th Generation";
      description = "Supercharged by M1 chip. 10.9-inch Liquid Retina display. 5G capable. Center Stage with 12MP Ultra Wide front camera.";
      price = 54999;
      originalPrice = 59999;
      discountPercent = 8;
      rating = 48;
      reviewCount = 1203;
      images = ["https://picsum.photos/seed/ipad-air/400/400"];
      category = "Electronics";
      sellerId = "apple_store";
      inStock = true;
      specs = [("Chip", "Apple M1"), ("Storage", "64GB"), ("Display", "10.9 inch Liquid Retina"), ("Camera", "12MP")];
      tags = ["tablet", "apple", "ipad", "m1"];
    },
    {
      id = 7;
      title = "Canon EOS R50 Mirrorless Camera";
      description = "24.2MP APS-C sensor, 4K video, Dual Pixel CMOS AF II with subject tracking. Perfect for creators.";
      price = 57999;
      originalPrice = 69999;
      discountPercent = 17;
      rating = 47;
      reviewCount = 456;
      images = ["https://picsum.photos/seed/canon-camera/400/400"];
      category = "Electronics";
      sellerId = "canon_official";
      inStock = true;
      specs = [("Sensor", "24.2MP APS-C"), ("Video", "4K 30fps"), ("AF Points", "651"), ("Battery Life", "390 shots")];
      tags = ["camera", "canon", "mirrorless", "photography"];
    },
    {
      id = 8;
      title = "JBL Charge 5 Bluetooth Speaker";
      description = "Powerful JBL Pro Sound with bold JBL Original Pro Sound, wireless Bluetooth streaming, and 20 hours of playtime.";
      price = 12999;
      originalPrice = 15999;
      discountPercent = 19;
      rating = 46;
      reviewCount = 2109;
      images = ["https://picsum.photos/seed/jbl-speaker/400/400"];
      category = "Electronics";
      sellerId = "jbl_store";
      inStock = true;
      specs = [("Battery", "20 hours"), ("Waterproof", "IP67"), ("Output", "30W"), ("Connectivity", "Bluetooth 5.1")];
      tags = ["speaker", "jbl", "bluetooth", "waterproof"];
    },
    {
      id = 9;
      title = "Dell XPS 15 Laptop";
      description = "15.6-inch OLED display, Intel Core i7-12700H, 16GB RAM, 512GB SSD. The perfect balance of power and portability.";
      price = 149999;
      originalPrice = 169999;
      discountPercent = 12;
      rating = 47;
      reviewCount = 678;
      images = ["https://picsum.photos/seed/dell-xps/400/400"];
      category = "Electronics";
      sellerId = "dell_official";
      inStock = false;
      specs = [("Processor", "Intel Core i7-12700H"), ("RAM", "16GB"), ("Storage", "512GB SSD"), ("Display", "15.6 inch OLED")];
      tags = ["laptop", "dell", "windows", "oled"];
    },
    {
      id = 10;
      title = "Apple Watch Series 9";
      description = "S9 chip, double tap gesture, brighter Always-On Retina display, carbon neutral. Health and fitness on your wrist.";
      price = 39999;
      originalPrice = 45999;
      discountPercent = 13;
      rating = 48;
      reviewCount = 1876;
      images = ["https://picsum.photos/seed/apple-watch/400/400"];
      category = "Electronics";
      sellerId = "apple_store";
      inStock = true;
      specs = [("Chip", "S9"), ("Display", "Always-On Retina"), ("Water Resistance", "50m"), ("Battery", "18 hours")];
      tags = ["smartwatch", "apple", "fitness", "health"];
    },
    // Fashion (10 products)
    {
      id = 11;
      title = "Levi's 501 Original Jeans";
      description = "The original jean. Straight leg, button fly, sits at the waist. Made with sustainable cotton.";
      price = 3499;
      originalPrice = 4999;
      discountPercent = 30;
      rating = 47;
      reviewCount = 5432;
      images = ["https://picsum.photos/seed/levis-jeans/400/400"];
      category = "Fashion";
      sellerId = "levis_official";
      inStock = true;
      specs = [("Fit", "Straight"), ("Material", "100% Cotton"), ("Closure", "Button Fly"), ("Rise", "Regular")];
      tags = ["jeans", "levis", "denim", "mens"];
    },
    {
      id = 12;
      title = "Nike Air Max 270";
      description = "The Nike Air Max 270 features Nike's biggest heel Air unit yet for an incredibly light, comfortable ride.";
      price = 8999;
      originalPrice = 12999;
      discountPercent = 31;
      rating = 47;
      reviewCount = 3210;
      images = ["https://picsum.photos/seed/nike-airmax/400/400"];
      category = "Fashion";
      sellerId = "nike_official";
      inStock = true;
      specs = [("Upper", "Mesh and synthetic"), ("Sole", "Rubber"), ("Air Unit", "270 Max Air"), ("Weight", "298g")];
      tags = ["shoes", "nike", "sneakers", "running"];
    },
    {
      id = 13;
      title = "Zara Floral Midi Dress";
      description = "Flowing midi dress with all-over floral print. V-neckline, short puff sleeves, and tie detail at waist.";
      price = 2999;
      originalPrice = 3999;
      discountPercent = 25;
      rating = 44;
      reviewCount = 876;
      images = ["https://picsum.photos/seed/floral-dress/400/400"];
      category = "Fashion";
      sellerId = "zara_store";
      inStock = true;
      specs = [("Material", "Polyester"), ("Length", "Midi"), ("Neckline", "V-neck"), ("Sleeve", "Short Puff")];
      tags = ["dress", "zara", "floral", "womens"];
    },
    {
      id = 14;
      title = "Adidas Ultraboost 23";
      description = "Experience exceptional energy return with the Adidas Ultraboost 23. BOOST midsole technology for every run.";
      price = 10999;
      originalPrice = 14999;
      discountPercent = 27;
      rating = 48;
      reviewCount = 2156;
      images = ["https://picsum.photos/seed/adidas-ultraboost/400/400"];
      category = "Fashion";
      sellerId = "adidas_official";
      inStock = true;
      specs = [("Upper", "Primeknit+"), ("Midsole", "BOOST"), ("Outsole", "Continental Rubber"), ("Drop", "10mm")];
      tags = ["shoes", "adidas", "running", "boost"];
    },
    {
      id = 15;
      title = "H&M Cotton Oversized Hoodie";
      description = "Relaxed-fit hoodie in soft cotton blend. Hood with drawstring, kangaroo pocket, and ribbed cuffs.";
      price = 1799;
      originalPrice = 2499;
      discountPercent = 28;
      rating = 43;
      reviewCount = 1432;
      images = ["https://picsum.photos/seed/hm-hoodie/400/400"];
      category = "Fashion";
      sellerId = "hm_store";
      inStock = true;
      specs = [("Material", "80% Cotton 20% Polyester"), ("Fit", "Oversized"), ("Closure", "Pullover"), ("Pocket", "Kangaroo")];
      tags = ["hoodie", "hm", "casual", "unisex"];
    },
    {
      id = 16;
      title = "Ray-Ban Aviator Classic Sunglasses";
      description = "The timeless Ray-Ban Aviator. Crystal lens, metal frame, and classic teardrop shape. UV400 protection.";
      price = 8499;
      originalPrice = 11999;
      discountPercent = 29;
      rating = 47;
      reviewCount = 3089;
      images = ["https://picsum.photos/seed/rayban-aviator/400/400"];
      category = "Fashion";
      sellerId = "rayban_official";
      inStock = true;
      specs = [("Lens", "Crystal"), ("Frame", "Metal"), ("UV Protection", "UV400"), ("Shape", "Aviator")];
      tags = ["sunglasses", "rayban", "aviator", "accessories"];
    },
    {
      id = 17;
      title = "Michael Kors Leather Tote Bag";
      description = "Pebbled leather tote with signature logo hardware. Zip closure, interior pockets, and detachable strap.";
      price = 18999;
      originalPrice = 25999;
      discountPercent = 27;
      rating = 46;
      reviewCount = 567;
      images = ["https://picsum.photos/seed/mk-tote/400/400"];
      category = "Fashion";
      sellerId = "mk_official";
      inStock = true;
      specs = [("Material", "Pebbled Leather"), ("Closure", "Zip"), ("Strap", "Detachable"), ("Interior", "Zip and slip pockets")];
      tags = ["bag", "michael-kors", "tote", "womens"];
    },
    {
      id = 18;
      title = "Polo Ralph Lauren Classic Fit Shirt";
      description = "Classic fit dress shirt in poplin cotton. Spread collar, button-front placket, and chest pocket.";
      price = 3999;
      originalPrice = 5999;
      discountPercent = 33;
      rating = 45;
      reviewCount = 1234;
      images = ["https://picsum.photos/seed/polo-shirt/400/400"];
      category = "Fashion";
      sellerId = "polo_official";
      inStock = true;
      specs = [("Material", "100% Cotton"), ("Fit", "Classic"), ("Collar", "Spread"), ("Care", "Machine washable")];
      tags = ["shirt", "polo", "formal", "mens"];
    },
    {
      id = 19;
      title = "Casio G-Shock Watch";
      description = "Shock resistant, 200-meter water resistance, solar powered, world time in 29 time zones.";
      price = 6999;
      originalPrice = 9999;
      discountPercent = 30;
      rating = 47;
      reviewCount = 2345;
      images = ["https://picsum.photos/seed/casio-gshock/400/400"];
      category = "Fashion";
      sellerId = "casio_official";
      inStock = true;
      specs = [("Water Resistance", "200m"), ("Power", "Solar"), ("Case", "Resin"), ("Features", "World Time, Alarm, Stopwatch")];
      tags = ["watch", "casio", "gshock", "sports"];
    },
    {
      id = 20;
      title = "Puma RS-X Sneakers";
      description = "The RS-X sneaker celebrates over 30 years of RS technology. Chunky design with bold color blocking.";
      price = 5999;
      originalPrice = 7999;
      discountPercent = 25;
      rating = 44;
      reviewCount = 876;
      images = ["https://picsum.photos/seed/puma-rsx/400/400"];
      category = "Fashion";
      sellerId = "puma_official";
      inStock = true;
      specs = [("Upper", "Mesh and leather"), ("Sole", "RS foam"), ("Closure", "Lace-up"), ("Technology", "RS running system")];
      tags = ["shoes", "puma", "sneakers", "casual"];
    },
    // Home & Living (10 products)
    {
      id = 21;
      title = "Dyson V15 Detect Vacuum";
      description = "Laser Detect technology reveals invisible dust. HEPA filtration captures allergens. 60 min run time.";
      price = 52999;
      originalPrice = 64999;
      discountPercent = 18;
      rating = 47;
      reviewCount = 1123;
      images = ["https://picsum.photos/seed/dyson-v15/400/400"];
      category = "Home & Living";
      sellerId = "dyson_official";
      inStock = true;
      specs = [("Battery", "60 min"), ("Filtration", "HEPA"), ("Suction", "230 AW"), ("Weight", "3.1kg")];
      tags = ["vacuum", "dyson", "cordless", "home"];
    },
    {
      id = 22;
      title = "Instant Pot Duo 7-in-1";
      description = "7-in-1 multi-use cooker: pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, warmer.";
      price = 7999;
      originalPrice = 10999;
      discountPercent = 27;
      rating = 47;
      reviewCount = 8765;
      images = ["https://picsum.photos/seed/instant-pot/400/400"];
      category = "Home & Living";
      sellerId = "instantpot_store";
      inStock = true;
      specs = [("Capacity", "6 Quart"), ("Functions", "7-in-1"), ("Programs", "13"), ("Material", "Stainless Steel")];
      tags = ["cooker", "instant-pot", "kitchen", "appliance"];
    },
    {
      id = 23;
      title = "IKEA MALM Bed Frame Queen";
      description = "Clean-lined bed frame with adjustable bed sides. Includes slatted bed base for support and ventilation.";
      price = 17999;
      originalPrice = 21999;
      discountPercent = 18;
      rating = 44;
      reviewCount = 2341;
      images = ["https://picsum.photos/seed/ikea-malm/400/400"];
      category = "Home & Living";
      sellerId = "ikea_store";
      inStock = true;
      specs = [("Size", "Queen (160x200cm)"), ("Material", "Fiberboard"), ("Color", "White"), ("Slatted base", "Included")];
      tags = ["bed", "ikea", "bedroom", "furniture"];
    },
    {
      id = 24;
      title = "Philips Hue Smart Bulb Starter Kit";
      description = "Control your lights from anywhere with the Philips Hue app. 16 million colors. Works with Alexa, Google, Apple.";
      price = 5999;
      originalPrice = 7999;
      discountPercent = 25;
      rating = 46;
      reviewCount = 3456;
      images = ["https://picsum.photos/seed/philips-hue/400/400"];
      category = "Home & Living";
      sellerId = "philips_official";
      inStock = true;
      specs = [("Bulbs", "3x E27"), ("Colors", "16 million"), ("Compatibility", "Alexa, Google, Siri"), ("Bridge", "Included")];
      tags = ["smart-home", "philips", "lighting", "hue"];
    },
    {
      id = 25;
      title = "Nespresso Vertuo Next Coffee Machine";
      description = "Brew 5 cup sizes from Espresso to Alto XL. Centrifusion technology extracts perfect flavor every time.";
      price = 12999;
      originalPrice = 16999;
      discountPercent = 24;
      rating = 46;
      reviewCount = 1876;
      images = ["https://picsum.photos/seed/nespresso/400/400"];
      category = "Home & Living";
      sellerId = "nespresso_store";
      inStock = true;
      specs = [("Cup Sizes", "5 sizes"), ("Technology", "Centrifusion"), ("Tank", "1.1L"), ("Heat Up", "30 seconds")];
      tags = ["coffee", "nespresso", "kitchen", "espresso"];
    },
    {
      id = 26;
      title = "MUJI Aroma Diffuser";
      description = "Ultrasonic aroma diffuser with soft LED light. Operates quietly with automatic shut-off for safety.";
      price = 2499;
      originalPrice = 3499;
      discountPercent = 29;
      rating = 45;
      reviewCount = 987;
      images = ["https://picsum.photos/seed/muji-diffuser/400/400"];
      category = "Home & Living";
      sellerId = "muji_store";
      inStock = true;
      specs = [("Capacity", "100ml"), ("Technology", "Ultrasonic"), ("Light", "LED"), ("Timer", "Auto shut-off")];
      tags = ["aromatherapy", "muji", "diffuser", "home"];
    },
    {
      id = 27;
      title = "Le Creuset Cast Iron Dutch Oven";
      description = "5.5-qt round French oven in iconic Marseille blue. Tight-fitting lid seals in moisture. Lifetime warranty.";
      price = 34999;
      originalPrice = 44999;
      discountPercent = 22;
      rating = 49;
      reviewCount = 2109;
      images = ["https://picsum.photos/seed/le-creuset/400/400"];
      category = "Home & Living";
      sellerId = "lecreuset_official";
      inStock = true;
      specs = [("Capacity", "5.5 Qt"), ("Material", "Cast Iron"), ("Color", "Marseille"), ("Compatible", "All cooktops including induction")];
      tags = ["cookware", "le-creuset", "dutch-oven", "kitchen"];
    },
    {
      id = 28;
      title = "Roomba i7+ Robot Vacuum";
      description = "iRobot Roomba i7+ automatically empties its own bin, learns your home, and cleans on a personalized schedule.";
      price = 44999;
      originalPrice = 59999;
      discountPercent = 25;
      rating = 46;
      reviewCount = 1345;
      images = ["https://picsum.photos/seed/roomba-i7/400/400"];
      category = "Home & Living";
      sellerId = "irobot_official";
      inStock = true;
      specs = [("Navigation", "iAdapt 3.0"), ("Bin", "Auto-Empty"), ("Runtime", "75 min"), ("Compatibility", "Alexa, Google")];
      tags = ["robot-vacuum", "irobot", "roomba", "smart-home"];
    },
    {
      id = 29;
      title = "Bamboo Bed Sheet Set Queen";
      description = "100% organic bamboo sheets, ultra-soft and breathable. 4-piece set with fitted, flat, and 2 pillowcases.";
      price = 3999;
      originalPrice = 5999;
      discountPercent = 33;
      rating = 46;
      reviewCount = 4321;
      images = ["https://picsum.photos/seed/bamboo-sheets/400/400"];
      category = "Home & Living";
      sellerId = "organic_living";
      inStock = true;
      specs = [("Material", "100% Bamboo"), ("Thread Count", "300"), ("Size", "Queen"), ("Set", "4 pieces")];
      tags = ["bedding", "bamboo", "sheets", "organic"];
    },
    {
      id = 30;
      title = "IKEA KALLAX Shelf Unit";
      description = "Versatile shelf unit can be used as a bookcase, room divider, or TV bench. 8 cubes for storage.";
      price = 8999;
      originalPrice = 10999;
      discountPercent = 18;
      rating = 44;
      reviewCount = 5678;
      images = ["https://picsum.photos/seed/ikea-kallax/400/400"];
      category = "Home & Living";
      sellerId = "ikea_store";
      inStock = true;
      specs = [("Size", "147x147cm"), ("Material", "Particleboard"), ("Color", "White"), ("Cubes", "8")];
      tags = ["shelf", "ikea", "storage", "furniture"];
    },
    // Sports (8 products)
    {
      id = 31;
      title = "Fitbit Charge 6 Fitness Tracker";
      description = "Track heart rate, SpO2, stress, sleep, and 40+ exercise modes. Built-in GPS, Google apps compatibility.";
      price = 13999;
      originalPrice = 17999;
      discountPercent = 22;
      rating = 46;
      reviewCount = 2341;
      images = ["https://picsum.photos/seed/fitbit-charge/400/400"];
      category = "Sports";
      sellerId = "fitbit_official";
      inStock = true;
      specs = [("Battery", "7 days"), ("GPS", "Built-in"), ("Water Resistance", "50m"), ("Sensors", "Heart rate, SpO2, EDA")];
      tags = ["fitness-tracker", "fitbit", "wearable", "health"];
    },
    {
      id = 32;
      title = "Wilson Pro Staff RF97 Tennis Racket";
      description = "Roger Federer's signature racket. 97 sq in head size, 340g weight. Professional-grade performance.";
      price = 18999;
      originalPrice = 22999;
      discountPercent = 17;
      rating = 48;
      reviewCount = 456;
      images = ["https://picsum.photos/seed/wilson-racket/400/400"];
      category = "Sports";
      sellerId = "wilson_sports";
      inStock = true;
      specs = [("Head Size", "97 sq in"), ("Weight", "340g"), ("Length", "27 inches"), ("String Pattern", "16x19")];
      tags = ["tennis", "wilson", "racket", "sports"];
    },
    {
      id = 33;
      title = "Yonex Arcsaber 11 Badminton Racket";
      description = "High-flex shaft design delivers more flexible smashes. Control Support Cap for stable grip. Isometric head shape.";
      price = 8999;
      originalPrice = 11999;
      discountPercent = 25;
      rating = 47;
      reviewCount = 789;
      images = ["https://picsum.photos/seed/yonex-badminton/400/400"];
      category = "Sports";
      sellerId = "yonex_official";
      inStock = true;
      specs = [("Weight", "83g"), ("Flex", "Stiff"), ("Balance", "Even"), ("Material", "HM Graphite")];
      tags = ["badminton", "yonex", "racket", "sports"];
    },
    {
      id = 34;
      title = "Nike Pro Training Shorts";
      description = "Dri-FIT technology wicks away sweat. Slim fit design moves with your body. Mesh liner for added support.";
      price = 1999;
      originalPrice = 2999;
      discountPercent = 33;
      rating = 45;
      reviewCount = 2109;
      images = ["https://picsum.photos/seed/nike-shorts/400/400"];
      category = "Sports";
      sellerId = "nike_official";
      inStock = true;
      specs = [("Material", "Dri-FIT polyester"), ("Fit", "Slim"), ("Liner", "Mesh"), ("Length", "7 inch inseam")];
      tags = ["shorts", "nike", "training", "sports"];
    },
    {
      id = 35;
      title = "Decathlon Domyos Yoga Mat";
      description = "Non-slip surface and 6mm thick cushioning for joint support. Easy-grip texture on both sides.";
      price = 1299;
      originalPrice = 1799;
      discountPercent = 28;
      rating = 44;
      reviewCount = 3456;
      images = ["https://picsum.photos/seed/yoga-mat/400/400"];
      category = "Sports";
      sellerId = "decathlon_store";
      inStock = true;
      specs = [("Thickness", "6mm"), ("Material", "NBR foam"), ("Length", "183cm"), ("Width", "61cm")];
      tags = ["yoga", "mat", "fitness", "exercise"];
    },
    {
      id = 36;
      title = "Spalding NBA Basketball";
      description = "Official NBA game ball. Full-grain leather construction. Pebbled texture for enhanced grip.";
      price = 4999;
      originalPrice = 6999;
      discountPercent = 29;
      rating = 46;
      reviewCount = 1234;
      images = ["https://picsum.photos/seed/spalding-ball/400/400"];
      category = "Sports";
      sellerId = "spalding_official";
      inStock = true;
      specs = [("Material", "Full-grain leather"), ("Size", "7 (29.5 inch)"), ("Bladder", "Butyl"), ("Usage", "Indoor")];
      tags = ["basketball", "spalding", "nba", "sports"];
    },
    {
      id = 37;
      title = "Garmin Forerunner 265 Running Watch";
      description = "AMOLED display, training readiness, race predictor, HRV Status, and up to 15 days battery life.";
      price = 34999;
      originalPrice = 42999;
      discountPercent = 19;
      rating = 48;
      reviewCount = 876;
      images = ["https://picsum.photos/seed/garmin-watch/400/400"];
      category = "Sports";
      sellerId = "garmin_official";
      inStock = true;
      specs = [("Display", "AMOLED"), ("Battery", "15 days"), ("GPS", "Multi-band"), ("Water Resistance", "50m")];
      tags = ["running-watch", "garmin", "gps", "sports"];
    },
    {
      id = 38;
      title = "Resistance Band Set 5-Pack";
      description = "5 resistance levels from 10-50 lbs. Natural latex bands for full body workout at home or gym.";
      price = 899;
      originalPrice = 1299;
      discountPercent = 31;
      rating = 44;
      reviewCount = 5678;
      images = ["https://picsum.photos/seed/resistance-bands/400/400"];
      category = "Sports";
      sellerId = "fitness_gear";
      inStock = true;
      specs = [("Levels", "5 bands"), ("Resistance", "10-50 lbs"), ("Material", "Natural Latex"), ("Includes", "Carry bag, door anchor")];
      tags = ["resistance-bands", "fitness", "workout", "home-gym"];
    },
    // Books (6 products)
    {
      id = 39;
      title = "Atomic Habits by James Clear";
      description = "The proven framework to build good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.";
      price = 499;
      originalPrice = 799;
      discountPercent = 38;
      rating = 49;
      reviewCount = 12456;
      images = ["https://picsum.photos/seed/atomic-habits/400/400"];
      category = "Books";
      sellerId = "book_store";
      inStock = true;
      specs = [("Author", "James Clear"), ("Pages", "320"), ("Publisher", "Avery"), ("Language", "English")];
      tags = ["self-help", "habits", "productivity", "bestseller"];
    },
    {
      id = 40;
      title = "The Psychology of Money";
      description = "Timeless lessons on wealth, greed, and happiness. 19 short stories exploring the ways people think about money.";
      price = 399;
      originalPrice = 599;
      discountPercent = 33;
      rating = 48;
      reviewCount = 8765;
      images = ["https://picsum.photos/seed/psychology-money/400/400"];
      category = "Books";
      sellerId = "book_store";
      inStock = true;
      specs = [("Author", "Morgan Housel"), ("Pages", "256"), ("Publisher", "Harriman House"), ("Language", "English")];
      tags = ["finance", "money", "investing", "self-help"];
    },
    {
      id = 41;
      title = "Ikigai: The Japanese Secret";
      description = "The Japanese concept of finding purpose in life. Discover your reason for being and live a longer, more fulfilling life.";
      price = 349;
      originalPrice = 499;
      discountPercent = 30;
      rating = 46;
      reviewCount = 6543;
      images = ["https://picsum.photos/seed/ikigai-book/400/400"];
      category = "Books";
      sellerId = "book_store";
      inStock = true;
      specs = [("Author", "Hector Garcia, Francesc Miralles"), ("Pages", "208"), ("Publisher", "Hutchinson"), ("Language", "English")];
      tags = ["philosophy", "wellness", "japanese", "self-help"];
    },
    {
      id = 42;
      title = "Harry Potter Complete Collection";
      description = "All 7 Harry Potter books in a beautiful paperback box set. The complete journey from The Philosopher's Stone to The Deathly Hallows.";
      price = 3999;
      originalPrice = 5499;
      discountPercent = 27;
      rating = 50;
      reviewCount = 23456;
      images = ["https://picsum.photos/seed/harry-potter/400/400"];
      category = "Books";
      sellerId = "book_store";
      inStock = true;
      specs = [("Author", "J.K. Rowling"), ("Books", "7 volumes"), ("Publisher", "Bloomsbury"), ("Language", "English")];
      tags = ["fiction", "fantasy", "harry-potter", "box-set"];
    },
    {
      id = 43;
      title = "Deep Work by Cal Newport";
      description = "Rules for focused success in a distracted world. How to focus without distraction on cognitively demanding tasks.";
      price = 449;
      originalPrice = 699;
      discountPercent = 36;
      rating = 47;
      reviewCount = 7654;
      images = ["https://picsum.photos/seed/deep-work/400/400"];
      category = "Books";
      sellerId = "book_store";
      inStock = true;
      specs = [("Author", "Cal Newport"), ("Pages", "304"), ("Publisher", "Grand Central Publishing"), ("Language", "English")];
      tags = ["productivity", "focus", "career", "self-help"];
    },
    {
      id = 44;
      title = "Sapiens: A Brief History of Humankind";
      description = "How Homo sapiens came to dominate the planet. A compelling story of humanity's past and present.";
      price = 549;
      originalPrice = 799;
      discountPercent = 31;
      rating = 48;
      reviewCount = 15432;
      images = ["https://picsum.photos/seed/sapiens/400/400"];
      category = "Books";
      sellerId = "book_store";
      inStock = true;
      specs = [("Author", "Yuval Noah Harari"), ("Pages", "443"), ("Publisher", "Harper"), ("Language", "English")];
      tags = ["history", "science", "humanity", "non-fiction"];
    },
    // Beauty (8 products)
    {
      id = 45;
      title = "The Ordinary Niacinamide 10% Serum";
      description = "High-strength vitamin and mineral blemish formula. Reduces the appearance of pores and uneven skin tone.";
      price = 899;
      originalPrice = 1299;
      discountPercent = 31;
      rating = 47;
      reviewCount = 9876;
      images = ["https://picsum.photos/seed/ordinary-serum/400/400"];
      category = "Beauty";
      sellerId = "beauty_store";
      inStock = true;
      specs = [("Volume", "30ml"), ("Key Ingredient", "Niacinamide 10% + Zinc 1%"), ("Skin Type", "All"), ("Usage", "Morning and evening")];
      tags = ["skincare", "serum", "niacinamide", "pores"];
    },
    {
      id = 46;
      title = "CeraVe Moisturising Cream";
      description = "Developed with dermatologists. Restores and maintains skin's natural barrier with 3 essential ceramides.";
      price = 1299;
      originalPrice = 1799;
      discountPercent = 28;
      rating = 48;
      reviewCount = 12345;
      images = ["https://picsum.photos/seed/cerave-cream/400/400"];
      category = "Beauty";
      sellerId = "beauty_store";
      inStock = true;
      specs = [("Volume", "340g"), ("Key Ingredient", "Ceramides + Hyaluronic Acid"), ("Skin Type", "Dry to very dry"), ("Fragrance", "Fragrance-free")];
      tags = ["moisturizer", "cerave", "skincare", "ceramides"];
    },
    {
      id = 47;
      title = "Maybelline Fit Me Matte Foundation";
      description = "Fit Me Matte + Poreless Foundation blurs pores and controls shine. Natural, seamless coverage.";
      price = 649;
      originalPrice = 899;
      discountPercent = 28;
      rating = 45;
      reviewCount = 8765;
      images = ["https://picsum.photos/seed/maybelline-foundation/400/400"];
      category = "Beauty";
      sellerId = "maybelline_official";
      inStock = true;
      specs = [("Volume", "30ml"), ("Finish", "Matte"), ("Coverage", "Medium"), ("Shades", "40+")];
      tags = ["foundation", "maybelline", "makeup", "matte"];
    },
    {
      id = 48;
      title = "L'Oreal Elvive Extraordinary Oil";
      description = "Blend of 6 precious flower oils. Instantly absorbs for luminous, silky hair without weighing it down.";
      price = 799;
      originalPrice = 1099;
      discountPercent = 27;
      rating = 45;
      reviewCount = 4321;
      images = ["https://picsum.photos/seed/loreal-oil/400/400"];
      category = "Beauty";
      sellerId = "loreal_official";
      inStock = true;
      specs = [("Volume", "100ml"), ("Hair Type", "All hair types"), ("Key Benefit", "Nourish & Shine"), ("Usage", "Pre-shampoo or finishing treatment")];
      tags = ["hair-care", "loreal", "oil", "serum"];
    },
    {
      id = 49;
      title = "MAC Ruby Woo Lipstick";
      description = "The iconic blue-red matte lipstick. Retro matte formula for vivid color payoff and all-day wear.";
      price = 1899;
      originalPrice = 2499;
      discountPercent = 24;
      rating = 48;
      reviewCount = 6789;
      images = ["https://picsum.photos/seed/mac-lipstick/400/400"];
      category = "Beauty";
      sellerId = "mac_official";
      inStock = true;
      specs = [("Volume", "3g"), ("Finish", "Matte"), ("Color", "Ruby Woo"), ("Formula", "Retro Matte")];
      tags = ["lipstick", "mac", "makeup", "matte"];
    },
    {
      id = 50;
      title = "Neutrogena Hydro Boost Water Gel";
      description = "Hyaluronic acid gel-cream that quenches dry skin and keeps it looking smooth and hydrated all day.";
      price = 1499;
      originalPrice = 1999;
      discountPercent = 25;
      rating = 47;
      reviewCount = 11234;
      images = ["https://picsum.photos/seed/neutrogena-gel/400/400"];
      category = "Beauty";
      sellerId = "neutrogena_official";
      inStock = true;
      specs = [("Volume", "50ml"), ("Key Ingredient", "Hyaluronic Acid"), ("Skin Type", "All"), ("Texture", "Water gel")];
      tags = ["moisturizer", "neutrogena", "hydration", "skincare"];
    },
    {
      id = 51;
      title = "Dyson Supersonic Hair Dryer";
      description = "Intelligent heat control prevents extreme heat damage. Fast drying with powerful airflow. Magnetic attachments.";
      price = 35999;
      originalPrice = 44999;
      discountPercent = 20;
      rating = 48;
      reviewCount = 3456;
      images = ["https://picsum.photos/seed/dyson-hairdryer/400/400"];
      category = "Beauty";
      sellerId = "dyson_official";
      inStock = true;
      specs = [("Motor", "V9 digital motor"), ("Heat Settings", "4"), ("Speed Settings", "3"), ("Attachments", "5 magnetic")];
      tags = ["hair-dryer", "dyson", "hair-care", "styling"];
    },
    {
      id = 52;
      title = "Urban Decay Naked Eyeshadow Palette";
      description = "12 neutral eyeshadow shades from light to dark. Mix of matte, shimmer, and satin finishes. Cult-favorite palette.";
      price = 4999;
      originalPrice = 6499;
      discountPercent = 23;
      rating = 48;
      reviewCount = 9876;
      images = ["https://picsum.photos/seed/ud-palette/400/400"];
      category = "Beauty";
      sellerId = "urbandecay_official";
      inStock = true;
      specs = [("Shades", "12"), ("Finishes", "Matte, Shimmer, Satin"), ("Size", "Full-size pan"), ("Includes", "Double-ended brush")];
      tags = ["eyeshadow", "urban-decay", "palette", "makeup"];
    },
  ];

  public func getAllProducts() : [Product] {
    products
  };

  public func getProductById(id : Nat) : ?Product {
    products.find(func(p) { p.id == id })
  };

  public func getProductsByCategory(category : Text) : [Product] {
    products.filter(func(p) { p.category == category })
  };

  public func searchProducts(searchQuery : Text) : [Product] {
    let q = searchQuery.toLower();
    products.filter(func(p) {
      p.title.toLower().contains(#text q) or
      p.description.toLower().contains(#text q) or
      p.tags.find(func(t) { t.toLower().contains(#text q) }) != null
    })
  };

  public func getCategories() : [Text] {
    ["Electronics", "Fashion", "Home & Living", "Sports", "Books", "Beauty"]
  };
};
