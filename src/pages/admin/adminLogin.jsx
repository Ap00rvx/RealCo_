import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const baseUrl = process.env.REACT_APP_BASE_URL; // Ensure this is correctly defined in your .env file

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username || !password) {
      setError('Username and Password are required.');
      return;
    }
    const base= import.meta.env.VITE_BASE_URL ;
    setLoading(true);
    try {
      const response = await axios.post(`${base}/api/user/login`, {
        username,
        password,
      });
      console.log(response.data);
      localStorage.setItem('authToken', response.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid username or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full object-cover" style={{ backgroundImage: `url(/slider-img-02.jpg)` }}>
      <div className="w-full max-w-xs m-auto bg-white rounded p-5 shadow-lg shadow-zinc-950">
        <header>
          <img className="w-20 mx-auto mb-5 h-40" src="/new_logo.svg" alt="Logo" />
        </header>
        <form onSubmit={handleSubmit} className="mb-4 space-y-2" method="POST">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div>
            <label className="block mb-2 text-black" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-green-400 outline-none focus:bg-white bg-white"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-black" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-black border-b-2 border-green-400 outline-none focus:bg-white bg-white"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              className="w-full bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
