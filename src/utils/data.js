import TestimonialImag1 from "/images/testimonialimg1.jpeg";
import TestimonialImag2 from "/images/testimonialimg2.jpeg";
import TestimonialImag3 from "/images/testimonialimg3.jpeg";
import TestimonialImag4 from "/images/testimonialimg4.jpeg";
import TestimonialImag8 from "/images/testimonialimg8.jpeg";
import TestimonialImag6 from "/images/testimonialimg6.jpeg";


const testimonials = [
    {
        id: 0,
        name: 'Alper',
        skill: 'Designer',
        desc: "Being a tech enthusiast, I always seek the latest and greatest in online shopping experiences. ShopSphere has exceeded my expectations with its cutting-edge technology and user-friendly interface. The personalized recommendations and smooth navigation make my shopping journey enjoyable. ShopSphere has truly revolutionized the way I shop online!",
        imgUrl: TestimonialImag1

    },
    {
        id: 1,
        name: 'TechSavvyShopper',
        skill: 'Technology Enthusiast, Online Shopper',
        desc: "Being a tech enthusiast, I always seek the latest and greatest in online shopping experiences. ShopSphere has exceeded my expectations with its cutting-edge technology and user-friendly interface. The personalized recommendations and smooth navigation make my shopping journey enjoyable. ShopSphere has truly revolutionized the way I shop online!",
        imgUrl: TestimonialImag2

    },
    {
        id: 2,
        name: 'FashionistaGuru',
        skill: 'Fashion Influencer, Trend Spotter',
        desc: "ShopSphere has become my fashion haven! As a fashion influencer, staying on top of trends is crucial. ShopSphere's curated collections and quick access to the latest styles make it a dream for trend spotters like me. The seamless checkout process and variety of payment options add to the overall convenience. ShopSphere is now an essential tool in my fashion-forward lifestyle.",
        imgUrl:TestimonialImag3
    },
    {
        id: 3,
        name: 'WellnessExplorer',
        skill: 'Health and Wellness Advocate',
        desc: "ShopSphere has transformed my wellness journey. With its extensive range of health and wellness products, I can easily find everything I need to support my holistic lifestyle. The detailed product descriptions and customer reviews provide valuable insights, making informed choices a breeze. ShopSphere has become my trusted companion in maintaining a healthy and balanced life.",
        imgUrl: TestimonialImag4
    },
    {
        id: 4,
        name: 'HomeDecorMaestro',
        skill: 'Health and Wellness Advocate',
        desc: "ShopSphere is a treasure trove for home decor enthusiasts like me. The diverse range of high-quality products and the ability to visualize items in my space using augmented reality have elevated my interior design projects. The user-friendly interface and timely delivery make ShopSphere my top choice for sourcing unique and stylish home decor items. It's a must-visit for anyone passionate about creating a beautiful home.",
        imgUrl: TestimonialImag8
    },
    {
        id: 5,
        name: "SarahEcommPro",
        skill: 'E-commerce Strategist',
        desc: "SarahEcommProAs an E-commerce Strategist, I've worked with numerous platforms, but ShopSphere truly stands out. Its intuitive interface and robust features make it a game-changer for online businesses. The seamless integration of marketing tools has significantly boosted my campaigns, resulting in increased conversions. ShopSphere has become my go-to platform for driving success in the competitive world of online retail.",
        imgUrl: TestimonialImag6

    },
]

const carouselData = [
    {
        id:0,
        title:'HEAD',
        subTitle: 'PHONES',
        imgUrl: '/images/image1.png',
        imgClassName: 'w-auto h-auto',
        redirect: '/products/1',
        className: 'absolute text-4xl sm:text-7xl md:text-[7rem] -ml-[11rem] md:-ml-[28rem] -mt-10  text-white'

    },
    {
        id:1,
        title:'SHOES',
        imgUrl: '/images/image3.png',
        imgClassName: 'w-full h-auto object-cover object-center  drop-shadow-2xl',
        redirect: '/products/5',
        className: 'absolute text-4xl sm:text-7xl md:text-[8rem] -mt-10  text-white z-10'

    },
    {
        id:2,
        title:'AIRPODS',
        imgUrl: '/images/earbuds.png',
        imgClassName: 'w-full h-full object-cover object-center',
        redirect: '/products/3',
        className: 'absolute text-4xl sm:text-7xl md:text-[7rem] -mt-20  text-white'

    },
    {
        id:3,
        title:'DEVIES',
        imgUrl: '/images/image5.jpeg',
        imgClassName: 'w-full h-full object-cover object-center',
        redirect: '/products/2',
        className: 'absolute text-4xl sm:text-7xl md:text-[7rem] -mt-10  text-white'

    },
]



export { testimonials , carouselData }