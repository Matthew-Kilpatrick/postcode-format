/**
 * Validates and formats postcodes in the Republic of Macedonia.
 *
 * Postal codes in the Republic of Macedonia are 4 digits in length.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_the_Republic_of_Macedonia
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return postcode;

}