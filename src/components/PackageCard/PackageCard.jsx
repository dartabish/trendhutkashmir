import { Link } from 'react-router-dom';

const PackageCard = ({ packageCard }) => {
  console.log(packageCard.id);
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
        style={{
          backgroundImage: `url(${packageCard.image})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
      <div className="relative p-6 flex flex-col justify-end h-64">
        <h2 className="text-white text-2xl font-bold">{packageCard.title}</h2>
        <span className="text-white mt-1">{packageCard.duration}</span>
        <Link
          to={`/packages/${packageCard.id}`}
          className="btn btn-blue mt-4 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
