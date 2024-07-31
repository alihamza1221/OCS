import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-radial from-blue-500 to-green-500 h-screen mt-12">
        Radial Gradient Background
      </div>

      <div className="bg-gradient-conic from-red-500 via-yellow-500 to-blue-500 h-screen">
        Conic Gradient Background
      </div>
    </>
  );
}
