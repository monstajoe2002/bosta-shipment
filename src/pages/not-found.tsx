import { Link } from "react-router";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-red-600">404 Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-teal text-white px-4 py-2 rounded hover:bg-teal/70"
      >
        Go back to Home
      </Link>
    </div>
  );
}
