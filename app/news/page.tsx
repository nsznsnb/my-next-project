import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import SearchField from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";

export const revalidate = 0;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
