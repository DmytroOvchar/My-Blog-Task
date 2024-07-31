import clsx from "clsx";
import Image from "next/image";

import { formatDate } from "../utils/dateUtil";

interface ArticleCardProps {
  id: number | string;
  title: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  authorImageUrl: string;
  className?: string;
}

const ArticleCard = ({
  id,
  title,
  author,
  date,
  category,
  imageUrl,
  authorImageUrl,
  className,
}: ArticleCardProps) => {
  return (
    <article
      className={clsx(
        "w-[392px] p-4 rounded-xl flex flex-col gap-4 h-[488px] border border-[#E8E8EA] cursor-pointer",
        className
      )}
    >
      <div className="w-full bg-slate-500 relative flex-[55_1_0%] rounded-xl overflow-hidden">
        <Image
          alt="article image"
          src={imageUrl}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex-[45_1_0%] p-2">
        <div className="flex flex-col items-baseline h-full justify-between">
          <span className="px-[10px] py-1 bg-[#4B6BFB0D] text-[#4B6BFB] rounded-md font-medium text-[14px]">
            {category}
          </span>
          <p className="text-[#181A2A] text-2xl font-semibold">{title}</p>
          <div className="flex items-center gap-x-5">
            <div className="flex items-center gap-x-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={authorImageUrl}
                  alt={`${author}'s image`}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <p className="text-base text-[#97989F] font-medium">{author}</p>
            </div>
            <div className="text-base text-[#97989F] font-normal">
              {formatDate(date)}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;