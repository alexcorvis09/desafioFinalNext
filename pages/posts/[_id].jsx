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
  //it doesn't return post information, until after commenting post title and refreshing website
  return (
    <main>
      <div>
        <header>
          <h1>{post?.data?.at(0)?.title}</h1>
          <p>{post?.data?.at(0)?.user}</p>
          <p>{post?.data?.at(0)?.message}</p>
        </header>
      </div>
    </main>
  );
}
