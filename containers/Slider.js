import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  HashNavigation,
  Thumbs,
  Mousewheel,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import { useState } from "react";
SwiperCore.use([Navigation, Scrollbar, A11y, HashNavigation, Thumbs, Mousewheel, EffectFade]);

const Slider = ({...props}) => {
  return (
    <div className="xl:w-[70%] 2xl:max-w-none 2xl:w-[84%] mx-auto px-6 md:px-10 lg:px-16 xl:px-0">
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        // scrollbar={{el:`.mb-scrollbar-${slideName}`, draggable:true, hide:false}}
        // navigation= {{
        // 	nextEl: `.next-${slideName}`,
        // 	prevEl: `.prev-${slideName}`,
        // }}
        breakpoints={{
          540: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className={`w-full !overflow-visible selection:bg-transparent ${props.className}`}
      >
        {props.children.map((item, index) => (
          <SwiperSlide className="!h-auto" key={index}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

export const ReassuranceSlide = ({...props}) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={"auto"}
      // scrollbar={{el:`.mb-scrollbar-${slideName}`, draggable:true, hide:false}}
      navigation={{
        nextEl: `.next-${props.slideName}`,
        prevEl: `.prev-${props.slideName}`,
      }}
      className={`w-full ${props.className}`}
    >
      {props.children.map((item, index) => (
        <SwiperSlide key={`${props.slideName}-${index}`}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export const ColorFilterSlide = ({...props}) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={(swiper) => {
        setSwiperIndex(swiper.activeIndex);
      }}
      spaceBetween={16}
      slidesPerView={4}
      direction={"vertical"}
      navigation={{
        nextEl: `.next-${props.slideName}`,
        prevEl: `.prev-${props.slideName}`,
      }}
      className={`w-full h-full translate-x-[5px] selection:bg-transparent ${props.className}`}
    >
      {props.children.map((item, index) => (
        <SwiperSlide
          className={`transition-all duration-300 ease-in-out selection:bg-transparent ${
            index === swiperIndex + 1 || index === swiperIndex + 2
              ? "translate-x-[5px]"
              : "translate-x-0"
          }`}
          key={`${props.slideName}-${index}`}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const ShoesSizeSlide = ({...props}) => {
  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={4}
      // scrollbar={{el:`.mb-scrollbar-${slideName}`, draggable:true, hide:false}}
      navigation={{
        nextEl: `.next-${props.slideName}`,
        prevEl: `.prev-${props.slideName}`,
      }}
      className={`max-w-[172px] selection:bg-transparent ${props.className}`}
    >
      {props.children &&
        props.children.map((item, index) => (
          <SwiperSlide key={`${props.slideName}-${index}`}>{item}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export const ProductsSlide = ({...props}) => {
  return (
    <Swiper
      spaceBetween={4}
      slidesPerView={1}
      // scrollbar={{el:`.mb-scrollbar-${slideName}`, draggable:true, hide:false}}
      navigation={{
        nextEl: `.next-${props.slideName}`,
        prevEl: `.prev-${props.slideName}`,
      }}
      className={`w-full selection:bg-transparent ${props.className}`}
    >
      {props.children.map((item, index) => (
        <SwiperSlide className="!h-auto" key={`${props.slideName}-${index}`}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const MiniatureSlideVertical = ({...props}) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={(swiper) => {
        setSwiperIndex(swiper.activeIndex);
      }}
      spaceBetween={40}
      slidesPerView={3}
      direction="vertical"
      navigation={{
        nextEl: `.next-${props.slideName}`,
        prevEl: `.prev-${props.slideName}`,
      }}
      breakpoints={{
        1080: {
          spaceBetween: 48,
        },
      }}
      className={`w-full max-w-[320px] selection:bg-transparent ${props.className}`}
    >
      {props.children.map((item, index) => (
        <SwiperSlide
          className={`!w-20 !h-20 lg:!w-32 lg:!h-32 border  bg-white  rounded-[16px] flex items-center justify-center transition-all duration-500 ease-out ${
            index === props.index
              ? "bg-opacity-20 border-white"
              : "bg-opacity-0 border-transparent"
          }`}
          key={`${props.slideName}-${index}`}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const MiniatureSlide = ({...props}) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={(swiper) => {
        setSwiperIndex(swiper.activeIndex);
      }}
      spaceBetween={40}
      slidesPerView={3}
      navigation={{
        nextEl: `.next-${props.slideName}`,
        prevEl: `.prev-${props.slideName}`,
      }}
      breakpoints={{
        1080: {
          spaceBetween: 48,
        },
      }}
      className={`w-full max-w-[320px] selection:bg-transparent overflow-hidden ${props.className}`}
    >
      {props.children.map((item, index) => (
        <SwiperSlide
          className={`!w-20 !h-20 lg:!w-32 lg:!h-32 border  bg-white  rounded-[16px] flex items-center justify-center transition-all duration-500 ease-out ${
            index === props.index
              ? "bg-opacity-20 border-white"
              : "bg-opacity-0 border-transparent"
          }`}
          key={`${props.slideName}-${index}`}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SliderGuarantee = ({...props}) => {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      autoHeight={true}
      // scrollbar={{el:`.mb-scrollbar-${slideName}`, draggable:true, hide:false}}
      // navigation= {{
      // 	nextEl: `.next-${slideName}`,
      // 	prevEl: `.prev-${slideName}`,
      // }}
      className={`w-[272px] !overflow-visible selection:bg-transparent ${props.className}`}
    >
      {props.children.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};
