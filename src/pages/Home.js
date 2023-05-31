import { Link } from 'react-router-dom';
import shop from 'images/shop.jpg';

const styles = {
  container: {
    width: '100%',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--indent)',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to our Shop!</h1>
      <Link to="/shop">
        <img src={shop} alt="Shop" style={{ maxWidth: '350px' }} />
      </Link>
    </div>
  );
};

export default Home;
