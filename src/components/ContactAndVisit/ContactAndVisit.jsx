import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const ContactAndVisit = () => {
  return (
    <div className="w-[90%] mx-auto border rounded-lg border-gray-200  py-20 ">
      <div className="px-6">
        <h1 className="text-4xl tracking-tighter font-medium mb-3">
          Get in touch
        </h1>
        <p className="text-gray-700">
          Connect with us and start your journey today!
        </p>
      </div>
      <br />
      <br />

      <div className="container mx-auto px-4">
        <div id="contact" className="flex flex-col space-y-4">
          <div className="w-full bg-gray-50 p-10 rounded-lg">
            <h5 className="font-semibold mb-4">Socials</h5>
            <div className="flex gap-4 text-blue-700 text-3xl">
              <a
                href="https://www.instagram.com/trendhutkashmir?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="" />
              </a>
              <a
                href="https://wa.me/+919797125797"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="w-full bg-gray-50 p-10 rounded-lg">
            <h5 className="font-semibold mb-4">Email</h5>
            <div className="text-blue-700">
              <a href="mailto:trendhutkashmir@gmail.com">
                trendhutkashmir@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full bg-gray-50 p-10 rounded-lg">
            <h5 className="font-semibold mb-4">Mobile</h5>
            <div className="text-blue-700">
              <a href="tel:+919797125797">+91 9797125797</a>
              <br />
              <a href="tel:+919419658432">+91 9419658432</a>
            </div>
          </div>
          <div className="w-full bg-gray-50 p-10 rounded-lg">
            <h5 className="font-semibold mb-4">Location</h5>
            <div className="text-blue-700">
              <a href="https://maps.app.goo.gl/ADiTN9VeucuRsRih9" target="_blank" rel="noopener noreferrer">
                Habak, Srinagar, Jammu and Kashmir, 190006
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactAndVisit;
