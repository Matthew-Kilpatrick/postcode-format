/**
 * Validates and formats postcodes in Guadeloupe.
 *
 * Postcode format is 971NN, where N stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^971[0-9]{2}$/.test(postcode)) {
        return null;
    }
    return postcode;

}