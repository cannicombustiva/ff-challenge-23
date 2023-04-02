/* eslint-disable @next/next/no-img-element */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-magic-slider-dots/dist/magic-dots.css';

import MagicSliderDots from 'react-magic-slider-dots';
import Slider from 'react-slick';

import styles from './Carousel.module.css';

type IProps = {
  images?: string[];
}

export const Carousel = ({ images }: IProps) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any[]) => <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />,
  };
  return (
    <div className={styles.container}>
      <Slider
        {...settings}
        style={{
          position: 'relative',
        }}
      >
        {images?.map(image => (
          <div className={styles.wrapperImage}>
            <img
              className={styles.image}
              src={image}
              alt=""
              width={386}
              height={386}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
