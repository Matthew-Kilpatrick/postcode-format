/**
 * Validates and formats postcodes in Lebanon.
 *
 * Postcode format is NNNN NNNN, where N stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{8}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 4) + ' ' + postcode.substring(4);

}