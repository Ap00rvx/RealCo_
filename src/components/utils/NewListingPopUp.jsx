import React, { useState } from 'react';

function NewListingPopup({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contact: '',
    images: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]); // Store selected file names for preview

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const fileArray = Array.from(files);
      setFormData((prevFormData) => ({
        ...prevFormData,
        images: [...prevFormData.images, ...fileArray], // Concatenate new files with existing ones
      }));
      setPreviewImages((prevPreview) => [
        ...prevPreview,
        ...fileArray.map((file) => file.name),
      ]); // Update preview with all file names
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData); // Debugging purposes
    await onSubmit(formData);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Add New Listing</h2>
        <form onSubmit={isLoading ? () => {} : handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-600 bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-600 bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Contact Details</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded text-gray-600 bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Images</label>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-600"
              accept="image/*"
              multiple // Allow multiple file selection
            />
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-600">Selected Files:</p>
              <ul className="list-disc pl-5 text-gray-600">
                {previewImages.map((file, index) => (
                  <li key={index}>{file}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewListingPopup;
