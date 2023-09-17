/**
 * Validates and formats postcodes in Barbados.
 *
 * Postal codes in Barbados are 5 digit numeric, with BB prefix.
 * This formatter accepts postcodes with and without the BB prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Barbados
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'BB') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    return 'BB' + postcode;

}