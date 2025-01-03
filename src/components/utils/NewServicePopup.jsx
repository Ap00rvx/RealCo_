import React, { useState } from 'react';

const NewServicePopup = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!file) {
      setError('Please upload an image.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('File size should be less than 5MB.');
      return;
    }

    setLoading(true);
    await onSubmit({ name, description, image: file });

    setName('');
    setDescription('');
    setFile(null);
    setLoading(false);
    onClose();
    setError(''); // Clear the error after successful submission
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB.');
      } else {
        setError('');
        setFile(selectedFile);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-black">New Service</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter service name"
            className="w-full p-2 border rounded bg-white text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter service description"
            required
            className="w-full p-2 border rounded bg-white text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            id="image"
            type="file"
            onChange={handleFileChange}
            required
            className="w-full p-2 border rounded bg-white text-gray-700"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-300 rounded hover:bg-red-400"
          >
            Cancel
          </button>
          <button
            onClick={isLoading ? () => {} : handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewServicePopup;
