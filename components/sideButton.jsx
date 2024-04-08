import Link from "next/link";

export default function SideButton(props) {
  return (
    <Link href={props.link}>
      <figure>{props.emoji}</figure>
      <p>{props.title}</p>
    </Link>
  );
}
