import Link from "next/link";

export default function SideButton(props) {
  return (
    <Link href={props.link} className="border-4">
      <a className="bg-red-700"></a>
      <figure className="">{props.emoji}</figure>
      <p className="">{props.title}</p>
    </Link>
  );
}
