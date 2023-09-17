/**
 * Validates and formats postcodes in Andorra.
 *
 * Postcodes consist of the letters AD, followed by 3 digits, without separator.
 * This formatter accepts the 3 digits with and without the AD prefix, and always outputs with the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Andorra
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'AD') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{3}$/.test(postcode)) {
        return null;
    }
    return 'AD' + postcode;

}