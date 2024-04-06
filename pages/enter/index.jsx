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
    <main>
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
          <h1>Join the DEV Community</h1>
          <p>DEV Community is a community of 1,382,651 amazing developers</p>
        </div>
      </section>
      <section>
        <div>
          <p>Continue with Apple</p>
          <p>Continue with Forem</p>
          <p>Continue with GitHub</p>
          <p>Continue with Twitter</p>
        </div>
        <div>
          <div>OR</div>
          <form action="/users/sign_in" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Username"
                className="border-2 border-zinc-200 rounded-lg"
                name="username"
                required
                onChange={(event) => setUsername(event.target.value)}
                value={username}
              />
            </div>
            <div>
              <input
                type="password"
                className="border-2 border-zinc-200 rounded-lg"
                name="password"
                required
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            <div>
              <input type="checkbox" />
              Remember me
            </div>
            <Link href="/">Forgot password?</Link>
            <button type="submit">Log in</button>
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

// export async function getStaticProps(ctx) {
//   const response = await fetch("http://localhost:3002/users");
//   const data = await response.json();

//   console.log("users");
//   return {
//     props: {
//       username: data.username,
//       password: data.password,
//     },
//     revalidate: 20,
//   };
// }
