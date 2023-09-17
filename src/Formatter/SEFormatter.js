/**
 * Validates and formats postcodes in Sweden.
 *
 * Postcode format is NNN NN.
 * The lowest number is 100 00 and the highest number is 984 99.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Sweden
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode < '10000' || postcode > '98499') {
        return null;
    }
    return postcode.substring(0, 3) + ' ' + postcode.substring(3);

}