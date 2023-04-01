function HeaderTitle({ title, titleBg }) {
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
    <section className="bg-slate-200 md:bg-transparent border-b-[1px] md:border-none border-slate-400 px-6 py-4 md:py-20 text-text uppercase text-left md:text-center fixed md:relative mb-9 md:m-0 left-0 right-0 top-0 z-20">
      <h1 className="font-black my-0 leading-none">
        {otherWords} <span className="text-primary">{lastWord}</span>
      </h1>
      <span className="hidden md:block absolute text-9xl left-0 right-0 font-black font-[Montserrat] top-1/2 tracking-widest opacity-5 -translate-y-1/2">
        {titleBg}
      </span>
    </section>
  );
}
export default HeaderTitle;
