export const scrollToForm = () => {
  const formSection = document.querySelector("form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
