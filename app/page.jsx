import qs from "qs";
import PageNavbar from "../components/PageNavbar";
import ShoutOut from "../components/ShoutOut";
import Benefits from "../components/Benefits";
import CTA from "../components/cta";
import Count from "../components/Count";
import Steps from "../components/Steps";
import Faqs from "../components/Faqs";

const QUERY = (slug) =>
  qs.stringify({
    populate: {
      Blocks: {
        populate: ["link", "image", "Count"]
      },
      Navigation: {
        populate: ["Link"]
      },
    },
    filters: { slug: slug },
  });

async function getPage(page) {
  const BASE_URL = "http://localhost:1337/api/pages";
  const res = await fetch(BASE_URL + "?" + QUERY(page));
  const data = await res.json();
  return data;
}

function blockRenderer(blocks) {
  return blocks.map((block, index) => {
    console.log(block);
    switch (block.__component) {
      case "page.cta":
        return <CTA data={block} key={index} />;
      case "page.shout-out":
        return <ShoutOut data={block} key={index} />;
      case "page.count-data":
        return <Count data={block} key={index} />;
      default:
        return null;
    }
  });
}

export default async function Home() {
  const { data } = await getPage("home");
  const blocks = data[0].attributes.Blocks;
  const navigation = data[0].attributes.Navigation;

  console.log(data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <PageNavbar navigation={navigation} />
      {blockRenderer(blocks)}
      <Benefits />
      <Steps />
      <Faqs />
    </div>
  );
}
