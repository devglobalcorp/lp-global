export const scrollToForm = (formRef: unknown) => {
  const formSection = document.querySelector("form");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
