/**
 * Validates and formats postcodes in British Virgin Islands.
 *
 * The postcode format is VG followed by 4 digits, specifically VG1110 through VG1160.
 * This formatter accepts inputs with and without the VG prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'VG') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    if (postcode < '1110' || postcode > '1160') {
        return null;
    }
    return 'VG' + postcode;

}