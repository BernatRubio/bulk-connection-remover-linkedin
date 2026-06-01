function addCheckboxes() {
  const connectionsList = document.querySelector<HTMLElement>(
    'div[data-component-type="LazyColumn"][componentkey="ConnectionsPage_ConnectionsList"]',
  );
  let observer: MutationObserver | null = null;

  function renderCheckboxes() {
    if (!connectionsList) return;

    const connections = connectionsList.querySelectorAll<HTMLElement>(
      ':scope > [data-display-contents="true"]',
    );

    connections.forEach((connection) => {
      if (connection.querySelector(".checkbox-toggle")) return;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox-toggle";
      checkbox.style.transform = "scale(1.5)";
      checkbox.style.marginRight = "auto";

      connection.prepend(checkbox);
    });
  }

  function createObserver() {
    if (!observer && connectionsList) {
      observer = new MutationObserver(() => renderCheckboxes());
      const config = { childList: true };
      observer.observe(connectionsList, config);
    }
  }

  renderCheckboxes();
  createObserver();
}

export default addCheckboxes;
