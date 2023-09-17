/**
 * Validates and formats postcodes in Saudi Arabia.
 *
 * The postcode format is NNNNN for PO Boxes and NNNNN-NNNN for home delivery, N standing for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let length;

    if (!/^[0-9]+$/.test(postcode)) {
        return null;
    }
    length = postcode.length;
    if (length === 5) {
        return postcode;
    }
    if (length === 9) {
        return postcode.substring(0, 5) + '-' + postcode.substring(postcode.length - 4);
    }
    return null;

}