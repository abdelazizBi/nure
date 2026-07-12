"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export function FadeReveal({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`fade-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

export function StaggerReveal({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`stagger-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;

        const element = child as ReactElement<{
          className?: string;
          style?: CSSProperties;
        }>;

        return cloneElement(element, {
          className: `stagger-item ${element.props.className ?? ""}`,
          style: {
            "--stagger-index": index,
            ...element.props.style,
          } as CSSProperties,
        });
      })}
    </div>
  );
}

export function FloatingParticleField({
  dense = false,
  amber = false,
  className = "",
}: {
  dense?: boolean;
  amber?: boolean;
  className?: string;
}) {
  const particles = dense
    ? [
        ["7%", "18%", "8px", "14s", "-2s"],
        ["18%", "74%", "5px", "18s", "-9s"],
        ["30%", "32%", "10px", "15s", "-4s"],
        ["43%", "82%", "6px", "17s", "-11s"],
        ["58%", "17%", "7px", "16s", "-7s"],
        ["72%", "58%", "11px", "19s", "-13s"],
        ["85%", "29%", "5px", "15s", "-6s"],
        ["94%", "78%", "8px", "18s", "-3s"],
      ]
    : [
        ["12%", "22%", "8px", "15s", "-2s"],
        ["27%", "68%", "5px", "17s", "-7s"],
        ["48%", "18%", "7px", "18s", "-10s"],
        ["68%", "36%", "9px", "16s", "-4s"],
        ["78%", "72%", "6px", "20s", "-12s"],
        ["91%", "29%", "4px", "15s", "-8s"],
      ];

  return (
    <div
      className={`floating-particle-field ${amber ? "is-amber" : ""} ${className}`}
      aria-hidden="true"
    >
      {particles.map(([x, y, size, speed, delay]) => (
        <span
          key={`${x}-${y}-${size}`}
          style={
            {
              "--x": x,
              "--y": y,
              "--size": size,
              "--speed": speed,
              "--delay": delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function ShimmerLayer({ className = "" }: { className?: string }) {
  return <span className={`shimmer-layer ${className}`} aria-hidden="true" />;
}

export function SprayMist({
  active = false,
  className = "",
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`spray-mist ${active ? "is-active" : ""} ${className}`}
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export function HeroExperience({ children }: { children: ReactNode }) {
  const [spraying, setSpraying] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const triggerSpray = () => {
    setSpraying(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setSpraying(false), 1500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section
      className={`hero-experience relative min-h-screen overflow-hidden pt-24 ${spraying ? "is-spraying" : ""}`}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        event.currentTarget.style.setProperty("--cursor-x", `${x * 100}%`);
        event.currentTarget.style.setProperty("--cursor-y", `${y * 100}%`);
        event.currentTarget.style.setProperty("--parallax-x", `${(x - 0.5) * 2}`);
        event.currentTarget.style.setProperty("--parallax-y", `${(y - 0.5) * 2}`);
      }}
      onPointerOver={(event) => {
        if ((event.target as HTMLElement).closest("[data-spray-trigger]")) {
          triggerSpray();
        }
      }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("[data-spray-trigger]")) {
          triggerSpray();
        }
      }}
    >
      <div className="hero-cursor-mist" aria-hidden="true" />
      <SprayMist active={spraying} className="hero-spray-reveal" />
      {children}
    </section>
  );
}

export function ProductTiltCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <article
      ref={ref}
      className={`premium-product-card group relative overflow-hidden rounded-lg border border-white/62 bg-white/34 p-4 shadow-pearl backdrop-blur-sm transition duration-700 ${className}`}
      style={style}
      onPointerMove={(event) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        node.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
        node.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
        node.style.setProperty("--card-glow-x", `${x * 100}%`);
        node.style.setProperty("--card-glow-y", `${y * 100}%`);
      }}
      onPointerLeave={() => {
        const node = ref.current;
        if (!node) return;
        node.style.setProperty("--tilt-x", "0deg");
        node.style.setProperty("--tilt-y", "0deg");
        node.style.setProperty("--card-glow-x", "50%");
        node.style.setProperty("--card-glow-y", "35%");
      }}
    >
      {children}
    </article>
  );
}

export function ScentUniverseStage({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState("rgba(200, 169, 106, 0.42)");
  const [name, setName] = useState("NŪRÉ");

  return (
    <div
      className="scent-universe-stage"
      style={{ "--scent-active": accent } as CSSProperties}
      onPointerLeave={() => {
        setAccent("rgba(200, 169, 106, 0.42)");
        setName("NŪRÉ");
      }}
      onPointerMove={(event) => {
        const card = (event.target as HTMLElement).closest<HTMLElement>("[data-scent-accent]");
        if (!card) return;
        setAccent(card.dataset.scentAccent ?? "rgba(200, 169, 106, 0.42)");
        setName(card.dataset.scentName ?? "NŪRÉ");
      }}
    >
      <div className="scent-aura" aria-hidden="true">
        <span>{name}</span>
      </div>
      {children}
    </div>
  );
}
