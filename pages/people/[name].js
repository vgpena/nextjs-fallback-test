import fs from "fs";
import path from "path";

import { useRouter } from "next/router";

import Name from "../../components/name";

export default function Person(props) {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>itsa me, {Name(name)}</h1>
      <p>{props.catchphrase}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const personPath = path.join(
    process.cwd(),
    "data",
    `${context.params.name}.txt`
  );
  const catchphrase = fs.readFileSync(personPath, "utf-8");

  return {
    props: {
      catchphrase,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "mario" } }],
    fallback: false,
  };
}
