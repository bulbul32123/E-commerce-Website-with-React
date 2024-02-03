import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UseFetch from '../../UseFetch';
import ProductCard from '../productCard/ProductCard';

export default function RelatedProducts({ productId, categoryId }) {
    const { data } = UseFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    if (!data) return;

    return (
        <div>
            {(data?.data).length > 0 ? (
                <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
                    <div className=" sm:pl-10 text-white text-xl sm:text-2xl font-extrabold mb-5">You Might Also Like</div>
                    <Carousel responsive={responsive} swipeable={true}>
                        {data?.data?.slice(0, 4)?.map((item) => {
                            return (
                                <ProductCard item={item} key={item?.id} />
                            )
                        })
                        }
                    </Carousel>
                </div>
            ) : ''
            }
        </div>
    )
}