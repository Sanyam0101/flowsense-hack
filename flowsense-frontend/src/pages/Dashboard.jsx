import InsightCard from "../components/InsightCard";
import { useInsights } from "../context/InsightContext";

const Dashboard = () => {
  const { insights, loading } = useInsights();

  const fallback = [
    { title: "Rage Clicks", value: "42", description: "Last 24 hours" },
    { title: "Idle Time Avg", value: "12s", description: "Avg user idle time" },
    { title: "Scroll Drop-off", value: "36%", description: "On pricing page" },
  ];

  const data = insights.length ? insights : fallback;

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {loading && <p>Loading insights...</p>}
      {!loading &&
        data.map((insight, idx) => (
          <InsightCard key={idx} {...insight} />
        ))}
    </div>
  );
};

export default Dashboard;
