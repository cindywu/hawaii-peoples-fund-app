import { nanoid } from "nanoid";

function Page() {
  return "";
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: `/a/${nanoid(6)}`,
      permanent: false,
    },
  };
}

export default Page;

