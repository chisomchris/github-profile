import {
  Form,
  useLoaderData,
  useLocation,
  useSearchParams,
  useSubmit,
} from "@remix-run/react";
import { debounce } from "~/utils/lib";

export const SearchBox = () => {
  const { q }: { q: string } = useLoaderData();
  const submit = useSubmit();
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();

  const search = debounce((form: HTMLFormElement) => {
    if (form.querySelector("input")?.value) {
      submit(form);
    } else {
      setSearchParams({});
    }
  }, 1000);

  return (
    <div className="peer text-white w-[85%] mx-auto max-w-sm absolute top-[calc(1.75rem+2vw)] left-1/2 -translate-x-1/2">
      <Form
        role="search"
        className="relative w-full"
        onChange={(evt) => {
          search(evt.currentTarget);
        }}
        action={location.pathname}
      >
        <label htmlFor="search" className="sr-only">
          Search for Github user via username
        </label>
        <input
          id="search"
          name="q"
          type="search"
          placeholder="username"
          defaultValue={q || ""}
          className="w-full py-2 pr-4 pl-12 bg-[#364153] outline-none rounded-lg"
        />
        <button
          type="submit"
          className="absolute top-1/2 -translate-y-1/2 left-3"
        >
          <img src="/Search.svg" alt="search button" />
        </button>
      </Form>
    </div>
  );
};
