import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/Routes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
