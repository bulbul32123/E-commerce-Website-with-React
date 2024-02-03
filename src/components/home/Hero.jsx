import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Img from '../Img';
import { carouselData } from '../../utils/data';

export default function Hero() {
  return (
    <div className="h-56 sm:h-[35rem]">
      <Carousel pauseOnHover slideInterval={4000} className='bg-black outline-none shadow-xl shadow-gray-800'>
        {carouselData?.map((item) => (
          <Link to={item?.redirect} className="flex h-full items-center relative justify-center bg-gray-400" key={item?.id}>
            <h1 className={item?.className} id='headphonesH1'>{item?.title} <span className='absolute -z-10'>{item?.subTitle ? item?.subTitle : ''}</span></h1>
            <Img src={item?.imgUrl} alt={item?.title} className={item?.imgClassName} />
            <div className="w-full h-20 blur-3xl opacity-90 bg-black absolute bottom-0" />
          </Link>
        ))
        }
      </Carousel>
    </div>
  );
}
