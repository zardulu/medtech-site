import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  return (
    <nav className="w-full bg-slate-100/20 shadow-lg py-6 px-4 md:px-6 lg:px-12 sticky top-0 z-50 backdrop-filter backdrop-blur-[20px]">
      <div className="container mx-auto flex justify-between items-center space-x-6">
        <a
          className="text-3xl font-bold tracking-tighter sm:text-4xl cursor-pointer"
          onClick={scrollToTop}
        >
          Medical Technology
        </a>
        <div className="space-x-6">
          <Link
            to="NV-Core"
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            NV-Core
          </Link>
          <Link
            to="V-Track"
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            V-Track
          </Link>
          <Link
            to="Vitals"
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            Vitals
          </Link>
          <Link
            to="CPAP"
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
          >
            CPAP
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
