export class Accordion {
  private rootEl: HTMLElement;
  private buttonEl: HTMLButtonElement | null;
  private contentEl: HTMLElement | null;
  private isOpen: boolean;

  constructor(domNode: HTMLElement) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector("button[aria-expanded]");
    this.contentEl = null;
    this.isOpen = false;
    const controlsId = this.buttonEl?.getAttribute("aria-controls");
    if (controlsId) {
      const accordionContainer = this.rootEl.closest(".accordion");
      this.contentEl = accordionContainer
        ? accordionContainer.querySelector(`#${controlsId}`)
        : null;

      if (this.contentEl !== null) {
        this.isOpen = this.buttonEl?.getAttribute("aria-expanded") === "true";
        this.buttonEl?.addEventListener("click", this.onButtonClick.bind(this));
      }
    }
  }

  onButtonClick() {
    console.log("button clicked");
    this.toggle(!this.isOpen);
  }

  toggle(open: boolean) {
    if (open === this.isOpen) {
      return;
    }

    this.isOpen = open;

    this.buttonEl?.setAttribute("aria-expanded", `${open}`);

    console.log({ contentEl: this.contentEl });
    if (open) {
      this.contentEl?.removeAttribute("hidden");
    } else {
      this.contentEl?.setAttribute("hidden", "");
    }
    console.log({ open });
    console.log({ isOpen: this.isOpen });
  }

  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}
