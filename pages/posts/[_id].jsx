import Link from "next/link";
import { useRouter } from "next/router";
import { space } from "postcss/lib/list";
import { useEffect, useState } from "react";

export default function DetailedPost(props) {
  const router = useRouter();
  let id = router.query._id;

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3002/posts/search/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      })
      .catch((error) => {
        console.log("Error fetching post:", error);
      });
  }, [id]);
  return (
    <section>
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
      <div className="p-8 w-full flex flex-row bg-[rgb(245_245_245)] min-h-screen">
        <aside className="w-1/12 p-10">Reactions</aside>
        <section className="space-y-2 flex flex-col w-2/3 p-3 rounded-3xl bg-white shadow-xl">
          <img
            src="https://picsum.photos/600/250"
            alt={post?.data?.at(0)?.title}
            className=""
          />
          <div className="flex w-1/2 p-8">
            <img
              src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
              alt="profile picture"
              className="size-10 rounded-full"
            />
            <div>
              <p className="text-xs place-self-end">
                Posted on {post?.data?.at(0)?.createdAt}
              </p>
              <p className="text-xs place-self-center">
                {post?.data?.at(0)?.user}
              </p>
            </div>
          </div>
          <div className="w-full p-6">
            <p className="text-6xl font-extrabold">
              {post?.data?.at(0)?.title}
            </p>
            <div className="w-3/4 space-y-10">
              <p className="text-xl justify-evenly">
                {post?.data?.at(0)?.message}
              </p>
            </div>
          </div>
          <div>
            <p className="p-2">Comments</p>
          </div>
        </section>
        <aside className="3/12 p-10">User information</aside>
      </div>
    </section>
  );
}
