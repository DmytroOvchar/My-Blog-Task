import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Section`.
 */
export type SectionProps = SliceComponentProps<Content.SectionSlice>;

/**
 * Component for "Section" Slices.
 */
const Section = ({ slice }: SectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>{slice.primary.title}</>
      <PrismicRichText field={slice.primary.description} />
      {slice.primary.boolean && <button>Show Button!</button>}
      <>{slice.primary.options}</>
      Placeholder component for section (variation: {slice.variation}) Slices
    </section>
  );
};

export default Section;
