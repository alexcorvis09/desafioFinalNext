import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewUser() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: first_name,
        username: username,
        email: email,
        password: password,
        last_name: last_name,
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
    <div>
      <section>
        <Link href="/">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt="Dev logo"
            width={60}
            height={48}
          />
        </Link>
        <h1>Join the DEV Community</h1>
        <p>DEV Community is a community of 1,382,651 amazing developers</p>
        <form action="/" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="last_name" className="flex justify-start gap-1">
              <p>Name</p>
              <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              className="border-2 border-zinc-300 rounded-lg"
              required
              onChange={(event) => setFirstName(event.target.value)}
              value={first_name}
            />
          </div>
          <div>
            <p>Last Name</p>
            <input
              type="text"
              name="last_name"
              className="border-2 border-zinc-300 rounded-lg"
              required
              onChange={(event) => setLast_Name(event.target.value)}
              value={last_name}
            />
          </div>
          <div>
            <label htmlFor="username" className="flex justify-start gap-1">
              <p>Username</p>
              <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="username"
              className="border-2 border-zinc-300 rounded-lg"
              required
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="email" className="flex justify-start gap-1">
              <p>Email</p>
              <span className=" text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-zinc-300 rounded-lg"
              required
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="flex justify-start gap-1">
              <p>Password</p>
              <span className=" text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="border-2 border-zinc-300 rounded-lg"
              required
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="space-y-4">
            <button
              type="submit"
              className="p-2 text-white font-semibold border-2 border-blue-600 rounded-lg bg-blue-600 hover:text-white"
            >
              Sign up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
