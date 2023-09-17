/**
 * Validates and formats postcodes in Iceland.
 *
 * Postcodes consist of 3 digits, without separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes_in_Iceland
 */
export default function format(postcode) {
    if (!/^[0-9]{3}$/.test(postcode)) {
        return null;
    }
    if (postcode[0] === '0') {
        return null;
    }
    return postcode;

}