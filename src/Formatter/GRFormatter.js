/**
 * Validates and formats postcodes in Greece.
 *
 * Postcodes consist of 5 digits, in the format NNN NN.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Greece
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 3) + ' ' + postcode.substring(3);

}