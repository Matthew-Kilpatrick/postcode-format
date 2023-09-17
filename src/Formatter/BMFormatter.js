/**
 * Validates and formats postcodes in Bermuda.
 *
 * Postcode formats are AA NN for street addresses, AA AA for P.O. Box addresses (A=letter, N=digit).
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Bermuda
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(/^([A-Z]{2})([A-Z]{2}|[0-9]{2})$/))) {
        return null;
    }
    return matches[1] + ' ' + matches[2];

}