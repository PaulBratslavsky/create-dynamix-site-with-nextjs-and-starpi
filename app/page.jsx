import qs from "qs";
import CTA from "../components/CTA";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
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

export default async function Home() {
  const { data } = await getPage("home");
  console.log(data)

  return (
    <div>
      <Hero />
      <Stats />
      <Benefits />
      <Steps />
      <Faqs />
      <CTA />
    </div>
  );
}
