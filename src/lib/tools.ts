
export const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return; // jaga2 biar ga error di SSR
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

}
