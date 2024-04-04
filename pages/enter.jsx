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
              <input type="email" />
            </div>
            <div>
              <input type="password" />
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
