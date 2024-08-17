"use client";
import Link from "next/link";
import ThemeSwitch from "./ui/ThemeSwitch";
import DropDown from "@/components/ui/DropDown";
import { useRouter } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [navigationModel, setNavigationModel] = useState<boolean>(false);

  const navigationChange = () => {
    setNavigationModel((prev) => !prev);
  };
  return (
    <>
      <div
        className={`flex-col md:flex-row relative left-0 top-0 flex justify-around z-50 backdrop-blur-sm dark:text-white bg-blur-50 border  w-full  p-4 md:p-4 gap-2`}
      >
        <div className="logo flex justify-between items-center">
          <div
            onClick={() => {
              router.refresh();
            }}
            className="flex justify-center items-center cursor-pointer"
          >
            <h1 className="text-2xl">OCS</h1>
          </div>

          <div
            onClick={navigationChange}
            className={`menu-options cursor-pointer flex justify-center items-center md:hidden ml-3`}
          >
            {navigationModel ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div
          className={`${
            navigationModel ? "flex flex-col items-start" : "hidden"
          } md:flex md:flex-row justify-center gap-4 md:items-center`}
        >
          <DropDown
            trigger={"features"}
            items={[
              "Your Online Co-Working Space",
              "Make New Friends",
              "Work in a collaborative env",
            ]}
          />
          <DropDown
            trigger={"features"}
            items={[
              "Your Online Co-Working Space",
              "Make New Friends",
              "Work in a collaborative env",
            ]}
          />

          <Link href={"#pricing"}>Pricing</Link>
          <div className="cursor-pointer">
            <ThemeSwitch />
          </div>
        </div>
        <div
          className={`${
            navigationModel ? "flex" : "hidden"
          } md:flex justify-center gap-3 items-center`}
        >
          <Link href={"sign-in"}>Log in</Link>
          <Link
            className=" bg-blue-700 hover:bg-blue-800 text-white  p-3 py-2 border rounded-3xl transition-colors"
            href={"sign-up"}
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
