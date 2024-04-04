import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="w-full">
        <div className=" flex justify-around items-center h-24 border-2 border-zinc-100">
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
              href="/"
            >
              Create Account
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
}
