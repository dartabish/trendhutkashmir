import { Routes, Route } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import ContactAndVisit from '../components/ContactAndVisit/ContactAndVisit';
import TopDestinations from '../components/TopDestinations/TopDestinations';
import PackageList from '../components/PackageList/PackageList';
import PackageDetail from '../components/PackageDetail/PackageDetail';
import { packages } from '../data';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <TopDestinations />
            <PackageList packages={packages} />
            <ContactAndVisit />
          </>
        }
      />

      <Route
        path="/packages/:id"
        element={<PackageDetail packages={packages} />}
      />
    </Routes>
  );
};

export default AppRoutes;
