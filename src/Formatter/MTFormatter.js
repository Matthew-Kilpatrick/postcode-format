/**
 * Validates and formats postcodes in Malta.
 *
 * Postcode format is AAA NNNN, A standing for a letter and N standing for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Malta
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(/^([A-Z]{3})([0-9]{4})$/))) {
        return null;
    }
    return matches[1] + ' ' + matches[2];

}