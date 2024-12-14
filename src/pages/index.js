import Image from "next/image";
import localFont from "next/font/local";
// import Layout from "@/components/layout";
import Icons from "@/model/icons";
import CustomArrows from "@/components/carousel";
import Link from "next/link";
import Layout from "@/components/layout";




function Home() {
  // const rootStyle = getComputedStyle(document.documentElement)
  // const grayColor = rootStyle.getPropertyValue('--gray_color').trim();
  // const greenColor = rootStyle.getPropertyValue('--green').trim();
  return (
    <>
      <div> this is index page</div>
    </>
  );
}
Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}
export default Home