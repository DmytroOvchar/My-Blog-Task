const AboutSection = ({ email, phone }: { email: string; phone: string }) => (
  <div className="w-[275px]">
    <h3 className="mb-[12px] text-lg font-semibold">About</h3>
    <p className="mb-6 text-base text-[#696A75]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam
    </p>
    <address className="mb-1">
      <p className="not-italic">
        <span className="font-semibold">Email: </span>
        <span>{email}</span>
      </p>
      <p className="not-italic">
        <span className="font-semibold ">Phone: </span>
        <span>{phone}</span>
      </p>
    </address>
  </div>
);

export default AboutSection;
