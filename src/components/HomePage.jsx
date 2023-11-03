import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Welcome to our Course Platform</h1>
        <p className="mb-6">Browse our courses and start learning today!</p>
        <Link to="/checkout">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
