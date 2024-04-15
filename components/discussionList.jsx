import Link from "next/link";

export default function DiscussionPosts(props) {
  return (
    <section className="w-2/3  bg-white p-4 border rounded-lg">
      <Link href={`/`}>
        <h2 className="font-bold text-lg p-2">{props.title}</h2>
      </Link>
    </section>
  );
}
