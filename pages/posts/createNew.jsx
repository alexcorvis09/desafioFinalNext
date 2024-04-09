import { useRouter } from "next/router";
import { useState } from "react";

export default function NewPost() {
  const [user, setUser] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user,
        title: title,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        router.replace("/");
      })
      .catch((error) => {
        console.log("There was an error:", error);
      });
  }

  return (
    <section>
      <form action="/" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            placeholder="New post title here..."
            required
            className="w-96 h-24 text-2xl"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>
        <div>
          <input
            type="text"
            name="user"
            placeholder="Username..."
            required
            onChange={(event) => setUser(event.target.value)}
            value={user}
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            placeholder="Write your post content here..."
            required
            className="h-72 w-1/2 text-2xl font-semibold "
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
        </div>
        <button
          type="submit"
          className="p-2 text-white font-semibold border-2 border-blue-600 rounded-lg bg-blue-600 hover:text-white"
        >
          Publish
        </button>
      </form>
    </section>
  );
}
