import {Inter} from "next/font/google";

import {add} from "../lib/lib";

const inter = Inter({subsets: ["latin"]});

type Props = {
  sum: number;
};

interface Data {
  sum: number;
}

export async function getServerSideProps() {
  let sum = add(1, 2);
  return {
    props: {sum: sum},
  };
}

export default function Home({sum}: Data) {
  return <>1 + 2 = {sum}</>;
}
