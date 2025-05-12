import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import React from "react";
import { Avatar } from "~/components/Avatar";
import { GithubStat } from "~/components/GithubStat";
import { getUser } from "~/fetchers/user";
import { BaseUser, Repo } from "~/types";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: `${data && data.user ? data.user?.name + " |" : ""}  Github Profile`,
    },
    { name: "description", content: "GitHub Profile" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { username } = params;
  if (!username) return {} as { user: BaseUser };
  const user = await getUser<BaseUser>(username);
  return { user };
};

export default function User() {
  const { user } = useLoaderData<typeof loader>();
  // console.log(user);
  return (
    <>
      <div className="flex gap-4 flex-wrap flex-col -mt-[2.5rem] sm:items-end sm:flex-row">
        <Avatar src={user.avatar_url} alt={user.name} />
        <GithubStat desc="Followers" value={user.followers} />
        <GithubStat desc="Following" value={user.following} />
        <GithubStat desc="Location" value={user.location} />

        {/* <Avatar src={"/hero-image-github-profile.jpg"} alt="" />
        <GithubStat desc="Followers" value={34} />
        <GithubStat desc="Following" value={2} />
        <GithubStat desc="Location" value={"Tokyo, Japan"} /> */}
      </div>

      <div>
        <h1 className="text-white text-3xl font-bold mt-4">
          <a href="">Github</a>
        </h1>
        <p className="text-[#97A3B6] text-lg">How poeple build software</p>
      </div>

      <section id="repos" className="py-6">
        <ul className="grid gap-4 md:grid-cols-2">
          {repositories.map((repo) => {
            return (
              <React.Fragment key={repo.name}>
                <RepoCard repo={repo} />
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    </>
  );
}

const RepoCard = ({ repo }: { repo: Repo }) => {
  return (
    <li className="card-background rounded-xl p-4 text-[#97A3B6]">
      <h2 className="text-[1.25rem] text-[#CDD5E0] font-bold pb-4">
        {repo.name}
      </h2>
      <p>{repo.description}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-4">
        {repo.license && (
          <p className="inline-flex">
            <span>
              <img alt="" src="/Chield_alt.svg" />
            </span>{" "}
            {repo.license}
          </p>
        )}
        {repo.forks && (
          <p className="inline-flex">
            <span>
              <img alt="" src="/Nesting.svg" />
            </span>{" "}
            {repo.forks}
          </p>
        )}
        {repo.likes && (
          <p className="inline-flex">
            <span>
              <img alt="" src="/Star.svg" />
            </span>{" "}
            {repo.likes}
          </p>
        )}
        <p>updated last 4 days</p>
      </div>
    </li>
  );
};

const repositories: Repo[] = [
  {
    name: "github-profile",
    description: "Github Profile",
    license: "MIT",
    likes: 100,
    forks: 20,
    updated_at: "2021-08-01T00:00:00Z",
  },
  {
    name: "github profile test",
    description: "Github Profile",
    license: "MIT",
    likes: 100,
    forks: 20,
    updated_at: "2021-08-01T00:00:00Z",
  },
  {
    name: "test github profile",
    description: "Github Profile, to be used to test frontend skills",
    license: "MIT",
    likes: 100,
    forks: 20,
    updated_at: "2025-05-12T00:00:00Z",
  },
  {
    name: "github-profile",
    description: "Github Profile",
    license: "MIT",
    likes: 100,
    forks: 20,
    updated_at: "2021-08-01T00:00:00Z",
  },
];
