/**
 * Validates and formats postcodes in Saint Barthélemy.
 *
 * This country uses a single postcode, 97133.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === '97133') {
        return postcode;
    }
    return null;

}