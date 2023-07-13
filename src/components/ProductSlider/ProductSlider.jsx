import React, { useState } from 'react';
import Swiper from 'swiper';

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return <div className="product__slider"></div>;
  <Swiper
    spaceBetween={10}
    navigation={false}
    thumbs={{ swiper: thumbsSwiper }}
    modules={{ FreeMode, Thumbs }}
    className="mySwiper2">
    <SwiperSlide>
      <img></img>
    </SwiperSlide>
  </Swiper>;
};

export default ProductSlider;
