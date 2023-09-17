/**
 * Validates and formats postcodes in the Netherlands.
 *
 * Postcode format is NNNN AA, where N stands for a digit and A for a letter.
 * The letter combinations 'SS', 'SD' and 'SA' are not used.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(/^([0-9]{4})([A-Z]{2})$/))) {
        return null;
    }
    if (['SS', 'SD', 'SA'].indexOf(matches[2]) !== -1) {
        return null;
    }
    return matches[1] + ' ' + matches[2];

}