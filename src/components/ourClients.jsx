import { useState } from "react";

export default function OurClients() {
  const [activeIndex, setActiveIndex] = useState(0);

  const clientData = [
    {
      id: 1,
      image: "/client-logo-01.png",
      name: "Client 1",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, optio.",
    },
    {
      id: 2,
      image: "/client-logo-03.png",
      name: "Client 3",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, optio.",
    },
    {
      id: 3,
      image: "/client-logo-02.png",
      name: "Client 2",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, optio.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? clientData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === clientData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <><div className=" lg:block w-full pt-10 mx-auto  text-center text-gray-900 bg-white font-bold text-3xl">


          Our Clients

      </div><div id="indicators-carousel" className="relative w-full flex justify-center py-5 bg-white">
              {/* Carousel for sm and md screens */}

              <div className="lg:hidden w-full max-w-lg">
                  <div className="relative min-[300px]:pb-10 min-h-72 overflow-hidden rounded-lg md:h-80 sm:pb-10 px-4 md:pb-8 ">
                      {clientData.map((client, index) => (
                          <div
                              key={client.id}
                              className={`${index === activeIndex ? "block" : "hidden"} duration-700 ease-in-out hover:shadow-lg 0 transform transition-transform w-full h-full absolute`}
                          >
                           <div className="max-w-lg md:max-w-lg bg-white border border-gray-200 rounded-lg shadow mx-auto sm:max-w-lg min-[300px]:max-w-sm">

                                  <a href="#">
                                      <img className="rounded-t-lg" src={client.image} alt={client.name} />
                                  </a>
                                  <div className="p-5">
                                      <a href="#">
                                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                              {client.name}
                                          </h5>
                                      </a>
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                          {client.des}
                                      </p>
                                      <a
                                          href="#"
                                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                      >
                                          Read more
                                          <svg
                                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                              aria-hidden="true"
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 14 10"
                                          >
                                              <path
                                                  stroke="currentColor"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M1 5h12m0 0L9 1m4 4L9 9" />
                                          </svg>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Slider indicators */}
                  <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                      {clientData.map((_, index) => (
                          <button
                              key={index}
                              type="button"
                              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-600" : "bg-gray-300"}`}
                              aria-label={`Slide ${index + 1}`}
                              onClick={() => handleIndicatorClick(index)}
                          ></button>
                      ))}
                  </div>

                  {/* Slider controls */}
                  <button
                      type="button"
                      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      onClick={handlePrev}
                  >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                          <svg
                              className="w-4 h-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                          >
                              <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 1 1 5l4 4" />
                          </svg>
                          <span className="sr-only">Previous</span>
                      </span>
                  </button>
                  <button
                      type="button"
                      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      onClick={handleNext}
                  >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                          <svg
                              className="w-4 h-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 6 10"
                          >
                              <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 9 4-4-4-4" />
                          </svg>
                          <span className="sr-only">Next</span>
                      </span>
                  </button>
              </div>

              {/* Grid for lg screens */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 px-5 py-5 justify-center items-center w-full max-w-5xl      ">
                  {clientData.map((client) => (
                      <div
                          key={client.id}
                          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto hover:shadow-lg hover:scale-105 transform transition-transform" 
                      >
                          <a href="#">
                              <img className="rounded-t-lg w-max object-cover" src={client.image} alt={client.name} />
                          </a>
                          <div className="p-5">
                              <a href="#">
                                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                      {client.name}
                                  </h5>
                              </a>
                              <p className="mb-3 font-normal text-gray-700">
                                  {client.des}
                              </p>
                              <a
                                  href="#"
                                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none"
                              >
                                  Read more
                                  <svg
                                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 14 10"
                                  >
                                      <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 5h12m0 0L9 1m4 4L9 9" />
                                  </svg>
                              </a>
                          </div>
                      </div>
                  ))}
              </div>
          </div></>
  );
}
