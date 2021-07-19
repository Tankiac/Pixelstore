import mongodb from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/product.js";

dotenv.config();

const port = process.env.PORT || 8000

mongoose.connect(process.env.PIXELSTORE_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const prefixes = ["Pro", "SA", "Mega", "Micro", "Thor", "i", "Vega", "Next", "One", "Xtreme", "Big", "Zap", "Ultra", "Slim"]
    const numbers = ["4", "5", "7", "500", "700", "1000", "2016", "2020", "2021", "5200", "9700", "9800"]
    const suffixes = ["y", "x", "GT", "Ti", "Z", "A", "B", "C", " Lite", " Mini", " Thin", " Flex"]
    const brands = ["Yamatashi", "Gramm", "LadaTech", "Digitron", "Blazer", "Xenofine", "Halarch", "Rebasic"]
    const shippingCosts = [0, 5, 10, 20]
    const categories = ["laptops", "desktops", "phones", "keyboards", "headsets", "speakers", "tablets", "consoles"]
    const phonePictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310806/InteractiveGallery/pixelstore/phone3_icn64n.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310806/InteractiveGallery/pixelstore/phone2_clljrh.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310806/InteractiveGallery/pixelstore/phone1_btlhrw.jpg"
    ]
    const laptopPictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310795/InteractiveGallery/pixelstore/laptop3_mua9qa.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310795/InteractiveGallery/pixelstore/laptop1_rvnn3i.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310795/InteractiveGallery/pixelstore/laptop4_nusjqa.jpg"
    ]
    const keyboardPictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310777/InteractiveGallery/pixelstore/keyboard4_jggsei.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310776/InteractiveGallery/pixelstore/keyboard2_ejkbi9.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310776/InteractiveGallery/pixelstore/keyboard3_n7mqlh.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310776/InteractiveGallery/pixelstore/keyboard1_vjde1i.png"
    ]
    const headsetPictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310757/InteractiveGallery/pixelstore/headset1_ap9szs.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310757/InteractiveGallery/pixelstore/headset2_qoynfe.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310757/InteractiveGallery/pixelstore/headset3_ni5x4s.jpg"
    ]
    const desktopPictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310742/InteractiveGallery/pixelstore/desktop3_ag1vj9.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310742/InteractiveGallery/pixelstore/desktop1_aln2dn.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1622310742/InteractiveGallery/pixelstore/desktop2_s4wzdw.jpg"
    ]
    const consolePictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595668/InteractiveGallery/pixelstore/console1_ehiy13.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595668/InteractiveGallery/pixelstore/console2_gbszrg.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595668/InteractiveGallery/pixelstore/console3_jfq5vw.jpg"
    ]
    const tabletPictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595649/InteractiveGallery/pixelstore/tablet2_gldl4q.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595650/InteractiveGallery/pixelstore/tablet3_rb4yln.jpg",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595649/InteractiveGallery/pixelstore/tablet1_ec1jxq.jpg"
    ]
    const speakerPictures = [
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595638/InteractiveGallery/pixelstore/speakers2_umrfqo.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595638/InteractiveGallery/pixelstore/speakers1_zlk3si.png",
        "https://res.cloudinary.com/dtj0j3fjy/image/upload/v1625595639/InteractiveGallery/pixelstore/speakers3_jdcb7s.png"
    ]

const pickRdmValue = (array) => {
    const index = Math.floor(Math.random()*array.length)
    return array[index];
}

const pickTwoUniqueVals = (array) => {
    let firstIndex = Math.floor(Math.random()*array.length)
    let secondIndex = Math.floor(Math.random()*array.length)
    if (array.length < 3) {
        return [array[firstIndex], array[secondIndex]]
    }
    while (firstIndex === secondIndex) {
        secondIndex = Math.floor(Math.random()*array.length)
    }
    return [array[firstIndex], array[secondIndex]]
}

const seedProducts = async () => {
    await Product.deleteMany({}).then(console.log("Cleared product collection"));

    for (let i = 0; i < 800; i++) {  

        const productName = `${pickRdmValue(brands)} ${pickRdmValue(prefixes)}${pickRdmValue(numbers)}${pickRdmValue(suffixes)}`
        const stock = Math.floor(Math.random()*11)
        const shipping = pickRdmValue(shippingCosts)
        const price = Math.floor(Math.random()*500+120)
        const category = pickRdmValue(categories)
        let ctgPictures;
        switch (category) {
            case "phones": ctgPictures = phonePictures;
                break;
            case "laptops": ctgPictures = laptopPictures;
                break;
            case "keyboards": ctgPictures = keyboardPictures;
                break;
            case "headsets": ctgPictures = headsetPictures;
                break;
            case "desktops": ctgPictures = desktopPictures;
                break;
            case "speakers": ctgPictures = speakerPictures;
                break;
            case "consoles": ctgPictures = consolePictures;
                break;
            case "tablets": ctgPictures = tabletPictures;
                break;
            default: ctgPictures = laptopPictures;
        }

        const pictures = pickTwoUniqueVals(ctgPictures);

        let product = new Product;

        product.name = productName
        product.stock = stock
        product.shippingCost = shipping
        product.price = price
        product.category = category
        product.pictures = pictures

        await product.save();

        (i+1) % 100 === 0 ? console.log(`Successfully seeded ${i+1} products`) : null
    }
}

seedProducts().then(() => {
    console.log("Successfully seeded database");
    mongoose.connection.close();
});