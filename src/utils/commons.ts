export const FormatDate = (date: string | number | Date): string => {
	const event = new Date(date)
	const newDate = event.toDateString().slice(0, -4)
	return newDate
}
