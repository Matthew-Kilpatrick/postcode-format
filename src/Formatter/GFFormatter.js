/**
 * Validates and formats postcodes in French Guiana.
 *
 * Postcode format is 973NN, where N stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode.substring(0, 3) !== '973') {
        return null;
    }
    return postcode;

}