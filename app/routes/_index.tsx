import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Github Profile" },
    { name: "description", content: "GitHub Profile" },
  ];
};

export default function Index() {
  return <></>;
}
