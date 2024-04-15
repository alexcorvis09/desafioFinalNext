import Link from "next/link";

export default function Posts(props) {
  return (
    <section className="rounded-lg bg-white p-10 drop-shadow-lg flex flex-col space-y-2">
      <Link href={`/posts/${props._id}`} className="flex self-center">
        <img src="https://picsum.photos/750/350" alt={props.title} />
      </Link>
      <div className="flex">
        <img
          src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"
          alt="profile picture"
          className="size-8 rounded-full"
        />
        <p className="text-xs place-self-center">{props.user}</p>
      </div>
      <p className="text-xs">{props.createdAt}</p>
      <Link href={`/posts/${props._id}`}>
        <h2 className="font-bold text-xl">{props.title}</h2>
      </Link>
    </section>
  );
}
