import { useRouter } from "next/router";

import Name from "../../components/name";

export default function Person() {
  const router = useRouter();
  const { name } = router.query;

  return <h1>itsa me, {Name(name)}</h1>;
}
