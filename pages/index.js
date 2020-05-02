import Head from "next/head";
import Name from "../components/name";

export default function Home() {
  return <h1>itsa me, {Name("mario")} </h1>;
}
