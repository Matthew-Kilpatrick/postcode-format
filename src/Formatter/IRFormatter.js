/**
 * Validates and formats postcodes in Iran.
 *
 * Postcode format is NNNNN NNNNN, where N stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{10}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 5) + ' ' + postcode.substring(5);

}