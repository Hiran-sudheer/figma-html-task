
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import captera from './../assets/hero/capterra.png';

import avatar1 from './../assets/avatars/avatar-1.png';
import avatar2 from './../assets/avatars/avatar-2.png';
import avatar3 from './../assets/avatars/avatar-3.png';

const testimonialsData = [
  {
    quote: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    author: 'David Fincher',
    source: 'On Capterra',
    avatar: avatar1,
  },
  {
    quote: 'My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!',
    author: 'Lillian Williams',
    source: 'On Capterra',
    avatar: avatar2,
  },
  {
    quote: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    author: 'Michael',
    source: 'On Capterra',
    avatar: avatar3,
  },
];

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const goNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials__container">
        <header className="testimonials__header">
          <h2 className="testimonials__heading">What people are saying about LeadCRM</h2>
          <div className="testimonials__nav">
            <button className="nav-arrow" onClick={goPrev} aria-label="Previous testimonial">
              <FaChevronLeft />
            </button>
            <button className="nav-arrow" onClick={goNext} aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>
        </header>

        <Swiper
          onSwiper={setSwiper}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p className="card__text">"{testimonial.quote}"</p>
                <div className="card__rating">
                  <span className="card__rating-icon"><img src={captera} alt="" width={27}/></span>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <div className="card__author">
                  <img src={testimonial.avatar} alt={testimonial.author} className="author__avatar" />
                  <div className="author__info">
                    <p className="author__name">{testimonial.author}</p>
                    <p className="author__source">{testimonial.source}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;