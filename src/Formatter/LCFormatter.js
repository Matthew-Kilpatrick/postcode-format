/**
 * Validates and formats postcodes in Saint Lucia.
 *
 * The postcode format is LCNN NNN, N standing for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(/^(LC[0-9]{2})([0-9]{3})$/))) {
        return null;
    }
    return matches[1] + ' ' + matches[2];

}