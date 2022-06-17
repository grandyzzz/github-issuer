import type { ReactNode } from 'react'
import { Children } from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'

interface SliderProps extends SwiperProps {
  children: ReactNode
}

function Slider({ children, ...props }: SliderProps) {
  return (
    <Swiper
      slidesOffsetBefore={100}
      spaceBetween={30}
      slidesPerView="auto"
      {...props}
    >
      {Children.toArray(children).map((child: ReactNode, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
