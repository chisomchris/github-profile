import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "./tailwind.css";
import { SearchBox } from "./components/SearchBox";
import { UserList } from "./components/UserList";
import { searchUser } from "./fetchers/user";
import { Response } from "./types";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const emptyResponse: Response = {
  total_count: 0,
  incomplete_results: true,
  items: [],
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  if (!q) return { users: emptyResponse, q };
  const users: Response = await searchUser<Response>(q);
  return { users: emptyResponse, q };
  return { users, q };
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { users, q } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#364153] min-h-screen">
        <header className="relative">
          <picture>
            <source
              media="(max-width: 412px)"
              srcSet="/hero-image-github-profile-sm.jpg"
            />
            <source
              media="((min-width: 413px) and (max-width: 640px))"
              srcSet="/hero-image-github-profile.jpg"
            />
            <source
              media="(min-width: 641px)"
              srcSet="/hero-image-github-profile-lg.jpg"
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
        <main className="relative w-[85%] mx-auto">{children}</main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>Opps!!!</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}
