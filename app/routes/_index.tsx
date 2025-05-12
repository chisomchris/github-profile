import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SearchBox } from "~/components/SearchBox";
import { UserList } from "~/components/UserList";
import { searchUser } from "~/fetchers/user";
import { Response } from "~/types";

const emptyResponse: Response = {
  total_count: 0,
  incomplete_results: true,
  items: [],
};

export const meta: MetaFunction = () => {
  return [
    { title: "Github Profile" },
    { name: "description", content: "GitHub Profile" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  if (!q) return { users: emptyResponse, q };
  const users: Response = await searchUser<Response>(q);
  return { users, q };
};

export default function Index() {
  const { users, q } = useLoaderData<typeof loader>();
  return (
    <>
      <header className="relative">
        <picture>
          <source
            media="(max-width: 412px)"
            srcSet="hero-image-github-profile-sm.jpg"
          />
          <source
            media="((min-width: 800px) and (max-width: 640px))"
            srcSet="hero-image-github-profile.jpg"
          />
          <source
            media="(min-width: 641px)"
            srcSet="hero-image-github-profile-lg.jpg"
          />
          <img
            src="/hero-image-github-profile.jpg"
            alt="Galaxy"
            className="min-h-[12rem] object-cover"
          />
        </picture>
        <SearchBox />
        <UserList foundUsers={users.items} q={q} />
      </header>
      <main></main>
    </>
  );
}
