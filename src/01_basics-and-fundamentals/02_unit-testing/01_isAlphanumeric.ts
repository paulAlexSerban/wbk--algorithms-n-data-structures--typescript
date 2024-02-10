// Helper function to check if a character is alphanumeric
function isAlphaNumericV1(c: string) {
    const code = c.charCodeAt(0);
    return (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)
    ); // lower alpha (a-z)
}

function isAlphaNumericV2(c: string) {
    return /^[a-zA-Z0-9]$/.test(c);
}

export { isAlphaNumericV1, isAlphaNumericV2 };
