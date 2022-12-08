import qs from "qs";
import PlaceHolder from "../../components/PlaceHolder";

const QUERY = (slug) =>
  qs.stringify({
    filters: { slug: slug },
  });

async function getPage(page) {
  const BASE_URL = "http://localhost:1337/api/pages";
  const res = await fetch(BASE_URL + "?" + QUERY(page));
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getPage("about");
  console.log(data);

  return (
    <div>
      <PlaceHolder
        heading="About Page"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestias nobis sit dolor ipsa quod commodi provident quo laborum distinctio."
      />
    </div>
  );
}
