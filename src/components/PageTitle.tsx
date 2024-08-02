import ContainerBox from "./ui/ContainerBox";

const PageTitle = () => {
  return (
    <div>
      <ContainerBox className="flex flex-col justify-center items-center gap-2 mt-6 mb-12">
        <span className="text-3xl font-semibold">Page Title</span>
        <div className="divide-x divide-[#E8E8EA] text-base">
          <span className="px-3 text-[#3B3C4A]">Home</span>
          <span className="px-3 text-[#696A75]">Link One</span>
        </div>
      </ContainerBox>
    </div>
  );
};

export default PageTitle;
