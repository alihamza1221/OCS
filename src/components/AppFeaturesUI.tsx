import Image from "next/image";
const AppFeaturesUI = () => {
  return (
    <div className="app-features w-[95%] sm:w-3/4  mx-auto ">
      <div className="title-line text-xl font-bold mb-9">
        <span className="text-blue-600">Time Tracking Feature</span> Sets To
        Help You Build & Manage A High
        <span className="text-blue-600"> Growth Business</span>
      </div>
      <div className="time-tracking-feature   p-2 overflow-hidden text-black  flex justify-center gap-3 flex-col md:flex-row">
        <div className="border rounded-xl bg-violet-100 md:max-w-sm p-3">
          <div className="label text-md font-bold p-3">Time Tracking</div>
          <div className="content pl-3 text-sm pb-3">
            Accurate time tracking for you and your team from Desktop
          </div>
          <Image
            src={`/images/features/time tracking.png`}
            width={700}
            height={700}
            alt="pointed"
          />
        </div>
        <div className="track-hours border rounded-xl bg-green-50 md:max-w-3xl p-3">
          <div className="label text-md font-bold p-3">
            Daily, Weekly, Monthly & Custom Timesheet
          </div>
          <div className="content pl-3 text-sm pb-3">
            Calendar wise timesheet report for your members. You can track time
            worked reports on a daily, weekly, monthly, or custom basis.
          </div>
          <Image
            src={`/images/features/hours tracked.png`}
            width={1000}
            height={1000}
            alt="pointed"
          />
        </div>
      </div>
      <div className="web-browsing-feature flex justify-center flex-col xl:flex-row gap-4 md:gap-1 rounded-xl dark:bg-blue-50 mb-5 ">
        <div className="dashboard-user order-1">
          <Image
            src={`/images/dashboard-summary.svg`}
            width={1000}
            height={1000}
            alt="pointed"
          />
        </div>
        <div className="tracking-details p-2 xl:max-w-[38%]">
          <div className="label text-xl font-bold my-2">Web Time Tracking</div>
          <ul className="tracking-options order-2">
            <li className="opt-manual text-slate-700 list-item ">
              <span className="option-title mb-1 text-black font-bold text-md ">
                Manual web-based time entry
              </span>
              <br />
              Add your time entry to the system via the manual time entry
              feature,using chrome extension.
            </li>
            <li className="opt-browser text-slate-700  list-item  my-4">
              <span className="option-title mb-1 text-black font-bold text-md ">
                Browser Time Tracking
              </span>
              <br />
              Add OCS Time Tracker Chrome extension to your browser. Select the
              project and task to start tracking time with OCS Google Chrome
              extension. Furthermore, your tracked time will be synced to the
              daily timesheet automatically.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppFeaturesUI;
