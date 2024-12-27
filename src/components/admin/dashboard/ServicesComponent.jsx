import React from 'react';
import axios from 'axios';
import NewServicePopup from '../../utils/NewServicePopup'; // Import the popup component

function ServicesComponent() {
  const url = import.meta.env.VITE_BASE_URL + "/api/service";
  const [services, setServices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [isPopupOpen, setPopupOpen] = React.useState(false); // State to control popup visibility
  const [imageError, setImageError] = React.useState(null); // State to handle image upload errors

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('fileToUpload', file);
    const uploadUrl = import.meta.env.VITE_UPLOAD_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
 
    try {
      const response = await axios.post(
        uploadUrl,
        formData,
        {
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      
      // Return the uploaded image URL
      return response.data.url; // Assuming the response contains the URL in `data.url`
    } catch (error) {
      console.error('Error uploading file:', error);
      setImageError('File upload failed.');
      return null; // If the upload fails, return null
    }
  };

  const handleNewService = async (data) => {
    try {
      if (data.image) {
        const imageUrl = await handleFileUpload(data.image);
        if (imageUrl) {
          data.image = imageUrl; // Add the uploaded image URL to the data
        }
      }
      await addService(data); // Add the service, with or without image
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.delete(url + "/delete/" + id, {
        headers: { Authorization: `${token}` },
      });
      console.log(response.data);
      setServices(services.filter((service) => service._id !== id));
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const addService = async (data) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.post(url + "/create", data, {
        headers: { Authorization: `${token}` },
      });
      console.log(response.data);
      setServices([...services, response.data]);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(url);
        setServices(response.data.services);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading)
    return (
      <section className="bg-white w-screen h-screen">
        <div className="container max-w-max bg-white mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-white ">
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

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <section className="bg-white w-screen h-screen">
        <div className="text-xl text-gray-600 flex justify-center">Services Section</div>
        <div className="container max-w-max bg-white mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 bg-white ">
            {services.map((service) => (
              <div
                key={service._id}
                className="block max-w-md p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-50 hover:shadow-lg duration-150 hover:scale-105 "
              >
                {/* <p className="text-xs text-gray-500 flex justify-center">{service._id}</p> */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center ">
                  {service.name}
                </h5>
                <p className="font-light text-gray-700 text-sm text-center">
                  {service.description}
                </p>
                <div className="flex justify-end mt-8 gap-3">
                  <div className="text-sm rounded-lg pt- bg-blue-500 text-white py-2 px-3 cursor-pointer">
                    Update
                  </div>
                  <div
                    className="text-sm rounded-lg pt- bg-red-500 text-white py-2 px-3 cursor-pointer"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            ))}
            <div
              onClick={() => setPopupOpen(true)} // Open popup on click
              className="block cursor-pointer max-w-md p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-50 hover:shadow-lg duration-150 flex justify-center items-center"
            >
              <p className="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center">+</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Service Popup */}
      <NewServicePopup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)} // Close popup on cancel or submit
        onSubmit={handleNewService} // Pass the handleNewService function to handle form submission
      />
    </>
  );
}

export default ServicesComponent;
