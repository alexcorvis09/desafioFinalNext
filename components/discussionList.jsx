import Link from "next/link";

export default function DiscussionPosts(props) {
  return (
    <section className="w-fit rounded-lg bg-white p-8">
      <Link href={`/`}>
        <h2 className="font-bold text-xl p-2">{props.title}</h2>
      </Link>
    </section>
  );
}
