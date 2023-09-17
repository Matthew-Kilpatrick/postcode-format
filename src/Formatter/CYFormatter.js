/**
 * Validates and formats postcodes in Cyprus.
 *
 * Postcodes consist of 4 digits, without separator.
 * The postal code system covers the whole island, but is not used on mail to Northern Cyprus.
 * Northern Cyprus uses a 5-digit code commencing 99, introduced in 2013.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Cyprus
 */
export default function format(postcode) {
    let length;

    if (!/^[0-9]+$/.test(postcode)) {
        return null;
    }
    length = postcode.length;
    if (length === 4) {
        return postcode;
    }
    if (postcode.length !== 5) {
        return null;
    }
    if (postcode.substring(0, 2) !== '99') {
        return null;
    }
    return postcode;

}