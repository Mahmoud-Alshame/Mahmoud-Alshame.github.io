import "./Tags.css";
import { toList } from "../../utils/helpers";

export default function Tags({ list }) {
  return (
    <div className="tags">
      {toList(list).map((x) => <span className="tag" key={x}>{x}</span>)}
    </div>
  );
}