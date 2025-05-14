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
      className={`absolute z-10 text-white left-1/2 -translate-x-1/2 w-[85%] mx-auto max-w-sm top-[calc(1.75rem+2vw+3rem)] max-h-[min(50rem,calc(85vh-1.75rem-2vw))] overflow-y-scroll rounded-sm  peer-focus-within:block ${!!q ? "block" : "hidden"}`}
    >
      {foundUsers && foundUsers.length > 0 && (
        <ul className="grid gap-2">
          {foundUsers.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.login}`}>
                <div className="flex items-center gap-4 p-2 bg-[#1D1B48] rounded-md hover:scale-101">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    height={24}
                    width={24}
                    className="rounded-lg object-cover object-center w-16 h-16"
                  />
                  <div>
                    <h2 className="">{user.login}</h2>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
