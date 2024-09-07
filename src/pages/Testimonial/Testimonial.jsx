import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; // Optional: For default themes
import image1 from '../../assets/quat.jpeg';

// Slick Carousel settings
const settings = {
  dots: true, // Show dots for pagination
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust as needed
};

// Helper function to split text into lines with a maximum of 7 words per line
const splitText = (text, maxWords) => {
  const words = text.split(' ');
  let result = [];
  for (let i = 0; i < words.length; i += maxWords) {
    result.push(words.slice(i, i + maxWords).join(' '));
  }
  return result;
};

export default function Testimonial() {
  const testimonials = [
    {
      quote: `Posuere mus curabitur parturient scelerisque suspendisse elementum facilisis dignissim non purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum.
      Donec ullamcorper justo et libero cursus, in tincidunt nunc congue. Aliquam erat volutpat. Vivamus fermentum lacinia libero, eu convallis sapien pharetra sit amet.`,
      name: "Mark Wiggins",
      role: "CEO (Grodins Group)",
      image: image1,
    },
    {
      quote: `Fringilla aliquet mattis lacinia quam a montes maecenas parturient urna varius.
      Aenean quis erat vitae ligula ultrices convallis. Curabitur vestibulum, justo et cursus laoreet, orci sapien bibendum justo, nec vulputate eros felis et quam.
      Sed scelerisque, libero vel bibendum ullamcorper, sem elit iaculis felis, nec ultricies tortor urna sit amet enim.`,
      name: "John Doe",
      role: "COO (Example Corp)",
      image: image1,
    },
    {
      quote: `Sollicitudin pede sapien taciti dui.
      Nulla facilisi. Donec dictum vehicula ligula, at tristique libero tempor id. Cras lacinia, libero nec tincidunt commodo, augue ligula iaculis metus, a venenatis nulla dolor non odio.
      Vivamus non lorem nec libero suscipit tincidunt. Etiam non nisl dolor.`,
      name: "Jane Smith",
      role: "Founder (Another Company)",
      image: image1,
    },
    {
      quote: `Nunc euismod massa eu nulla volutpat, ac auctor ante viverra. Proin quis suscipit purus. Duis vehicula mollis libero ac ultricies.
      Suspendisse potenti. Maecenas ac sem sit amet est euismod pharetra et eget eros. Nulla facilisi. Cras in urna ut tortor laoreet luctus.`,
      name: "Alice Johnson",
      role: "Marketing Director (Some Company)",
      image: image1,
    },
  ];

  return (
    <div className="testimonial-section bg-white max-w-5xl mx-auto mt-10 mb-20 py-6 px-2">
      <h1 className='text-lg mb-2 text-center text-[#aa8453]'>Testimonial</h1>
      <h1 className='text-4xl mb-4 text-black font-bold text-center'>What Clients Say About Us</h1>
      <div className="divider w-1/6 mx-auto border-t border-[#aa8453] text-center my-4"></div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-3 text-center">
            <img src={testimonial.image} alt="testimonial" className="w-20 h-20 mx-auto mb-3 object-cover" />
            <p className="text-gray-600 text-base italic px-3">
              {splitText(testimonial.quote, 7).map((line, i) => (
                <React.Fragment key={i}>
                  {line}<br />
                </React.Fragment>
              ))}
            </p>
            <h3 className="text-black text-lg font-semibold mt-2">{testimonial.name}</h3>
            <p className="text-[#aa8453] text-xs">{testimonial.role}</p>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slick-dots li button:before {
          color: #aa8453; /* Custom dot color */
        }
        .slick-dots li.slick-active button:before {
          color: #aa8453; /* Custom color for the selected dot */
        }
      `}</style>
    </div>
  );
}
