import { Link } from "@remix-run/react";
import { BaseUser } from "~/types";

export const UserList = ({
  foundUsers,
  q,
}: {
  q?: string;
  foundUsers: BaseUser[];
}) => {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[85%] mx-auto max-w-sm bg-red-500 top-[calc(1.75rem+2vw+3rem)] max-h-[min(40rem,calc(70vh-1.75rem-2vw))] overflow-y-scroll py-4 px-2 rounded-sm bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 peer-focus-within:block ${!!q ? "block" : "hidden"}`}
    >
      {foundUsers && foundUsers.length > 0 ? (
        <ul className="grid gap-2">
          {foundUsers.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.login}?q=${q}`}>
                <div className="flex items-center justify-between py-1 px-2 bg-[#1D1B48] rounded-md hover:scale-101">
                  <h2>{user.login}</h2>
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    height={24}
                    width={24}
                    className="rounded-full object-cover object-center w-8 h-8"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="px-3">
          {q ? (
            <p>No User match for "{q}", please check spelling.</p>
          ) : (
            <p>Please enter username to search</p>
          )}
        </div>
      )}
    </div>
  );
};
