export const handleParseCurrency = (total: string) => {
    const parsed = parseFloat(total);
    if (isNaN(parsed)) return '0';
    return parsed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}