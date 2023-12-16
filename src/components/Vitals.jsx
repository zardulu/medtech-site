import Navbar1 from "./Navbar1";

const Nvcore = () => {
  return (
    <div>
        <Navbar1 />
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold my-8">Vitals</h1>

      <div className="bg-white p-20  max-w-screen-lg my-4 border border-gray-300 rounded-lg">
      <div className="mx-auto">
      <h2 className="text-4xl font-bold mb-8">Key Features</h2>
      <ul className="list-disc pl-4 text-gray-500">
        <li className="mb-3">The Device monitors temperature, SpO2, and heart rate.</li>
        <li className="mb-3">Device size – 4cm (length) * 4cm (width) * 0.5-0.7cm (height).</li>
        <li className="mb-3">The vitals information can be configured by the doctor in between from the range of every 15 minutes to 24 hours.</li>
        <li className="mb-3">Device wakes up on press button and shows data immediately via the app.</li>
        <li className="mb-3">Low battery alerts starting at 20% and 10% battery remaining, sync everything and then notifying the person that data can be lost once the device switches off. The same notification should be sent to the app as well.</li>
        <li className="mb-3">The device battery will last up to 3 months on a single charge.</li>
        <li className="mb-3">The device is EMC, EMI compliant.</li>
        <li className="mb-3">The HMI (Human Machine Interaction) of the device is more user-friendly. The LED indication is given so that the user will identify that the device is on and sending readings to the associated app. It will also show the battery is low.</li>
        <li className="mb-3">The device can transmit data up to a 50m range in an open field.</li>
        <li className="mb-3">Device battery will last for 500 - 600 charge cycles (2 years).</li>
        <li>Portable charger will be given along with the device.</li>
      </ul>
    </div>
      </div>

    </div>
    </div>
  );
};

export default Nvcore;
