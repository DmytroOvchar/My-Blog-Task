import ArticleCard from "@/components/ArticleCard";
import GridContainer from "@/components/ui/GridContainer";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ArticleList`.
 */
export type ArticleListProps = SliceComponentProps<Content.ArticleListSlice>;

/**
 * Component for "ArticleList" Slices.
 */
const ArticleList = ({ slice }: ArticleListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridContainer className="max-w-[1216px] mx-auto justify-center">
        {slice.primary.articles.map((item, index) => {
          return <ArticleCard {...item} />;
        })}
      </GridContainer>
    </section>
  );
};

export default ArticleList;
