export function truncateText(str, maxLength = 30) {
    if (str.length <= maxLength) {
        return str; // Return original string if it's already within the limit
    } else {
        // Truncate and add ellipsis
        return str.slice(0, maxLength - 3) + "..."; 
    }
}