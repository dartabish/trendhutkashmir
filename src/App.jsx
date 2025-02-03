import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ContactAndVisit from './components/ContactAndVisit/ContactAndVisit';
import TopDestinations from './components/TopDestinations/TopDestinations';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <br />
      <br />
      <TopDestinations/>
      <ContactAndVisit />
      <br />
    </div>
  );
};
export default App;
