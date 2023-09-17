/**
 * Validates and formats postcodes in Saint Vincent and the Grenadines.
 *
 * The postcode format is VCNNNN, where N represents a digit.
 * This formatter accepts postcodes with and without the VC prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'VC') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return 'VC' + postcode;

}