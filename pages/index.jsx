import Posts from "@/components/posts";
import { emojiButtons } from "@/constants/sideList";
import SideButton from "@/sideButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);
  return (
    <main>
      <header>
        <div className="bg-white flex justify-around items-center h-24 border-2 border-zinc-300 w-full">
          <Link href="/">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DEV Community"
              className="size-16"
            />
          </Link>
          <div>
            <input
              className="p-2 w-80 border-2 border-gray-300 rounded-lg"
              type="text"
              placeholder="Search..."
            />
            <button>🔍</button>
          </div>
          <div className="flex row-end-2 justify-between items-center">
            <Link
              className="p-3 border-2 border-white hover:bg-blue-600/40 hover:border-2 hover: border-blue-600/40 rounded-lg place-content-center"
              href="/enter"
            >
              Log In
            </Link>
            <Link
              className="p-3 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              href="/enter/newuser"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>
      <body className=" bg-zinc-100 min-h-fit w-full">
        <div className="grid grid-cols-3 justify-between p-12">
          <aside className="w-[240px] h-[10469px]">
            <div className="p-4 bg-white border-1 border-zinc-100 h-fit rounded-lg text-[15px]">
              <h2 className="font-bold gap-40">
                DEV Community is a community of 1,357,511 amazing developers
              </h2>
              <p>
                Were a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <div className="grid grid-rows-2 p-4">
                <button className="text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                  Create Account
                </button>
                <button className="border-white hover:bg-blue-600/40 hover:border-3 hover: border-blue-600/40 rounded-lg place-content-center">
                  Login
                </button>
              </div>
            </div>
            <div className="">
              <div className="">
                {emojiButtons.map((emojiButton, index) => {
                  return (
                    <SideButton
                      key={`emojiButton-${index}`}
                      emoji={emojiButton.emoji}
                      title={emojiButton.title}
                      link={emojiButton.link}
                    />
                  );
                })}
              </div>
            </div>
            <div className="p-2 font-bold">Other</div>
          </aside>
          <div className="flex justify-center">
            <section>
              {posts.map((post, index) => {
                return (
                  <Posts
                    key={`post ${post.title}`}
                    title={post.title}
                    message={post.message}
                    _id={post._id}
                  />
                );
              })}
            </section>
          </div>
          <div className="flex justify-center">Sidebar2</div>
        </div>
      </body>
    </main>
  );
}
