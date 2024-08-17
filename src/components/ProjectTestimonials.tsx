import { platform } from "os";
import { IconType } from "react-icons";
import { FcPuzzle } from "react-icons/fc";
import { FcHeatMap } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { RxStarFilled } from "react-icons/rx";
import Image from "next/image";

const ProjectTestimonials = () => {
  return (
    <div className="project-testimonials my-10 rounded-t-lg">
      <div className="w-[95%] mx-auto sm:w-3/4 pt-3 border overflow-hidden dark:border-slate-500 shadow-sm rounded-xl ">
        <div className="project-features grid grid-cols-3 grid-rows-1 mx-4 md:mx-10 pb-5 justify-items-center">
          <FeatureUI Icon={FcHeatMap} Label="Track" ratings={5} />
          <FeatureUI Icon={FcCollaboration} Label="Collaborate" ratings={4} />
          <FeatureUI Icon={FcPuzzle} Label="Plan" ratings={5} />
        </div>
        <div className="w-full bg-gray-200 dark:bg-slate-400 p-7">
          <div className="platforms  md:w-3/4 grid xl:w-1/2 grid-cols-5 mx-auto justify-items-center  ">
            {PlatformUI()}
          </div>
        </div>
      </div>
    </div>
  );
};
function PlatformUI(): React.ReactElement {
  const platforms = ["android", "apple", "windows", "linux", "chrome"];
  return (
    <>
      {platforms.map((platform, idx) => {
        return (
          <div
            key={idx}
            className="platform-icon inline-block p-3 dark:bg-slate-800 bg-white border rounded-md max-w-14 justify-center items-center"
          >
            <Image
              src={`/images/platforms/${platform}.png`}
              width={40}
              height={40}
              alt="pointed"
            />
          </div>
        );
      })}
    </>
  );
}

function FeatureUI({
  Icon,
  Label,
  ratings,
}: {
  Icon: IconType;
  Label: string;
  ratings: number;
}) {
  return (
    <>
      <div
        className={`feature-${Label} flex flex-col items-center justify-center`}
      >
        <div className="feature w-full flex justify-start items-center gap-2 md:gap-3">
          <Icon className="text-4xl md:text-5xl" />
          <span className="text-md ">{Label}</span>
        </div>
        <div className="ratings w-full justify-start flex items-center gap-1">
          {Ratings(ratings)}
          <span className="text-sm text-gray-600 border border-slate-200 px-1 rounded-full ">
            {"" + ratings}
          </span>
        </div>
      </div>
    </>
  );
}
function Ratings(value: number) {
  return (
    <>
      {Array.from({ length: value }, (_, i) => (
        <RxStarFilled key={i} color="#FFC107" size={18} />
      ))}
    </>
  );
}

export default ProjectTestimonials;
