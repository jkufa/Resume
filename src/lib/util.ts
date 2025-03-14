export const formatDateRange = (d1: string, d2: string) => {
  if (!d1) {
    return d2;
  }
  if (!d2) {
    return d1;
  }
  return `${d1} – ${d2}`;
};

export const convertMarkdownToHTML = (input: string) => {
  // Convert bold markdown to HTML
  const boldRegex = /\*\*(.*?)\*\*/g;
  const boldHTML = input.replace(boldRegex, '<b>$1</b>');

  // Convert italic markdown to HTML
  const italicRegex = /\*(.*?)\*/g;
  const italicHTML = boldHTML.replace(italicRegex, '<i>$1</i>');

  return italicHTML;
};
