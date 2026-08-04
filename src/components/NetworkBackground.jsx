import { useMemo } from "react";

// Signature visual: a generated node-network suggesting cloud/edge topology.
// Nodes connect to their nearest neighbors; a subset "pulse" like data packets.
export default function NetworkBackground() {
  const W = 1600;
  const H = 1200;
  const NODE_COUNT = 26;

  const { nodes, edges } = useMemo(() => {
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      lit: Math.random() < 0.35,
      delay: Math.random() * 3,
    }));

    const edges = [];
    nodes.forEach((n, i) => {
      const nearest = nodes
        .map((m, j) => ({ j, d: (m.x - n.x) ** 2 + (m.y - n.y) ** 2 }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      nearest.forEach(({ j }) => {
        const key = [i, j].sort().join("-");
        if (!edges.find((e) => e.key === key)) {
          edges.push({ key, a: nodes[i], b: nodes[j] });
        }
      });
    });

    return { nodes, edges };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,209,197,0.10), transparent 60%), #0b1220",
        }}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {edges.map((e, i) => {
          const pulse = i % 5 === 0;
          return (
            <line
              key={e.key}
              x1={e.a.x}
              y1={e.a.y}
              x2={e.b.x}
              y2={e.b.y}
              stroke="#4fd1c5"
              strokeWidth={pulse ? 1.4 : 1}
              strokeOpacity={pulse ? 0.55 : 0.14}
              strokeDasharray={pulse ? "6 220" : undefined}
              style={
                pulse
                  ? {
                      animation: "dash-flow 7s linear infinite",
                      animationDelay: `${(i * 0.7) % 6}s`,
                    }
                  : undefined
              }
            />
          );
        })}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.lit ? 3.4 : 2.2}
            fill="#4fd1c5"
            opacity={n.lit ? 0.9 : 0.35}
            style={
              n.lit
                ? { animation: "node-pulse 3.4s cubic-bezier(0.16,1,0.3,1) infinite", animationDelay: `${n.delay}s` }
                : undefined
            }
          />
        ))}
      </svg>
    </div>
  );
}
