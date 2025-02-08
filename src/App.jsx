import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ContactAndVisit from './components/ContactAndVisit/ContactAndVisit';
import TopDestinations from './components/TopDestinations/TopDestinations';
import TourList from './components/TourList/TourList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
{
  path: '/',
  element: <h1>Homepage</h1>
},
{
  path: '/about',
  element: <h1>About</h1>
},

]);

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <br />
      <br />
      <TopDestinations/>
      <br />
      <br />
      <TourList/>
      <br />
      <br />
      <ContactAndVisit />
    </div>
  );
};
export default App;
