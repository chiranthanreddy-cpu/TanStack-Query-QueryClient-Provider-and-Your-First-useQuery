import { useQuery } from "@tanstack/react-query";
import { getThreads } from "../services/threads.service";

export default function ThreadList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  if (isLoading) return <p>Loading threads…</p>;
  if (isError) return <p className="err">Error: {error.message}</p>;

  return (
    <ul className="threads">
      {data.map((t) => (
        <li className="card" key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.body}</p>
        </li>
      ))}
    </ul>
  );
}