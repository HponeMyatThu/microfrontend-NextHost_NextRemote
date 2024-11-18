export default function Button({
  title,
  extraValue,
}: {
  title: string;
  extraValue: {
    name: string;
    passwords: string;
  };
}) {
  console.log("give value from 3000 and log value from 3001", extraValue);

  return (
    <button
      style={{ padding: "10px", backgroundColor: "blue", color: "white" }}
      onClick={() => console.log("onclick", extraValue)}
    >
      {title ?? "Click Me"}
    </button>
  );
}
