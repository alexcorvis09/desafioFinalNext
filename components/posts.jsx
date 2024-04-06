import Link from "next/link";

export default function Posts(props) {
  return (
    <section>
      <Link href={`/posts/${props._id}`}>
        <h2>{props.title}</h2>
      </Link>

      <div>
        <p>{props.message}</p>
      </div>
    </section>
  );
}
