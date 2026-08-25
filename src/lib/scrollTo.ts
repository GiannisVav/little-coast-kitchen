/**
 * Smoothly scrolls to the target element ID with sticky navbar offset compensation.
 */
export function smoothScrollTo(targetId: string, offset: number = 80) {
  const cleanId = targetId.startsWith("#") ? targetId.slice(1) : targetId;
  const element = document.getElementById(cleanId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
