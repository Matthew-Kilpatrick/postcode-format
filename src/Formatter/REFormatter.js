/**
 * Validates and formats postcodes in Réunion.
 *
 * Postcodes consist of 5 digits, starting with 974, without separator.
 * This is a subset of France postcodes.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode.substring(0, 3) !== '974') {
        return null;
    }
    return postcode;

}