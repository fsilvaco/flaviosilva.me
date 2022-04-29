import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ params }) => {
  return {};
};

export default function () {
  return <h1>hello</h1>;
}
