import Link from "next/link";

export default function Posts(props) {
  return (
    <section className="rounded-lg bg-white p-10 drop-shadow-lg flex flex-col">
      <Link href={`/posts/${props._id}`} className="flex self-center">
        <img src="https://picsum.photos/750/350" alt={props.title} />
      </Link>
      <p className="text-xs">{props.user}</p>
      <p className="text-xs">{props.createdAt}</p>
      <Link href={`/posts/${props._id}`}>
        <h2 className="font-bold text-xl p-2">{props.title}</h2>
      </Link>
    </section>
  );
}
