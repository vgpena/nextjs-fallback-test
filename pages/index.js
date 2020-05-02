import fs from "fs";
import path from "path";

import Head from "next/head";
import Link from "next/link";
import Name from "../components/name";

export default function Home({ names }) {
  return (
    <div>
      <h1>itsa us!</h1>
      {NamesList(names)}
    </div>
  );
}

function NamesList(names) {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>
          <Link href="/people/[name]" as={`/people/${name}`}>
            <a href="/people/[name]">{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const namesPath = path.join(process.cwd(), "data", "names.json");
  const namesData = JSON.parse(fs.readFileSync(namesPath, "utf-8"));

  return {
    props: {
      names: namesData.names,
    },
  };
}
