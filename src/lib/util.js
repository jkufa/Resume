export const formatDateRange = (d1, d2) => {
	if (!d1) {
		return d2;
	}
	if (!d2) {
		return d1;
	}
	return `${d1} – ${d2}`;
};


export const convertMarkdownToHTML = (inputString) => {
  // Convert bold markdown to HTML
  const boldRegex = /\*\*(.*?)\*\*/g;
  const boldHTML = inputString.replace(boldRegex, '<b>$1</b>');

  // Convert italic markdown to HTML
  const italicRegex = /\*(.*?)\*/g;
  const italicHTML = boldHTML.replace(italicRegex, '<i>$1</i>');

  return italicHTML;
}