import { useMemo } from "react";

// Signature visual: a generated node-network suggesting cloud/edge topology.
// Nodes connect to their nearest neighbors; a subset "pulse" like data packets.
export default function NetworkBackground() {
  const W = 1600;
  const H = 1200;
  const NODE_COUNT = 26;

  const { nodes, edges, flightPathD } = useMemo(() => {
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      lit: Math.random() < 0.35,
      delay: Math.random() * 3,
    }));

    const edges = [];
    const adjacency = nodes.map(() => []); // NEW: track connections so we can walk a route for the plane
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
        adjacency[i].push(j);
        adjacency[j].push(i);
      });
    });

    // NEW: walk a chain of connected nodes so the mini plane has a route to fly along.
    const routeLength = 9;
    const visited = new Set();
    let current = 0;
    const route = [current];
    visited.add(current);
    for (let step = 0; step < routeLength - 1; step++) {
      const next = adjacency[current]?.find((j) => !visited.has(j));
      if (next === undefined) break;
      route.push(next);
      visited.add(next);
      current = next;
    }
    const flightPathD =
      route.length > 1 ? `M ${route.map((i) => `${nodes[i].x},${nodes[i].y}`).join(" L ")}` : null;

    return { nodes, edges, flightPathD };
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

        {/* NEW: tiny dot-sized "plane" flying along a chain of edges, auto-rotating
            to face its direction of travel, looping indefinitely. */}
        {flightPathD && (
          <polygon points="-4,-2.5 4,0 -4,2.5" fill="#4fd1c5" opacity="0.85">
            <animateMotion dur="14s" repeatCount="indefinite" rotate="auto" path={flightPathD} />
          </polygon>
        )}
      </svg>
    </div>
  );
}
