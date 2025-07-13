import { title } from './primitives';
import { getInTouch } from '../constant';
import { CircleCheck } from '../assets/icons/icons';
import Link from 'next/link';
import { WhatsappIcon } from '../assets/brand-Icons';

function GetInTouch() {
  const message = encodeURIComponent(
    `Hello!! MTrax Digital Media
        
  I'm interested in your services.
  Could you please share more details?
  
  Here's my contact info:
  Phone: +91 XXXXX XXXXX
  Email: myEmail@gmail.com  
  
  Looking forward to hearing from you. Thanks!`
  );
  const whatsappUrl = `https://wa.me/919326719497?text=${message}`;
  return (
    <div className="flex-col inline-flex ">
      <h1 className={`${title({ size: 'sm' })} mb-9`}>Get In Touch</h1>
      <div>
        <div className="">
          <Link
            target="_blank"
            href={`mailto:mtraxdigitalmedia@gmail.com?subject=${encodeURIComponent('Music Service Inquiry')}&body=${encodeURIComponent(
              "Hello!! MTrax Digital Media, \n\n I'm interested in your services.\nCould you please share more details?\n\nHere's my contact info:\nPhone: +91 XXXXX XXXXX\nEmail: myEmail@gmail.com\n\nLooking forward to hearing from you. Thanks!"
            )}`}
            // href="mailto:mtraxdigitalmedia@gmail.com"
            className="flex items-center transition-colors"
          >
            <svg
              className="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            mtraxdigitalmedia@gmail.com
          </Link>
        </div>

        <div>
          <div className="flex items-center gap-2 ">
            <WhatsappIcon />
            <Link
              target="_blank"
              href={whatsappUrl}
              className="text-white py-2 block"
            >{`(+91) 9326719497`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
