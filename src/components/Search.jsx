import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export default function Search() {
  const [fuse, setFuse] = useState(null);
  const [q, setQ] = useState("");
  const [hits, setHits] = useState([]);

  useEffect(() => {
    fetch("/searchIndex.json")
      .then(r => r.json())
      .then(data =>
        setFuse(new Fuse(data, {
          keys: ["title", "body", "tags"],
          includeScore: true,
          threshold: 0.3
        }))
      );
  }, []);

  useEffect(() => {
    if (!fuse) return;
    setHits(q ? fuse.search(q).slice(0, 10).map(r => r.item) : []);
  }, [q, fuse]);

  return (
    <div className="my-4">
      <input
        className="border rounded p-2 w-full"
        placeholder="Search notes…"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      {hits.length > 0 && (
        <ul className="mt-2 space-y-1">
          {hits.map(h => (
            <li key={h.path}>
              <a className="text-blue-600 hover:underline" href={h.path}>{h.title}</a>
              {h.tags.map(t => (
                <span key={t} className="ml-2 text-xs bg-gray-200 px-1 rounded">{t}</span>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}