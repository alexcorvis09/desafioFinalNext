import Link from "next/link";
import Image from "next/image";

export default function login() {
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
          <form action="/users/sign_in">
            <div>
              <input
                type="email"
                className="border-2 border-zinc-200 rounded-lg"
              />
            </div>
            <div>
              <input
                type="password"
                className="border-2 border-zinc-200 rounded-lg"
              />
            </div>
            <div>
              <input type="checkbox" />
              Remember me
            </div>
            <Link href="/">Forgot password?</Link>
            <button type="submit">Log in</button>
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
