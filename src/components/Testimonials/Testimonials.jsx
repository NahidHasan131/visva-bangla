import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import testimonialImg from '../../assets/testimonial-left-image.jpg';
import user1 from '../../assets/testimonial-user-1.jpg';
import user2 from '../../assets/testimonial-user-2.jpg';

const testimonials = [
  {
    img: user1,
    name: 'Felicia Auer',
    role: 'Chief Metrics Producer',
    text: 'Aliquam morbi porttitor tincidunt ornare nulla. Vulputate in habitasse netus laoreet eu id feugiat. Id nulla sagittis consequat nunc integer consectetur ac. Eu nunc id ipsum venenatis.',
    stars: 5,
  },
  {
    img: user2,
    name: 'Shawn Streich',
    role: 'Lead Operations Analyst',
    text: 'Aliquam morbi porttitor tincidunt ornare nulla. Vulputate in habitasse netus laoreet eu id feugiat. Id nulla sagittis consequat nunc integer consectetur ac. Eu nunc id ipsum venenatis.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-340 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-22 items-start">

          {/* Left */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <img src={testimonialImg} alt="yoga community" className="w-151 h-116 object-cover rounded-2xl"/>

            {/* CTA card */}
            <div className="bg-[#11141B] rounded-2xl md:p-10 p-6 flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-gray-800 pb-5">
                <h3 className="text-white text-2xl font-bold">Try a Free Class Today!</h3>
                <div className="flex items-center text-center gap-2">
                  <span className="bg-white text-[#62826B] rounded-full px-4 py-2 text-xs font-medium">81K+</span>
                  <span className="text-gray-400 text-xs">Worldwide<br/>Members</span>
                </div>
              </div>
              <div className='flex items-center justify-between gap-12'>
                <p className="text-gray-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <NavLink to="/contact" className="p-4 rounded-full bg-[#62826B] flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all duration-300" >
                  <FiArrowUpRight size={20} className="text-[#FFEFC5]" />
                </NavLink>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
                Testimonials
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B] leading-tight">
                Real Stories from Our <br /> Members
              </h2>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              {testimonials.map((t) => (
                <div key={t.name} className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-[#11141B] mb-1">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                  <p className=" text-gray-500 leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <FaStar key={i} size={16} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
