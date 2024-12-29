import React, { useState, useEffect } from 'react';

function UpdateProjectPopup({ isOpen, onClose, onSubmit, projectData, id }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    status: '',
    brochure: null,
    image: null,
  });
  const[isLoading,setIsLoading] = useState(false); 
  useEffect(() => {
    if (projectData) {
      setFormData({
        title: projectData.title || '',
        description: projectData.description || '',
        startDate: projectData.startDate ? projectData.startDate.split('.')[0] : '',
        status: projectData.status || '',
        brochure: projectData.brochure || null,
        image: projectData.image || null,
      });
    }
  }, [projectData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    

    await onSubmit(formData, id);
    setIsLoading(false); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-black">Update Project</h2>
        <form onSubmit={isLoading ? ()=>{} : handleSubmit}>
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
            <label className="block text-sm font-medium text-black">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black bg-white"
              required
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black ">Brochure (URL)</label>
            <input
              type="file"
              name="brochure"
                onChange={handleChange}
              className="w-full p-2 border rounded text-black bg-white "
            />
          </div>
          <div className="mb-4 text-black ">
            <label className="block text-sm font-medium">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded text-black hover:bg-red-300"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded ">
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProjectPopup;
