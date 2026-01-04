import { useEffect, useRef, useState } from "react";

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState("");
  const overrideRef = useRef<string | null>(null);

  useEffect(() => {
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (overrideRef.current) return;

        entries.forEach((entry) => {
          const id = entry.target.id;
          visibilityMap.set(id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let mostVisible = "";

        for (const [id, ratio] of visibilityMap.entries()) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        }

        if (mostVisible) {
          setActiveSection(mostVisible);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    const elements: HTMLElement[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        elements.push(el);
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds]);

  const manuallySetActive = (id: string) => {
    overrideRef.current = id;
    setActiveSection(id);

    setTimeout(() => {
      overrideRef.current = null;
    }, 600);
  };

  return { activeSection, manuallySetActive };
};

export function observeReveal(selector = ".reveal") {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
