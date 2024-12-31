import React, { useState, useEffect } from 'react';

function UpdateListingPopup({ isOpen, onClose, onSubmit, listingData, id }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contact: '',
    status: '',
    images: [], // Existing images
    newImages: [], // Newly selected images
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (listingData) {
      setFormData((prevData) => ({
        ...prevData,
        title: listingData.title || '',
        description: listingData.description || '',
        contact: listingData.contact || '',
        status: listingData.status || '',
        images: listingData.images || [],
      }));
    }
  }, [listingData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "newImages" && files) {
      setFormData((prevData) => ({
        ...prevData,
        newImages: [...prevData.newImages, ...Array.from(files)], // Add new files
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files ? Array.from(files) : value, // Handle other fields
      }));
    }
  };

  const handleRemoveNewImage = (index) => {
    setFormData((prevData) => {
      const updatedImages = [...prevData.newImages];
      updatedImages.splice(index, 1);
      return { ...prevData, newImages: updatedImages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { newImages, ...rest } = formData;
    await onSubmit({ ...rest, newImages }, id);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Update Listing</h2>
        <form onSubmit={isLoading ? () => {} : handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Visibility</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black bg-white"
              required
            >
              <option value="">Select Visibility</option>
              <option value="true">Visible</option>
              <option value="false">Not Visible</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Existing Images:</label>
            <div className="flex gap-2 overflow-x-auto mb-2">
              {formData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Existing image ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Upload New Images:</label>
            <input
              type="file"
              name="newImages"
              onChange={handleChange}
              className="w-full p-2 border rounded text-black bg-white"
              multiple
            />
            <div className="flex gap-2 overflow-x-auto mt-2">
              {formData.newImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`New image ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveNewImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded text-black hover:bg-red-300"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              {isLoading ? 'Updating...' : 'Update'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateListingPopup;
