import AppFeaturesUI from "@/components/AppFeaturesUI";
import Footer from "@/components/Footer";
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
  try {
    const chartData = await fetch(
      `${process.env.BASE_URL}/api/sampleChartData`,
      {
        cache: "force-cache",
      }
    ).then((res) => res.json());
    return chartData.data as ChartDataItem[];
  } catch (e) {
    return [];
  }
};

const Home = async () => {
  const chartData = await getSampleChartData();

  return (
    <>
      <NavBar />
      <Hero chartData={chartData} />
      <ProjectTestimonials />
      <AppFeaturesUI />
      <Footer />
    </>
  );
};

export default Home;
