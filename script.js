$(function () {
  const testimonials = [
    {
      name: "Robin Taylor",
      source: "Google Reviews · October 2025",
      quote:
        '"Quite possibly the best veterinarian on the planet. Why drag all your pets to the vet and stress them out. Dr Cifranick and Jessica come to your home. Your pets are seen in their environment, calm, and happy. Dr. Cifranick\'s love of animals is very apparent. I have 3 dogs and a cat, all look forward to seeing Dr. Cifranick and Jessica."',
      imageSrc: "/wp-content/uploads/2025/11/Robin-Taylor-Dogs-1.jpeg",
      imageAlt: "Robin Taylor pets",
    },
    {
      name: "Judi Kenney",
      source: "Google Reviews · October 2025",
      quote:
        '"The WoofDoctor on Wheels has been our vet for 6 years now taking care of our cat Stella and two Aussie brothers, Cody and Mojo. Mojo was born deaf and was attacked at 10 weeks. The WoofDoctor was then and still is tremendous. He has a great team that works with him too. We highly recommend him! We love that he comes to our house. Five stars for sure!"',
      imageSrc: "/wp-content/uploads/2025/11/Stella-Kenney-1-scaled.jpg",
      imageAlt: "Judi Kenney pets",
    },
    {
      name: "Peter Rood",
      source: "Google Reviews · October 2025",
      quote:
        '"From the moment we met Dr. Cifranick and he sat on the floor to connect with our dog, we knew he was the right vet for us. We\'ve been with him through our beloved Nola\'s illness and now with Charlie. He even comes to our home to care for the pups, always arriving with liver treats to win them over. The entire team is compassionate, skilled, and dedicated -- we couldn\'t ask for better care."',
      imageSrc: "/wp-content/uploads/2025/11/Charlie-Rood-1.jpeg",
      imageAlt: "Peter Rood pets",
    },
    {
      name: "Wanda Ardell",
      source: "Google Reviews · September 2025",
      quote:
        '"This company personifies compassionate professionalism. As someone with vision issues, I find it difficult to find transportation at times. They come to me and my cat for nail clips, medication, and even to rescue a stray kitten in my garden shed. Definitely above and beyond! Love them all!"',
      imageSrc: "/wp-content/uploads/2025/11/Bitty-Kitty-Ardell-1.png",
      imageAlt: "Wanda Ardell cat",
    },
    {
      name: "Brenda Ross",
      source: "Google Reviews · October 2025",
      quote:
        '"Dr C. is the most compassionate yet professional veterinary doctor we have ever trusted with our precious Katie. He is wonderful and all his staff are incredibly well trained and professional as well. I cannot recommend WoofDoctor enough."',
      imageSrc: "/wp-content/uploads/2025/11/Katie-Ross-1.png",
      imageAlt: "Brenda Ross pet",
    },
    {
      name: "Heather Quarti",
      source: "Google Reviews · December 2024",
      quote:
        '"I have no doubt whatsoever that WoofDoctor on Wheels made it possible to have extra time with my soul mate, Duckie. Home visits and monthly Solensia shots helped extend her stay on this earth. Absolutely every single person on this team has become like family. They spend time getting to know their patients and their humans. The care we receive is worth every penny."',
      imageSrc: "/wp-content/uploads/2025/11/Mustachia-Quarti-1.jpeg",
      imageAlt: "Heather Quarti pet",
    },
  ];

  const buildStars = (count = 5) => {
    return new Array(count)
      .fill('<i class="fa-solid fa-star"></i>')
      .join("");
  };

  const $slider = $(".testimonial-slider");

  testimonials.forEach((item) => {
    const card = $(`
      <article class="testimonial-card">
        <div class="testimonial-card__body">
          <p class="quote">${item.quote}</p>
          <div class="person">
            <div>
              <p class="person__name">${item.name}</p>
              <p class="person__source">${item.source}</p>
            </div>
            <div class="rating">
              <span>5 Stars</span>
              <div class="rating-stars" aria-hidden="true">
                ${buildStars()}
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-card__media">
          <div class="media-frame">
            <img src="${item.imageSrc}" alt="${item.imageAlt}" />
          </div>
        </div>
      </article>
    `);

    $slider.append(card);
  });

  $slider.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
