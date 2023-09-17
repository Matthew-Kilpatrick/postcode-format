/**
 * Validates and formats postcodes in Japan.
 *
 * Postcodes format is NNN-NNNN, where N stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Japan
 */
export default function format(postcode) {
    if (!/^[0-9]{7}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 3) + '-' + postcode.substring(3);

}