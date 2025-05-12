export const Avatar = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="aspect-square w-28 bg-[#111729] rounded-2xl border-[#364153] border-solid border-[.5rem] grid place-items-center mr-6 md:w-32">
      <img src={src} alt={alt} className="rounded-full w-20 aspect-square md:w-24" />
    </div>
  );
};
