/* eslint-disable react/prop-types */
const SectionHeader = ({ title, description }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="title">{title}</h2>
        <p className="max-w-2xl">{description}</p>
      </div>
    </>
  );
};

export default SectionHeader;
