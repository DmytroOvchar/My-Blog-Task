import clsx from "clsx";

const GridContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[repeat(auto-fill,minmax(auto,392px))] gap-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridContainer;
