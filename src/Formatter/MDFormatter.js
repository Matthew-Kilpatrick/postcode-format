/**
 * Validates and formats postcodes in Moldova.
 *
 * The postcode format is MD-NNNN, where N stands for a digit.
 *
 * This formatter accepts the postcode both with and without the MD prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Moldova
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'MD') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return 'MD-' + postcode;

}