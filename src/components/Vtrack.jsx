import Navbar1 from "./Navbar1";

const Nvcore = () => {
  return (
    <div>
        <Navbar1 />
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold my-8">V-Track</h1>

      <div className="bg-white p-20 max-w-screen-lg my-4 border border-gray-300 rounded-lg">
      <div className=" mx-auto">
      <h2 className="text-4xl font-bold mb-8">Key Features</h2>
      <ul className="list-disc pl-4 text-gray-500">
        <li>
          Medical grade wearable patch of 2.5cm*2.5cm*0.7cm, loaded with battery and sensors, attached via adhesives to the chest or under the armpit.
        </li>
        <li>
          Device specifically designed for health-conscious people.
        </li>
        <li>
          Conditions detected:
          <ul className="list-disc pl-4">
            <li>Hypothermia and sepsis in babies and elderly.</li>
            <li>Monitoring women{'\''}s health during pregnancy to ensure mother and baby are well.</li>
            <li>Monitoring menstruation health of women.</li>
            <li>Fever and its patterns predicting what type of fever it may be.</li>
            <li>Sleep pattern analysis.</li>
            <li>Severity of depression.</li>
            <li>Cerebral diseases like Alzheimer{'\''}s, Parkinson{'\''}s, stroke, and liver cirrhosis.</li>
            <li>Metabolic disorders like autoimmune disease triggers.</li>
          </ul>
        </li>
        <li>
          Different modules available for different diseases on subscription. Subscription can be canceled anytime. 1 module available for free with device purchase.
        </li>
        <li>
          Free space in the cloud available to store data. Additional storage space can be added on a “pay as you go” basis.
        </li>
        <li>
          Low battery and disease alerts.
        </li>
        <li>
          Device runs for 1 week on a single charge.
        </li>
        <li>
          The device is EMC, EMI compliant.
        </li>
        <li>
          The HMI (Human Machine Interaction) of the device is very user-friendly with LED indications for on-off and data transmission, charging, etc.
        </li>
        <li>
          To charge the device, just put it in its charging docket provided.
        </li>
        <li>
          Data transmitted to an app and cloud, accessible by dashboard.
        </li>
        <li>
          Reports can be published and shared via social media platforms.
        </li>
        <li>
          Shelf life of the device is 2 years.
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

       <div className="bg-white p-20 max-w-screen-lg my-4 border border-gray-300 rounded-lg">
       <div className="mx-auto">
      <h2 className="text-4xl font-bold mb-4">Mobile App Features</h2>
      <ul className="list-disc pl-4 text-gray-400">
        <li>App syncs with the device every 1 hour and updates the readings.</li>
        <li>App has the option of adding multiple users.</li>
        <li>App stores the data of an individual user.</li>
        <li>It shows temperature data in the form of a graph and logs format with a timestamp.</li>
        <li>It has cloud storage.</li>
        <li>Authentication of the app is available via password/PIN functionality.</li>
      </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Nvcore;
