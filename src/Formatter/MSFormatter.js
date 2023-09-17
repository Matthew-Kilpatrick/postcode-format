/**
 * Validates and formats postcodes in Montserrat.
 *
 * The format is MSR followed by a space then 4 digits, in the range 1110 to 1350.
 *
 * This formatter accepts the postcode both with and without the MSR prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode.substring(0, 3) === 'MSR') {
        postcode = postcode.substring(3);
    }
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    if (postcode < '1110' || postcode > '1350') {
        return null;
    }
    return 'MSR ' + postcode;

}