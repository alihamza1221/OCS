import { FcSportsMode } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
const Footer = () => {
  return (
    <>
      <div className="app-download-opt w-[95%] mx-auto sm:w-3/4 pt-3 border overflow-hidden dark:border-slate-500 shadow-sm rounded-xl bg-blue-100 py-10 my-16">
        <div className="title text-xl sm:text-3xl font-bold my-4  mt-10 flex gap-2 justify-center items-center">
          <FcSportsMode /> Start tracking with OCS Productivity Tracker
        </div>
        <div className="services-label">
          <ul className="services flex gap-6 justify-center items-center">
            <li className="list-item inline">24/7 Support</li>
            <li className="list-item inline list-disc">Cancel Anytime</li>
            <li className="list-item inline list-disc">Free Forever</li>
          </ul>
        </div>
        <span className="download-btn flex justify-center mt-4">
          <span className="px-5 py-2 text-xl bg-blue-500 border border-blue-600 hover:bg-blue-600 mt-3 mb-2 rounded-md mx-auto mx-w-max">
            Download Now
          </span>
        </span>
        <div className="people-signed-up  flex gap-2 justify-center items-center text-xs hover:underline">
          <IoIosPeople className="text-xl" /> 10s of folk signed up
        </div>
      </div>

      <div className="footer text-center py-4">
        &copy; {new Date().getFullYear()} Company OCS. All rights reserved.
        <span className="flex justify-center gap-2 items-center">
          <TbWorld />
          English
        </span>
      </div>
    </>
  );
};

export default Footer;
