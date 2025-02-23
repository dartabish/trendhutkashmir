import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/Routes'; 
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; 
import { useEffect, useState } from 'react';
import BookingModal from './components/BookingModal/BookingModal';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    // Show the modal after a delay of 5 seconds
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000); 

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop /> 
      <BookingModal open={isModalOpen} setOpen={setIsModalOpen} title={'Plan your trip with us!'}/>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
