import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <h2>
        This page doesn't exist. Go <Link to="/">Home</Link>
      </h2>
    </main>
  );
};

export default NotFound;
