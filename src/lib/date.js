/**
 *
 * @param {Date} date
 * @returns string
 */
export function formatDate(date) {
	return Intl.DateTimeFormat('en-US', {
		month: 'long',
		year: 'numeric',
		day: 'numeric'
	}).format(new Date(date));
}
