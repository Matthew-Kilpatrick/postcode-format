/**
 * Validates and formats postcodes in India.
 *
 * Postcodes consist of 6 digits, without separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_Index_Number
 */
export default function format(postcode) {
    if (!/^[0-9]{6}$/.test(postcode)) {
        return null;
    }
    if (postcode[0] === '0') {
        return null;
    }
    return postcode;

}