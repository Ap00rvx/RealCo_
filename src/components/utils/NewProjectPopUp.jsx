import React, { useState } from 'react';

function NewProjectPopup({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    status: '',
    brochure: null,
    image: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true); 
    e.preventDefault();
    formData.startDate = Date.now().toString();
    console.log(formData); 
    await   onSubmit(formData);
    setIsLoading(false ); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Add New Project</h2>
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
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-600"
              required
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Brochure (PDF only)</label>
            <input
              type="file"
              name="brochure"
              
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-600"
              accept=".pdf" // Restrict to PDF files
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white text-gray-600"
            />
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

export default NewProjectPopup;
