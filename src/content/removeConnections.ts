async function removeConnections(waitTime: number) {
  function sleep(ms: number) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function findSpanByText(text: string): HTMLSpanElement | null {
    for (const el of document.querySelectorAll("span")) {
      if (el.textContent.includes(text)) {
        return el;
      }
    }
    return null;
  }

  async function highlightAndFocus(el: HTMLElement) {
    if (!el) return;

    el.scrollIntoView({
      behavior: "auto",
      block: "center",
    });

    el.style.outline = "auto";
    el.style.background = "brown";

    await sleep(500);
  }

  const checkboxes = Array.from(
    document.querySelectorAll<HTMLInputElement>(".checkbox-toggle:checked"),
  );

  let message: string;
  const removeCount = checkboxes.length;

  if (removeCount === 1) {
    message = "Are you sure you want to remove 1 connection?";
  } else if (removeCount === 0) {
    alert("You must select connections to perform this action!");
    return;
  } else {
    message =
      "Are you sure you want to remove " +
      removeCount.toString() +
      " connections?";
  }

  if (confirm(message)) {
    const threeDotsArray: HTMLButtonElement[] = [];

    for (const cb of checkboxes) {
      const el = cb.nextElementSibling;
      if (!(el instanceof HTMLDivElement)) continue;

      const btn = el.querySelector("button");
      if (!btn) continue;

      threeDotsArray.push(btn);
    }

    for (const threeDots of threeDotsArray) {
      const connectionContainer = threeDots.closest<HTMLElement>(
        '[data-display-contents="true"]',
      );
      if (!connectionContainer) continue;
      const connection = connectionContainer.querySelector("div");
      if (!connection) continue;

      await highlightAndFocus(connection);

      threeDots.click();

      await sleep(50);

      const removeConnection =
        document.querySelector<HTMLElement>("div[role=menuitem]");
      if (!removeConnection) continue;
      removeConnection.click();

      await sleep(50);

      const removeConnectionConfirmationSpan =
        findSpanByText("Remove connection");
      if (!removeConnectionConfirmationSpan) continue;

      const removeConnectionConfirmation =
        removeConnectionConfirmationSpan.parentElement;
      if (!removeConnectionConfirmation) continue;

      removeConnectionConfirmation.click();

      await sleep(waitTime * 1000);
    }
  } else {
    return;
  }
}

export default removeConnections;
