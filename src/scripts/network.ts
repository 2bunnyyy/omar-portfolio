// Animated network topology: drifting nodes, links by proximity, and packets
// travelling between them. The pointer acts as an extra node.

type Node = { x: number; y: number; vx: number; vy: number; r: number; label?: string };
type Packet = { a: Node; b: Node; t: number; speed: number; hot: boolean };

const LABELS = ['ODOO', 'LLM', 'FW', 'SRV', 'SAFEAI', 'VPN', 'DNS', 'OCR', 'SQL', 'API'];
const LINK = 130 * 130;

export function startNetwork(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let w = 0, h = 0, dpr = 1;
  let nodes: Node[] = [];
  const packets: Packet[] = [];
  const pointer: Node = { x: -999, y: -999, vx: 0, vy: 0, r: 3 };
  let running = true;

  // Colors come from the active theme's CSS variables
  let SIGNAL = '', AMBER = '', NODE = '', LABEL = '';
  function readColors() {
    const css = getComputedStyle(document.documentElement);
    const v = (name: string) => css.getPropertyValue(name).trim();
    SIGNAL = v('--signal-rgb');
    AMBER = v('--amber-rgb');
    NODE = v('--node-rgb');
    LABEL = v('--label-rgb');
  }
  readColors();

  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(90, Math.max(28, (w * h) / 16000)));
    nodes = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: i < LABELS.length ? 2.6 : 1.4,
      label: LABELS[i],
    }));
    packets.length = 0;
  }

  function spawnPacket() {
    const a = nodes[(Math.random() * nodes.length) | 0];
    let best: Node | null = null;
    let bestD = LINK;
    for (const n of nodes) {
      if (n === a) continue;
      const d = (n.x - a.x) ** 2 + (n.y - a.y) ** 2;
      if (d < bestD && Math.random() > 0.4) { best = n; bestD = d; }
    }
    if (best) packets.push({ a, b: best, t: 0, speed: 0.008 + Math.random() * 0.014, hot: Math.random() < 0.12 });
  }

  function frame() {
    if (!running) return;
    ctx!.clearRect(0, 0, w, h);
    const all = pointer.x > 0 ? [...nodes, pointer] : nodes;

    for (const n of nodes) {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    // Links
    for (let i = 0; i < all.length; i++) {
      for (let j = i + 1; j < all.length; j++) {
        const a = all[i], b = all[j];
        const d = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
        if (d > LINK) continue;
        const near = a === pointer || b === pointer;
        const alpha = (1 - d / LINK) * (near ? 0.55 : 0.18);
        ctx!.strokeStyle = `rgba(${SIGNAL}, ${alpha})`;
        ctx!.lineWidth = near ? 1 : 0.6;
        ctx!.beginPath(); ctx!.moveTo(a.x, a.y); ctx!.lineTo(b.x, b.y); ctx!.stroke();
      }
    }

    // Nodes + labels
    ctx!.font = '10px "IBM Plex Mono", monospace';
    for (const n of nodes) {
      ctx!.fillStyle = n.label ? `rgba(${SIGNAL}, 0.95)` : `rgba(${NODE}, 0.55)`;
      ctx!.beginPath(); ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx!.fill();
      if (n.label) {
        ctx!.fillStyle = `rgba(${LABEL}, 0.6)`;
        ctx!.fillText(n.label, n.x + 7, n.y - 6);
      }
    }

    // Packets
    if (packets.length < 26 && Math.random() < 0.18) spawnPacket();
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      p.t += p.speed;
      if (p.t >= 1) { packets.splice(i, 1); continue; }
      const x = p.a.x + (p.b.x - p.a.x) * p.t;
      const y = p.a.y + (p.b.y - p.a.y) * p.t;
      const c = p.hot ? AMBER : SIGNAL;
      ctx!.fillStyle = `rgba(${c}, 0.18)`;
      ctx!.beginPath(); ctx!.arc(x, y, 6, 0, Math.PI * 2); ctx!.fill();
      ctx!.fillStyle = `rgb(${c})`;
      ctx!.beginPath(); ctx!.arc(x, y, 1.8, 0, Math.PI * 2); ctx!.fill();
    }

    requestAnimationFrame(frame);
  }

  resize();
  addEventListener('resize', resize);
  addEventListener('themechange', () => {
    readColors();
    // Paused (off-screen or reduced motion): redraw a single frame
    if (!running) { running = true; frame(); running = false; }
  });
  canvas.parentElement?.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX - r.left;
    pointer.y = e.clientY - r.top;
  });
  canvas.parentElement?.addEventListener('pointerleave', () => { pointer.x = -999; });

  if (reduced) {
    running = true;
    frame();
    running = false;
    return;
  }

  // Pause the loop while the hero is off-screen
  new IntersectionObserver(([e]) => {
    const was = running;
    running = e.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(canvas);
  requestAnimationFrame(frame);
}
