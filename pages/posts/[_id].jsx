import Link from "next/link";
import { useRouter } from "next/router";
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
        console.log(json);
      })
      .catch((error) => {
        console.log("Error fetching post:", error);
      });
  }, [id]);
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
      <div className="p-36 w-2/3 bg-white rounded-xl place-self-center">
        <section className="items-center">
          <p className="text-xs">{post?.data?.at(0)?.user}</p>
          <p className="text-xs">Posted on {post?.data?.at(0)?.createdAt}</p>
          <p className="text-6xl font-bold">{post?.data?.at(0)?.title}</p>
          <p className="text-xl justify-evenly">{post?.data?.at(0)?.message}</p>
        </section>
      </div>
    </main>
  );
}
