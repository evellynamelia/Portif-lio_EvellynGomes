import { useCallback, useEffect, useRef, useState } from "react";

/* -------------------- tema (claro/escuro) -------------------- */

export type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "eg-portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  // Escuro é o tema padrão da marca, independente da preferência do sistema.
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}

/* -------------------- scroll reveal -------------------- */

/**
 * Revela um elemento com fade + subida na primeira vez que ele entra na
 * viewport. O respeito a prefers-reduced-motion fica a cargo do CSS (.reveal).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* -------------------- scroll listener genérico -------------------- */

/** Retorna `true` assim que window.scrollY ultrapassa `offset`. */
export function useScrolledPast(offset: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return past;
}
