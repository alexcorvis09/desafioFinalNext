import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:3002/users/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 120,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.token) {
          localStorage.setItem("token:", json.token);
          setUsername("");
          setPassword("");
          router.replace("/");
        }
        setError("Username or password invalid");
      })
      .catch((error) => {
        console.log("Login error:", error);
      });
  }
  return (
    <main className="items-center w-8/12">
      <section>
        <div>
          <Link href="/">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
              alt="Dev logo"
              width={60}
              height={48}
            />
          </Link>
          <h1 className="text-2xl font-bold">Join the DEV Community</h1>
          <p className="text-lg">
            DEV Community is a community of 1,382,651 amazing developers
          </p>
        </div>
      </section>
      <section>
        <div className="gap-96">
          <div className="p-4 border-2 border-zinc-300 rounded-xl text-center w-2/3">
            <Link href="/">Continue with Apple</Link>
          </div>
          <div className="p-4 border-2 border-zinc-300 rounded-xl text-center w-2/3">
            <Link href="/">Continue with Forem</Link>
          </div>
          <div className="p-4 border-2 border-zinc-300 rounded-xl text-center w-2/3">
            <Link href="/">Continue with Github</Link>
          </div>
          <div className="p-4 border-2 border-zinc-300 rounded-xl text-center w-2/3">
            <Link href="/">Continue with X</Link>
          </div>
        </div>
        <div className=" items-center">
          <div className="text-center w-2/3">OR</div>
          <form action="/users/sign_in" onSubmit={handleSubmit}>
            <div>
              <p className="font-semibold">Username</p>
              <input
                type="text"
                className="border-2 border-zinc-200 rounded-lg w-2/3"
                name="username"
                required
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <div>
              <p className="font-semibold">Password</p>
              <input
                type="password"
                className="border-2 border-zinc-200 rounded-lg w-2/3"
                name="password"
                required
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div className="">
              <input type="checkbox" /> Remember me
              <Link href="/">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="text-white border-2 border-blue-600 bg-blue-600 rounded-lg text-center w-2/3"
            >
              Log in
            </button>
            {
              <p
                className={
                  (clsx({ hidden: !error }, "text-pink-800"), { error })
                }
              ></p>
            }
          </form>
        </div>
      </section>
    </main>
  );
}
