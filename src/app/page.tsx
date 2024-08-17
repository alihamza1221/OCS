import AppFeaturesUI from "@/components/AppFeaturesUI";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProjectTestimonials from "@/components/ProjectTestimonials";

export type ChartDataItem = {
  date: String;
  productive: Number;
  nonProductive: Number;
};
export interface ChartData {
  chartData: ChartDataItem[];
}
const getSampleChartData = async () => {
  //ssg
  const chartData = await fetch("http://localhost:3000/api/sampleChartData", {
    cache: "force-cache",
  }).then((res) => res.json());
  return chartData.data as ChartDataItem[];
};

const Home = async () => {
  const chartData = await getSampleChartData();

  return (
    <>
      <NavBar />
      <Hero chartData={chartData} />
      <ProjectTestimonials />
      <AppFeaturesUI />
    </>
  );
};

export default Home;
