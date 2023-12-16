import { Link } from "react-router-dom";
function Navbar1() {
    return (
        <nav className="w-full bg-slate-100/20 shadow-lg py-6 px-4 md:px-6 lg:px-12 sticky top-0 z-50 backdrop-filter backdrop-blur-[20px]">
        <div className="container mx-auto flex justify-between items-center space-x-6">
        <Link to="/">
        <button type="button" className="text-white bg-black hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
          <span className="sr-only">Icon description</span>
          </button>
  </Link>
        </div>
      </nav>
    )
}

export default Navbar1;

