/**
 * Validates and formats postcodes in Wallis and Futuna.
 *
 * Postcodes consist of 5 digits, without separator.
 * Overseas Collectivity of France. French codes used. Range 98600 - 98690.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode < '98600' || postcode > '98690') {
        return null;
    }
    return postcode;

}