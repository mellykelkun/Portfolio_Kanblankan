"use client";

import { usePathname } from "next/navigation";

export default function TransitionPage({ children }) {
  const chemin = usePathname();

  return (
    <div key={chemin} className="transition-page">
      {children}
    </div>
  );
}
