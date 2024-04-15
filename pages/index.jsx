import DiscussionPosts from "@/components/discussionList";
import Posts from "@/components/posts";
import { discussionList } from "@/constants/listPostsSide";
import { discussionListLower } from "@/constants/listPostsSide2";
import { lowerEmojis } from "@/constants/lowerSideList";
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
        <div className="bg-white flex justify-around items-center h-24 border-2 border-zinc-300 w-full drop-shadow-md">
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
      <body className=" bg-zinc-100 min-h-fit">
        <div className="flex flex-row justify-center p-2">
          <aside className="h-fit p-6 w-2/12">
            <div className="p-4 bg-white border-1 border-zinc-100 h-fit rounded-lg text-[15px] drop-shadow-lg w-3/5">
              <h2 className="font-bold p-2">
                DEV Community is a community of 1,357,511 amazing developers
              </h2>
              <p>
                We're a place where coders share, stay up-to-date and grow their
                careers.
              </p>
              <div className="grid grid-rows-2 p-4">
                <Link
                  href="/enter/newuser"
                  className="text-blue-600 border-2 border-blue-600 rounded-lg text-center hover:bg-blue-600 hover:text-white"
                >
                  Create Account
                </Link>
                <Link
                  href="/enter"
                  className="border-white hover:bg-blue-600/40 hover:border-3 hover: border-blue-600/40 rounded-lg text-center"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="w-7/12 border-2 border-red-600 text-[15px]">
              <div className="p-4">
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
            <div className="p-4 font-bold">Other</div>
            <div className="p-4 w-7/12 border-2 border-red-600 text-[15px]">
              {lowerEmojis.map((emojiButton, index) => {
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
          </aside>
          <section className="p-3 w-2/6">
            <div className="flex flex-col-reverse gap-2 p-4">
              {posts.map((post, index) => {
                return (
                  <Posts
                    key={`post ${post.title}`}
                    title={post.title}
                    message={post.message}
                    _id={post._id}
                    user={post.user}
                    createdAt={post.createdAt}
                  />
                );
              })}
            </div>
          </section>

          <aside className="flex flex-col w-3/12 p-3 h-fit">
            <div className="flex flex-col">
              <p className="font-bold text-xl p-2">#discussion</p>
              <p className="text-xs p-2">
                Discussion threads targeting the whole community
              </p>
              {discussionList.map((element, index) => {
                return (
                  <DiscussionPosts
                    key={`discussion ${element.title}`}
                    title={element.title}
                    isNew={element.isNew}
                  />
                );
              })}
            </div>
            <div>
              <p className="font-bold text-xl p-2">#watercooler</p>
              <p className="text-xs p-2">Light, and off-topic conversation.</p>
              {discussionListLower.map((element, index) => {
                return (
                  <DiscussionPosts
                    key={`discussion ${element.title}`}
                    title={element.title}
                    isNew={element.isNew}
                  />
                );
              })}
            </div>
          </aside>
        </div>
      </body>
    </main>
  );
}
