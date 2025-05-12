export const GithubStat = ({
  desc,
  value,
}: {
  desc: string;
  value: number | string;
}) => {
  return (
    <div className="rounded-lg bg-[#111729] px-4 py-1 w-fit text-white inline-flex items-center font-bold mb-3">
      {desc} <span className="inline-block h-8 w-px bg-[#97A3B6] mx-4" />{" "}
      {value}
    </div>
  );
};
