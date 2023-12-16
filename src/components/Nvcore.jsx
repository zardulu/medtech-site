import Navbar1 from "./Navbar1";

const Nvcore = () => {
  return (
    <div>
        <Navbar1 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold my-8">V-Track</h1>

      <div className="bg-white p-20  max-w-screen-lg my-4 border border-gray-300 rounded-lg">
      <div className="mx-auto">
      <h2 className="text-4xl font-bold mb-8">Key Features</h2>
      <ul className="list-disc pl-4 text-gray-500">
        <li className="mb-3">
          Medical grade portable device (9cm*7cm*5cm) used for monitoring skin and core body temperature of patients in hospitals with sensor placed 1.5m away from the patient via wires.
        </li>
        <li className="mb-3">
          Data continuously displayed on the screen as well as an app provided with the product.
        </li>
        <li>
          Velcro strap available to tie the device on the bedside or IV-Poles.
        </li>
      </ul>
    </div>
      </div>

      <div className="my-4">
        {/* Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual video ID */}
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="bg-white p-20  max-w-screen-lg my-4 border border-gray-300 rounded-lg">
      <div className="mx-auto">
      <h2 className="text-4xl font-bold mb-8">Inference</h2>
        <p className="text-gray-500">
        Temperature data will be transmitted to our app, where temperature graphs and logs can be plotted with cloud storage. One can access the previous data as the app has cloud storage.
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Nvcore;
