export const formatDateRange = (d1, d2) => {
	if (!d1) {
		return d2;
	}
	if (!d2) {
		return d1;
	}
	return `${d1} – ${d2}`;
};
