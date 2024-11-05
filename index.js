export function stringOperations(input) {
    // Remove whitespace
    const noWhitespace = input.replace(/\s+/g, '');

    // Find length
    const length = input.length;

    // Sort the string
    const sortedString = input.split('').sort().join('');

    // Reverse the string
    const reversedString = input.split('').reverse().join('');

    // Find unique characters
    const uniqueCharacters = [...new Set(input.split(''))].join('');

    // Convert upper to lower and lower to upper
    const toggleCase = input.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');

    // Remove non-alphabetic characters
    const onlyAlphabetic = input.replace(/[^A-Za-z]/g, ''); // Keep only letters

    return {
        noWhitespace,
        length,
        sortedString,
        reversedString,
        uniqueCharacters,
        toggleCase,
        onlyAlphabetic // Include the filtered string
    };
}
