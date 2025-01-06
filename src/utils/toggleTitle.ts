export class ToggleTitle {
  private target: HTMLElement;
  private title: HTMLElement;

  constructor(
    private parentId: string = "projects",
    private titleId: string = "projects-title",
  ) {
    const parentElement = document.getElementById(parentId);
    const titleElement = document.getElementById(titleId);

    if (!parentElement) {
      throw new Error(`Parent element with id ${parentId} not found`);
    }
    if (!titleElement) {
      throw new Error(`Title element with id ${titleId} not found`);
    }

    this.target = parentElement as HTMLElement;
    this.title = titleElement as HTMLElement;

    this.initializeObserver();
  }

  private initializeObserver(): void {
    const options = {
      root: null, // changing to null to observe relative to viewport
      rootMargin: "-35%", // adding some margin to help catch the intersection
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // multiple thresholds to see when it intersects
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Detailed logging of the intersection
        console.log("Intersection details:", {
          isIntersecting: entry.isIntersecting,
          ratio: entry.intersectionRatio,
          rect: {
            top: entry.boundingClientRect.top,
            bottom: entry.boundingClientRect.bottom,
            height: entry.boundingClientRect.height,
          },
          rootBounds: entry.rootBounds,
          time: new Date().toISOString(),
        });

        if (entry.isIntersecting) {
          console.log("Section became visible");
          this.title.classList.add("visible");
        } else {
          console.log("Section became hidden");
          this.title.classList.remove("visible");
        }
      });
    }, options);

    observer.observe(this.target);
  }
}
