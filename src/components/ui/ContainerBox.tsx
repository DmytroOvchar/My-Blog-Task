import clsx from 'clsx';

const ContainerBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("max-w-[1216px] mx-auto", className)}>
      {children}
    </div>
  );
};

export default ContainerBox;
