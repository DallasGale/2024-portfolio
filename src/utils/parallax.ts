export const getRelativeScroll = (element: Element): number => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Calculate how far the element is through the viewport
  // This will be negative when element is above viewport,
  // between 0-1 while in viewport,
  // and > 1 when below viewport

  return (windowHeight - rect.top) / (windowHeight + rect.height);
};

export const parallax = (
  selector: string,
  speed: number,
  container: Element,
) => {
  const element = container.querySelector(selector);
  if (!element) return;

  const scrollProgress = getRelativeScroll(container);

  // Only apply parallax when element is in or near viewport
  if (scrollProgress >= -0.5 && scrollProgress <= 1.5) {
    // Calculate transform based on container's position
    // Normalize to start at 0 when container enters viewport
    const move = scrollProgress * 100 * speed;
    (element as HTMLElement).style.transform = `translateY(${move}px)`;
  }
};
