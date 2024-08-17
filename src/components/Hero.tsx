"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
import { Suspense, useMemo, lazy } from "react";
const Component = lazy(() => import("./ui/barChart"));
import BarChartLoad from "./ui/loadingUI/barChartLoad";
import { ChartData } from "@/app/page";

const Hero: React.FC<ChartData> = ({ chartData }) => {
  const { data: session, status } = useSession();

  const total = useMemo(
    () => ({
      productive: chartData.reduce(
        (acc, curr) => acc + Number(curr.productive),
        0
      ),
      nonProductive: chartData.reduce(
        (acc, curr) => acc + Number(curr.nonProductive),
        0
      ),
    }),
    []
  );

  return (
    <div
      style={{
        backgroundImage: `url(/images/bg-svg.svg), linear-gradient(to bottom, 
          #e9d5ff , white)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
      className="p-6 mb-7"
    >
      <div className="mt-5 sm:text-5xl text-4xl overflow-hidden font-semibold max-h-min  text-black text-center ">
        <span className="relative overflow-hidden">
          The All-in-One
          <Image
            className="absolute left-[119%] top-[-95%]"
            src="/images/pppointed.svg"
            width={200}
            height={200}
            alt="pointed"
          />
        </span>
        <div>
          Online <span className=" text-blue-500">Co-Working</span> space
        </div>
      </div>
      <div className="auth-btn group flex justify-center mt-7">
        <Button
          onClick={() => (session?.user ? signOut() : signIn("google"))}
          variant="outline"
          className="font-bold rounded-3xl px-10"
        >
          {session?.user ? "Logout" : "Login With Google"}

          <FaArrowRight className=" group-hover:translate-x-1 transition-transform ml-2" />
        </Button>
      </div>
      <div className="tracker mt-10 mx-auto flex justify-center ">
        <div className="productive-score mr-2 w-3 sm:w-6 md:mr-5 rotate-180 border border-gray-500 rounded-xl dark:bg-stone-900">
          <div
            className="w-full bg-green-600 rounded-xl"
            style={{
              height: `${total.nonProductive / 10}%`,
            }}
          ></div>
        </div>
        <div className="w-full sm:w-3/4">
          <Suspense fallback={<BarChartLoad />}>
            <Component chartData={chartData} total={total} />
          </Suspense>
        </div>
        <div className="productive-score ml-2 w-3 sm:w-6 md:ml-5 rotate-180 border border-gray-500 rounded-xl dark:bg-stone-900">
          <div
            className="w-full  bg-red-600 rounded-xl"
            style={{
              height: `${total.nonProductive / 10}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
