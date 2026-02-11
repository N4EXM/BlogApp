export function truncateText(str, maxLength = 30) {
    if (str.length <= maxLength) {
        return str; // Return original string if it's already within the limit
    } else {
        // Truncate and add ellipsis
        return str.slice(0, maxLength - 3) + "..."; 
    }
}

export function formatNumber(num, options = {}) {
    const {
        decimals = 1,
        stripZeros = true,
        formatCommas = false
    } = options;
    
    let formatted;
    let suffix = '';
    
    if (num >= 1_000_000_000) {
        formatted = num / 1_000_000_000;
        suffix = 'B';
    } else if (num >= 1_000_000) {
        formatted = num / 1_000_000;
        suffix = 'M';
    } else if (num >= 1_000) {
        formatted = num / 1_000;
        suffix = 'K';
    } else {
        // Format small numbers with commas if requested
        if (formatCommas) {
        return num.toLocaleString();
        }
        return num.toString();
    }
    
    // Format with decimals
    let result = formatted.toFixed(decimals);
    
    // Strip trailing .0 if enabled
    if (stripZeros) {
        result = result.replace(/\.0+$/, '');
    }
    
    // Add commas for thousands (e.g., 1,234.5K)
    if (formatCommas) {
        result = Number(result).toLocaleString();
    }
    
    return result + suffix;
}