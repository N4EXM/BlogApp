export function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return { hours, minutes, formatted: `${hours}:${minutes}` };
}

export function formatToDDMMYY(dateString) {
    // Split the date and time parts
    const [datePart] = dateString.split(' ');

    // Split year, month, day
    const [year, month, day] = datePart.split('-');

    // Format as dd/mm/yy
    return `${day}/${month}/${year.slice(-2)}`;
}