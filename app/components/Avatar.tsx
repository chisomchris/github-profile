export const Avatar = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="aspect-square w-28 bg-[#111729] rounded-3xl border-[#364153] border-solid border-[.65rem] grid place-items-center overflow-hidden mr-6 md:w-32">
      <img src={src} alt={alt} className="w-full aspect-square md:w-24" />
    </div>
  );
};
