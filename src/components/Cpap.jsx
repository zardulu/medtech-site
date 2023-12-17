import Navbar1 from './Navbar1';

const Cpap = () => {
  return (
    <div>
        <Navbar1 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold my-8">CPAP (Product in Pipeline)</h1>

      <div className="bg-white p-20  max-w-screen-lg my-4 border border-gray-300 rounded-lg">
      <div className="mx-auto">
      <h2 className="text-4xl font-bold mb-8">Key Features</h2>
      <ul className="list-disc pl-4 text-gray-500">
        <li className="mb-3">The dimensions of the device are 13cm*8cm*5cm. It fits in the hand, lightweight, and has the following features:</li>
        <ul className="list-disc pl-4">
          <li className="mb-3">Pressure range: Minimum 4cm H2O to 20cm H2O.</li>
          <li className="mb-3">Feedback loop to automatically adjust the pressure.</li>
          <li className="mb-3">Bluetooth and mobile application to connect and see values in a tabular format.</li>
          <li className="mb-3">Size: 13cm*8cm*5cm.</li>
          <li className="mb-3">Weight: 0.3-1kg range which is easy to carry.</li>
          <li className="mb-3">Should run on DC power, can be attached to USB cable to power sockets in trains or airplanes, and has an in-built battery.</li>
          <li className="mb-3">Auto CPAP and fixed pressure mode.</li>
          <li className="mb-3">Air filter can be easily removed and cleaned.</li>
          <li className="mb-3">One port for connecting the outlet pipe tube going to the patient mask.</li>
          <li className="mb-3">The power cord is around 6ft in length with a USB port for charging.</li>
          <li className="mb-3">Volume delivered by the machine is around 37-185L, based on pressure values.</li>
          <li className="mb-3">Altitude adjustment of up to 8000 feet, it will work in airplanes.</li>
          <li className="mb-3">Ramp-up time: 0-60 mins with 5 min increments. Pressure starts from 4cm H2O to CPAP pressure selected by the user.</li>
          <li>Tubing used with the patient mask is a 15mm flexible tube.</li>
        </ul>
      </ul>
    </div>
      </div>

      <div className="my-4">
      <img
            alt="NV-Core"
            className="mx-auto object-center max-w-full md:max-w-screen-md rounded-3xl"
            src="https://yantrammedtech.com/assets/cpap_mobile-a2309049.jpeg"
            width="800"
          />
      </div>

      <div className="bg-white p-20  max-w-screen-lg my-4 border border-gray-300 rounded-lg">
      <div className="mx-auto">
      <h2 className="text-4xl font-bold mb-8">Inference</h2>
        <p className="text-gray-500">
        The mobile app is your personal sleep therapy assistant – on your phone! By utilizing Bluetooth wireless technology, it enables you to use smart devices to set up therapy, change comfort settings and track your sleep.
        </p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cpap;
