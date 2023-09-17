/**
 * Validates and formats postcodes in Azerbaijan.
 *
 * The postcode format is AZ NNNN, where N represents a digit.
 * This formatter accepts postcodes with and without the AZ prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Azerbaijan
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'AZ') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return 'AZ ' + postcode;

}