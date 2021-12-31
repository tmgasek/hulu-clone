import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import { useRouter } from "next/router";
import Pagination from "./Pagination";

function Results({ data }) {
  const router = useRouter();

  const pushBasedOnMediaType = (item) => {
    if (item.media_type === "tv") {
      router.push(`/tv?id=${item.id}`);
    } else {
      router.push(`/movie?id=${item.id}`);
    }
  };

  if (!data) return <div></div>;

  return (
    <div>
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap items-center justify-center">
        {data.results.map((item) => (
          <div
            key={item.id}
            //could create a Link tag here if concerned with SEO
            onClick={() => pushBasedOnMediaType(item)}
          >
            <Thumbnail item={item} />
          </div>
        ))}
      </FlipMove>
      <Pagination max={data.total_pages} />
    </div>
  );
}

export default Results;
