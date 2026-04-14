export const scrollHero = (
  e: React.MouseEvent,
  isAnchor: boolean,
  href?: string
) => {
  if (isAnchor && href) {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
  }
};