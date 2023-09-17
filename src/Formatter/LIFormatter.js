/**
 * Validates and formats postcodes in Liechtenstein.
 *
 * Postcodes consist of 4 digits, without separator, range 9485 to 9498.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Switzerland_and_Liechtenstein
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    if (postcode < '9485' || postcode > '9498') {
        return null;
    }
    return postcode;

}