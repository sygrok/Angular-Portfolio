export const slideToSection = (sectionId: string, offset = 80) => {
  const element = document.getElementById(sectionId);
  const elementPosition = element?.getBoundingClientRect().top;
  if (!elementPosition) return alert('No element position');
  const slidePosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: slidePosition,
    behavior: 'smooth',
  });
};
