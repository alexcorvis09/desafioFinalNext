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
    <main className="items-center min-w-full place-items-center max-h-fit space-y-2 bg[rgb(255_255,_255)]">
      <section className="flex justify-center">
        <div className="p-4">
          <Link href="/" className="flex justify-center">
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
              alt="Dev logo"
              width={60}
              height={48}
            />
          </Link>
          <section className="grid grid-rows-2 text-center p-2">
            <h1 className="text-2xl font-bold">Join the DEV Community</h1>
            <p className="text-lg">
              DEV Community is a community of 1,382,651 amazing developers
            </p>
          </section>
        </div>
      </section>
      <section className="grid grid-rows-4 place-items-center">
        <div className=" grid grid-rows-4 justify-items-center w-2/3 min-h-fit p-2 space-y-2">
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
        <div className=" justify-items-center p-5 text-center w-2/3">
          <div className="self-center w-full">--------- OR --------</div>
          <form
            className="place-items-center space-y-5"
            action="/users/sign_in"
            onSubmit={handleSubmit}
          >
            <div className="">
              <label htmlFor="username" className="flex justify-center gap-1">
                <p className="font-semibold">Username</p>
                <span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                className="border-2 border-zinc-200 rounded-lg w-1/2"
                name="username"
                required
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <div className="">
              <label htmlFor="password" className="flex justify-center gap-1">
                <p className="font-semibold">Password</p>
                <span className=" text-red-600">*</span>
              </label>
              <input
                type="password"
                className="border-2 border-zinc-200 rounded-lg w-1/2"
                name="password"
                required
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            {
              <p className={clsx({ hidden: !error }, "text-red-600")}>
                {error}
              </p>
            }
            <div className="flex justify-center gap-3">
              <input type="checkbox" /> Remember me
              <Link href="/">Forgot password?</Link>
            </div>
            <button
              type="submit"
              className="text-white border-2 border-blue-600 bg-blue-600 rounded-lg text-center w-2/12"
            >
              Log in
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
