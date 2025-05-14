import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, MetaFunction, useLoaderData } from "@remix-run/react";
import React from "react";
import { Avatar } from "~/components/Avatar";
import { GithubStat } from "~/components/GithubStat";
import { RepoCard } from "~/components/RepoCard";
import { getUser, getUserRepos } from "~/utils/user";
import { BaseUser, Repo } from "~/types";
import invariant from "tiny-invariant";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: `${data && data.user ? (data.user?.name || data.user.login) + " |" : ""}  Github Profile`,
    },
    { name: "description", content: "GitHub Profile" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { username } = params;
  invariant(username, "username is required");
  const repos = await getUserRepos<Repo[]>(username);
  const user = await getUser<BaseUser>(username);
  return { user, repos };
};

export default function User() {
  const { user, repos } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="flex gap-4 flex-wrap flex-col -mt-[2.5rem] sm:items-end sm:flex-row">
        <Avatar src={user.avatar_url} alt={user.name || user.login} />
        <div className="flex gap-4 flex-wrap">
          <GithubStat desc="Followers" value={user.followers} />
          <GithubStat desc="Following" value={user.following} />
          {user && user.location ? (
            <GithubStat desc="Location" value={user.location} />
          ) : null}
        </div>
      </div>

      <div>
        <h1 className="text-white text-[2rem] font-bold mt-4">
          <Link to={user.html_url}>{user.name || user.login}</Link>
        </h1>
        {!!user.bio && <p className="text-[#97A3B6] text-lg">{user.bio}</p>}
      </div>

      <section id="repos" className="py-6">
        <ul className="grid gap-4 md:grid-cols-2">
          {repos && repos.length > 0
            ? repos.map((repo) => {
                return (
                  <React.Fragment key={repo.name}>
                    <RepoCard repo={repo} />
                  </React.Fragment>
                );
              })
            : null}
        </ul>
      </section>
    </>
  );
}
