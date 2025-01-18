import AboutUs from "@/components/aboutUs";
import Responsive from "@/components/carousel";
import SimpleSlider from "@/components/carousel";
import Header from "@/components/header";
import Query from "@/components/inqueryForm";
import Layout from "@/components/layout";
import Services from "@/components/services";
import { CarouselItem, services } from "@/model/constant";
import Image from "next/image";

function Home() {
  console.log(CarouselItem);

  return (
    <>
      <div className=" ">
        <SimpleSlider data={CarouselItem} />
      </div>
      <div>
        <Services />
      </div>
      <div className="py-16">
        <h1 className="text-3xl pb-6 max-w-2xl mx-auto font-semibold mb-4 text-black">   Request a CallBack</h1>
        <Query />
      </div>
      <div>
        <AboutUs />
      </div>
    </>
  );
}
Home.getLayout = (page) => {
  console.log(page);

  return <Layout>{page}</Layout>
}
export default Home