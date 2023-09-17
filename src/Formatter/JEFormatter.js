const pattern = new RegExp('^'
  + '(JE[0-9][0-9]?)'
  + '([0-9][A-Z][A-Z])'
  + '$');

/**
 * Validates and formats the postcodes in Jersey.
 *
 * Postcodes can have two different formats:
 *
 * - JE9 9AA
 * - JE99 9AA
 *
 * A stands for a capital letter, 9 stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/JE_postcode_area
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(pattern))) {
        return null;
    }
    return matches[1] + ' ' + matches[2];

}