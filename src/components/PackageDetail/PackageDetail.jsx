import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FaBed,
  FaUtensils,
  FaBus,
  FaMapSigns,
  FaUserTie,
  FaWhatsapp,
} from 'react-icons/fa';

const PackageDetail = ({ packages }) => {
  const { id } = useParams();
  const selectedPackage = packages.find(pkg => pkg.id === parseInt(id));
  const { pkgId, title, description, image, duration, inclusions } =
    selectedPackage;

  if (!selectedPackage) {
    return <h2>Package not found</h2>;
  }

  const inclusionsList = [
    { key: 'stay', label: 'Stay', icon: <FaBed /> },
    {
      key: 'meals',
      label: 'Meals',
      icon: <FaUtensils />,
    },
    {
      key: 'transportation',
      label: 'Transportation',
      icon: <FaBus />,
    },
    {
      key: 'sightseeing',
      label: 'Sightseeing',
      icon: <FaMapSigns />,
    },
    {
      key: 'tripLeader',
      label: 'Trip Leader',
      icon: <FaUserTie />,
    },
  ];

  return (
    <div>
      <div className="md:w-[80%] mx-auto my-md-5">
        <img className="object-cover" src={image} alt={title} />
      </div>
      <div className="my-5">
        <div className="my-5 mx-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <h3 className="text-gray-800 mt-1">{duration}</h3>
        </div>
        <div className="my-5 mx-5 package-description">
          <p>{description}</p>
        </div>
        <div className="package-inclusions border border-gray-300 p-5">
          <ul className="list-none space-y-2">
            {inclusionsList.map(
              inclusion =>
                selectedPackage.inclusions[inclusion.key] && (
                  <li
                    key={inclusion.key}
                    className="flex items-center space-x-5 p-1"
                  >
                    {inclusion.icon}
                    <span className="font-semibold">
                      {inclusion.label}
                      <span className="font-normal"> included</span>
                    </span>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full bg-white shadow-lg py-2 px-4 flex justify-between items-center md:static">
        <a
          href="https://wa.me/+919797125797"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full py-2 px-4 flex items-center space-x-2"
        >
          <FaWhatsapp className="text-white" />
          <span>WhatsApp</span>
        </a>

        <button className="bg-blue-500 text-white rounded-full py-2 px-6">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetail;
