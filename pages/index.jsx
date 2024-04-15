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
      <body className=" bg-zinc-100 min-h-fit">
        <div className="grid grid-cols-3 p-2">
          <aside className="w-3/5 h-fit p-3">
            <div className="p-4 bg-white border-1 border-zinc-100 h-fit rounded-lg text-[15px]">
              <h2 className="font-bold gap-40">
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
            <div className="">
              <div className="p-2">
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
            <div className="p-1">
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
          <div className="flex flex-col-reverse gap-2 w-1/3 p-4">
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
          <aside className="flex flex-col w-3/5 border-2 border-red-600 ">
            <div>
              <p className="font-bold text-xl">#discussion</p>
              <p className="text-xs">
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
              <p className="font-bold text-xl">#watercooler</p>
              <p className="text-xs">Light, and off-topic conversation.</p>
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
