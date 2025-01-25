function PageHeading({
  title = "",
  subtitle = "",
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <>
      <h1 className={"text-2xl md:text-3xl font-bold mb-2 " + className}>
        {title}
      </h1>
      <p className="text-sm md:text-md text-gray-500">{subtitle}</p>
    </>
  );
}

export default PageHeading;
