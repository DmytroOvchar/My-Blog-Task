import clsx from "clsx";
import Image from "next/image";

import { formatDate } from "../utils/dateUtil";
import { SliceComponentProps } from "@prismicio/react";
import { ArticleListProps } from "@/slices/ArticleList";
import { Simplify } from "../../prismicio-types";
import { Content } from "@prismicio/client";

const ArticleCard = ({
  title,
  author,
  date,
  category_name,
  category_color,
  item_image,
  author_image,
}: Simplify<Content.ArticleListSliceDefaultPrimaryArticlesItem>) => {
  return (
    <article
      className={clsx(
        "w-[392px] p-4 rounded-xl flex flex-col gap-4 h-[488px] border border-[#E8E8EA] cursor-pointer"
      )}
    >
      {
        <div className="w-full bg-slate-500 relative flex-[55_1_0%] rounded-xl overflow-hidden">
          <Image
            alt={item_image.alt || ""}
            src={item_image.url || ""}
            layout="fill"
            className="object-cover"
          />
        </div>
      }
      <div className="flex-[45_1_0%] p-2">
        <div className="flex flex-col items-baseline h-full justify-between">
          <span className="px-[10px] py-1 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md font-medium text-[14px]">
            {category_name}
          </span>
          <p className="text-[#181A2A] text-2xl font-semibold">{title}</p>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={author_image.url || ""}
                  alt={`${author_image.alt}'s image`}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <p className="text-base text-[#97989F] font-medium">{author}</p>
            </div>
            <div className="text-base text-[#97989F] font-normal">{date}</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
