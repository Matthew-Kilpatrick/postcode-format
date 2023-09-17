/**
 * Validates and formats postcodes in Åland Islands.
 *
 * Postcodes consist of 5 digits, starting with 22.
 * Postcodes may optionally start with "AX-" when used from abroad.
 * This formatter only outputs the prefix if present in the input.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let prefix;
    let length;

    length = postcode.length;
    prefix = false;
    if (length === 7) {
        if (postcode.substring(0, 2) !== 'AX') {
            return null;
        }
        postcode = postcode.substring(2);
        prefix = true;
    } else if (postcode.length !== 5) {
        return null;
    }
    if (!/^[0-9]+$/.test(postcode)) {
        return null;
    }
    if (postcode.substring(0, 2) !== '22') {
        return null;
    }
    if (prefix) {
        return 'AX-' + postcode;
    }
    return postcode;

}