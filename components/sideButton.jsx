export default function SideButton(props) {
  return (
    <a href={props.link}>
      <figure>{props.emoji}</figure>
      <p>{props.title}</p>
    </a>
  );
}
