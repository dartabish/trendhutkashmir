import '../../index.css';

const TopDestinations = () => {
  return (
    <div>
      <h1 className="section-title">Top destinations</h1>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615478649193-db68b2836697?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h2 className="text-white text-2xl font-bold">Gulmarg</h2>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1696679492271-184101a8d776?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h2 className="text-white text-2xl font-bold">Sonmarg</h2>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635407345988-55d9fb4e9465?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h2 className="text-white text-2xl font-bold">Pahalgam</h2>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664954249116-f0827256e1a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h2 className="text-white text-2xl font-bold">Doodhpathri</h2>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1641800870335-0b9beeb59d4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h2 className="text-white text-2xl font-bold">Srinagar</h2>
              </div>
            </div>

            {/* <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-[url('https://via.placeholder.com/600x400')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-6 flex flex-col justify-end h-64">
                <h2 className="text-white text-2xl font-bold">Card 6</h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopDestinations;
