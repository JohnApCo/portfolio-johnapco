function TitleLayout({ children, title, titleBg, ...other }) {
  let wordsLength = title.split(" ").length;
  let lastWord, otherWords;
  if (wordsLength > 0) {
    lastWord = title.split(" ")[wordsLength - 1];
  }
  if (wordsLength > 1) {
    otherWords = title
      .split(" ")
      .splice(0, wordsLength - 1)
      .join(" ");
  }

  return (
    <>
      <section className=" bg-divider sm:bg-transparent border-b-[1px] sm:border-none border-divider_menu px-6 py-4 sm:py-20 text-text uppercase text-left sm:text-center fixed sm:relative mb-9 sm:m-0 left-0 right-0 top-0 z-20">
        <h1 className="font-black my-0 leading-none">
          {otherWords} <span className="text-primary">{lastWord}</span>
        </h1>
        <span className="hidden sm:block absolute text-9xl left-0 right-0 font-black font-[Montserrat] top-1/2 tracking-widest opacity-5 -translate-y-1/2">
          {titleBg}
        </span>
      </section>
      <div className="pt-24 sm:pt-0 container xl:max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 ">
        {children}
      </div>
    </>
  );
}
export default TitleLayout;
