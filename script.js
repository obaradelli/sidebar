document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("trigger");
  trigger.addEventListener("click", handleSidebar);

  const sidebar = document.querySelector(".sidebar");

  function unsetAbsolute(operacao) {
    const imgInput = document.querySelector(".img-input");
    const input = document.getElementById("abc");

    const setClose = imgInput.classList.contains("close-img");

    if (operacao === "close") {
      input.classList.add("hide");
      imgInput.classList.add("close-img");
    } else {
      input.classList.remove("hide");
      input.classList.add("unHide");
      imgInput.classList.remove("close-img");
    }
  }

  function displayNone() {
    const rowDiv = document.querySelector(".row-div");
    const abcd = document.querySelector(".abcd");
    const setNone = rowDiv.classList.contains("none");

    if (setNone) {
      rowDiv.classList.remove("none");
      abcd.classList.remove("none");
    } else {
      abcd.classList.add("none");
      rowDiv.classList.add("none");
    }
  }

  function reverteHeaderItems() {
    const headerContainer = document.querySelector(".sidebar-header");
    const isReverted = headerContainer.classList.contains("reverse");

    if (isReverted) {
      headerContainer.classList.remove("reverse");
    } else {
      headerContainer.classList.add("reverse");
    }
  }

  function hideDescriptions() {
    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach((description) => {
      description.classList.add("hide");
    });
  }

  function unHideDescriptions() {
    const descriptions = document.querySelectorAll(".description");
    descriptions.forEach((description) => {
      description.classList.remove("hide");
      description.classList.add("unHide");
    });
  }

  function close() {
    sidebar.classList.remove("open");

    displayNone();
    unsetAbsolute("close");
    reverteHeaderItems();
    hideDescriptions();
  }

  function open() {
    sidebar.classList.add("open");

    displayNone();
    unsetAbsolute("open");
    reverteHeaderItems();
    unHideDescriptions();
  }

  function handleSidebar() {
    const sidebarIsOpen = sidebar.classList.contains("open");

    if (sidebarIsOpen) {
      close();
    } else {
      open();
    }
  }
});
