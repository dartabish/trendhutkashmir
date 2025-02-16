import { packages } from '../../data';
import PackageCard from '../PackageCard/PackageCard';

const PackageList = () => {
  return (
    <div id="packages" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="section-title">Tour packages</h1>
      <div>
        <div className="max-w-7xl mx-auto">
          <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map(packageCard => (
              <PackageCard key={packageCard.id} packageCard={packageCard} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageList;
