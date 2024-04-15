import Link from "next/link";

export default function Posts(props) {
  return (
    <section className="w-[450px] rounded-lg bg-white p-8">
      <Link href={`/posts/${props._id}`}>
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
