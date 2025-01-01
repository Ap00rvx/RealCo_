import axios from 'axios';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function ProjectPages() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);

  const getProjects = async () => {
    const url = import.meta.env.VITE_BASE_URL + '/api/project/';
    const listingsUrl = import.meta.env.VITE_BASE_URL + '/api/listing/';
    try {
      const response = await axios.get(url);
      const listingResponse = await axios.get(listingsUrl);
      setListings(listingResponse.data.listings);
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) {
    return (
      <section className="bg-white w-screen">
        <header className="text-black bg-white p-6 text-center">
          <div className="container mx-auto">
            <img
              src="/new_logo.svg"
              alt="Logo"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h1 className="text-4xl font-bold">Welcome to Our Services Page</h1>
            <p className="text-lg mt-2">Discover the amazing services we offer to make your life easier.</p>
          </div>
        </header>
        <div className="container max-w-max bg-white mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-6 bg-white">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col bg-neutral-300 w-72 h-64 animate-pulse rounded-xl p-4 gap-4"
              >
                <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                <div className="flex flex-col gap-2">
                  <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                  <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                  <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                  <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <header className="text-black bg-white p-6 text-center">
        <div className="container mx-auto">
          <img src="/new_logo.svg" alt="Logo" className="mx-auto mb-4 w-24 h-24" />
          <h1 className="text-4xl font-bold">Welcome to Our Projects Page</h1>
          <p className="text-lg mt-2">Discover the amazing projects we have accomplished so far</p>
        </div>
      </header>

      <section className="container mx-auto p-8 bg-white ">
        
        <div className='flex justify-center items-center'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div key={project._id} className="flex flex-col lg:flex-row items-center gap-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full lg:w-1/1 h-48 object-cover rounded-lg shadow-md"
              />
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.brochure && (
                  <a
                    href={project.brochure}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View Brochure &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        </div>
        
      </section>

      <section className="container mx-auto p-8 bg-white ">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Latest Listings</h2>
        <div className='flex justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
                    {listings.map((listing) => (
                        <div
                            key={listing._id}
                            className="block max-w-md p-4 bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg"
                        >
                            {listing.images && listing.images.length > 0 ? (
                                <Swiper navigation modules={[Navigation]} className="w-full h mb-4 rounded-md">
                                    {listing.images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img
                                                src={image}
                                                alt={`${listing.title} image ${index + 1}`}
                                                className="w-full h-48 object-cover rounded-md"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className="w-full h-48 flex justify-center items-center bg-gray-200 text-gray-500 rounded-md mb-4">
                                    No Image Available
                                </div>
                            )}

                            <h5 className="text-lg font-bold text-black">{listing.title}</h5>
                            <p className="text-sm text-gray-700 mb-2">
                                {listing.description.length > 40
                                    ? `${listing.description.substring(0, 40)}...`
                                    : listing.description}
                            </p>
                           
                            <p className="text-xs text-gray-500">
                                Created at: {new Date(listing.createdAt).toLocaleString()}
                            </p>
                            
                        </div>
                    ))}
                </div>
        </div>
        
      </section>
    </>
  );
}

export default ProjectPages;
