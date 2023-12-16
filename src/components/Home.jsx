import nvcore from '../assets/nv_core.png';
import vtrack from '../assets/v_track.png';
import vitals from '../assets/vitals.png';
import CPAP from '../assets/CPAP.png';
import Main from '../assets/Main.png';
import Button from './Button';
import ImageGrid from './ImageGrid';
import Navbar from './Navbar';
import { Element } from 'react-scroll';
function Home() {
  return (
    <div>
        <Navbar />
        <main className="flex flex-col justify-center items-center space-y-8 px-4 md:px-6 lg:px-12">
        <section className="py-12 mx-auto max-w-screen-xl px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <img
        alt="Hero"
        className="mx-auto overflow-hidden rounded-xl object-bottom w-full h-96 sm:h-full lg:order-last lg:aspect-square"
        src={Main}
        />
        <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
            Enhancing Medical Technology for Better Health
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Our mission is to design and manufacture innovative medical devices that improve patient care.
            </p>
        </div>
        </div>
    </div>
    </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">Our Products</h2>
            <div className="mx-auto grid items-start gap-10 sm:max-w-4xl md:gap-12 lg:max-w-5xl">
            <Element name="NV-Core">
                <div className="md:flex md:flex-row-reverse md:items-start mb-20" id="product1">
                
                <img
                    alt="NV-Core"
                    className="mx-auto md:ml-20 md:mr-0 overflow-hidden object-center w-full md:w-auto md:order-first rounded-3xl"
                    height="150"
                    src={nvcore}
                    width="150"
                />
                
                <div className="md:w-3/4">
                
                    <h3 className="text-xl font-bold">NV-Core</h3>
                    
                    <p className="text-lg text-gray-400 mb-5">
                    NV-Core is a temperature monitoring device. It is a plug and play device which is easy to operate.
                    It is Portable, lightweight and designed to enhance user experience. The device can be connected to
                    a mobile application to record the data with cloud storage functionality.
                    </p>
                    <Button href="/NV-Core" />
                </div>
                </div>
                </Element>

                <Element name="V-Track">
                <span className="md:flex md:items-start mb-20" id="V-Track">
                <img
                    alt="V-Track"
                    className="mx-auto md:mr-20 md:ml-0 overflow-hidden object-center w-full md:w-auto md:order-first rounded-3xl"
                    height="150"
                    src={vtrack}
                    width="150"
                />
                <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">V-Track</h3>
                    <p className="text-lg text-gray-400 mb-5">
                    Device continuously monitors temperature and transmits results to a mobile app. Device will be pasted
                    on the body by means of medical tapes where sensor touches the skin and the system will transmit data
                    via Bluetooth. It also has a smart AI system capable of identifying diseases.
                    </p>
                    <Button href="/V-Track" />
                </div>
                </span>
                </Element>

                <Element name="Vitals">
                <div className="md:flex md:flex-row-reverse md:items-start mb-20" id="product3">
                <img
                    alt="Product 3"
                    className="mx-auto md:ml-20 md:mr-0 overflow-hidden object-center w-full md:w-auto md:order-first  rounded-3xl"
                    height="150"
                    src={vitals}
                    width="150"
                />
                <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">Vitals (Product in Pipeline)</h3>
                    <p className="text-lg text-gray-400 mb-5">
                    Device continuously monitors temperature, SpO2, and heart rate levels. The recorded data is displayed
                    in an organized manner in the app. The device will be pasted on the body by means of medical tapes
                    where the sensor touches the skin, and the system then transmits data via Bluetooth.
                    </p>
                    <Button href="/Vitals" />
                </div>
                </div>
                </Element>

                <Element name="CPAP">
                <span className="md:flex md:items-start mb-20" id="CPAP">
                <img
                    alt="CPAP"
                    className="mx-auto md:mr-20 md:ml-0 overflow-hidden object-center w-full md:w-auto md:order-first rounded-3xl"
                    height="150"
                    src={CPAP}
                    width="150"
                />
                <div className="md:w-3/4">
                    <h3 className="text-xl font-bold">CPAP (Product in Pipeline)</h3>
                    <p className="text-lg text-gray-400 mb-5">
                    Portable and versatile, it includes multiple therapy modes, and convenient control with the Mobile app. The machine delivers an airstream at one steady pressure and the user can change the pressure according to their needs.
                    </p>
                    <Button href="/CPAP" />
                </div>
                </span>
                </Element>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3" />
            </div>
        </section>
        <section className="w-full py-12 md:py-20 lg:py-26 bg-gray-800 rounded-xl">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
                <h2 className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight">Sponsors & Partners</h2>
                <ImageGrid />
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2" />
            </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold sm:text-5xl text-center">Contact Us</h2>
    <p className="text-center text-gray-500 dark:text-gray-400">For any inquiries, please contact us at</p>

    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 mt-8">
      <div className="max-w-md text-center md:text-left">
        <h3 className="text-lg font-bold mb-2">Registered Office Location</h3>
        <p>301, Gowra Tulips,</p>
        <p>Survey No 14 and 15,</p>
        <p>Gafoor Nagar, Hyderabad-500081, Telangana,</p>
        <p>Email: info.yantram@yantrammedtech.com</p>
        <p>Phone: 040-35855589 (Landline)</p>
      </div>

      <div className="max-w-md text-center md:text-left mt-8 md:mt-0">
        <h3 className="text-lg font-bold mb-2">Physical Office Location</h3>
        <p>G2, Innovative Cyber View, Partrika Nagar</p>
        <p>Survey No 79 of Madhapur Village,</p>
        <p>Serlinagampally Circle, Hyderabad - 500081, Telangana</p>
        <p>Email: info.yantram@yantrammedtech.com</p>
        <p>Phone: +91-8143716476</p>
      </div>
    </div>
  </div>
</section>


        </main>
    </div>
  );
}

export default Home;


