/**
 * Validates and formats postcodes in Swaziland.
 *
 * Postcode format is ANNN, A standing for a letter and N for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(/^[A-Z][0-9]{3}$/))) {
        return null;
    }
    return postcode;

}