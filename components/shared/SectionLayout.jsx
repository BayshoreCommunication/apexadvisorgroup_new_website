const SectionLayout = ({ children, img, bg, py = 'py-[1rem] md:py-[3.5rem]' }) => {
  return (
    <section
      className={`${img} ${bg} mx-auto flex justify-center items-center w-full `}
    >
      <div className={`container ${py} mx-5 lg-mx-0`}>{children}</div>
    </section>
  );
};

export default SectionLayout;
