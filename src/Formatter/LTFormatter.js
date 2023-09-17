/**
 * Validates and formats postcodes in Lithuania.
 *
 * Postal codes in Lithuania since 2005 are 5 digit numeric.
 * ISO 3166-1 alpha-2 prefix is allowed, with that the format is LT-NNNNN.
 *
 * This formatter accepts inputs both with and without the LT prefix,
 * and outputs the prefix only if present in the input.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Lithuania
 */
export default function format(postcode) {
    let prefix;
    let length;

    length = postcode.length;
    prefix = false;
    if (length === 7) {
        if (postcode.substring(0, 2) !== 'LT') {
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
    if (prefix) {
        return 'LT-' + postcode;
    }
    return postcode;

}