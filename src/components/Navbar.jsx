

function Navbar() {
    return (
        <nav className="w-full bg-slate-100/20 shadow-lg py-6 px-4 md:px-6 lg:px-12 sticky top-0 z-50 backdrop-filter backdrop-blur-[20px]">
          <div className="container mx-auto flex justify-between items-center space-x-6">
            <a
              className="text-3xl font-bold tracking-tighter sm:text-4xl"
              href="#"
            >
              Medical Technology
            </a>
            {/* Add your navigation links here */}
          </div>
        </nav>
      );
      
}

export default Navbar;