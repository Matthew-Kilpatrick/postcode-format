const pattern = new RegExp('^'
  + '(IM[0-9][0-9]?)'
  + '([0-9][A-Z][A-Z])'
  + '$');

/**
 * Validates and formats the postcodes in the Isle of Man.
 *
 * Postcodes can have two different formats:
 *
 * - IM9 9AA
 * - IM99 9AA
 *
 * A stands for a capital letter, 9 stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/IM_postcode_area
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(pattern))) {
        return null;
    }
    return matches[1] + ' ' + matches[2];

}