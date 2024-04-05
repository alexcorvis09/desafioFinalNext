export default function Posts(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </div>
    </section>
  );
}
