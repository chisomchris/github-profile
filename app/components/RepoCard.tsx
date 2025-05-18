import { Link } from "@remix-run/react";
import { Repo } from "~/types";
import { _ } from "~/utils/lib";

export const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <li className="card-background rounded-xl p-4">
      <Link to={repo.html_url} className="text-white text-lg">
        <h2 className="text-[1.25rem] text-[#CDD5E0] font-bold pb-4">
          {repo.name}
        </h2>
        <p className="text-[#97A3B6]">{repo.description}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4 text-[#97A3B6]">
          {repo.license ? (
            <p className="inline-flex">
              <span>
                <img alt="" src="/Chield_alt.svg" />
              </span>{" "}
              {repo.license.spdx_id}
            </p>
          ) : null}
          <p className="inline-flex">
            <span>
              <img alt="" src="/Nesting.svg" />
            </span>{" "}
            {repo.forks}
          </p>
          <p className="inline-flex">
            <span>
              <img alt="" src="/Star.svg" />
            </span>{" "}
            {repo.stargazers_count}
          </p>
          <p className="text-[0.75rem]">
            {" "}
            updated {_(new Date(repo.updated_at), new Date())}
          </p>
        </div>
      </Link>
    </li>
  );
};
