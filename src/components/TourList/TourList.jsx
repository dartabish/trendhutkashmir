import { tourPackages } from '../../data';
import TourCard from '../TourCard/TourCard';

const TourList = () => {
  return (
    <div>
      <h1 className="section-title">Tour packages</h1>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
