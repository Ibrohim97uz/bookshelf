import Books from "./books";
import Navbar from "./Navbar";

export default function Bookshelf() {
  return (
    <div style={{ padding: "0 10px" }}>
      <Navbar />
      <Books />
    </div>
  );
}
