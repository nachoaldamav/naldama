import type { NextPage } from "next";
import Head from "next/head";
import { Button, Input } from "ui";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Button
          styleType="success"
          className="transition duration-500 ease-in-out"
          onClick={() => alert("Hello!")}
        >
          Hello World!
        </Button>
        <Input
          type="text"
          placeholder="Type something..."
          className="border-2 border-blue-700 mt-2"
        />
      </main>
    </div>
  );
};

export default Home;
