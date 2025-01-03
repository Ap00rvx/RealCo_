import React, { useState, useEffect } from 'react';

const UpdateServicePopup = ({ isOpen, onClose, onSubmit, serviceData,id}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setImage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (serviceData) {
      setName(serviceData.name || '');
      setDescription(serviceData.description || '');
    }
  }, [serviceData]);

  const handleSubmit = async () => {
    setLoading(true);
    await onSubmit({ id, name, description, image: file } , id);
    setName('');
    setDescription('');
    setImage(null);
    setLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-black">Update Service</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
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
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded bg-white text-gray-700"
          />
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
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateServicePopup;
