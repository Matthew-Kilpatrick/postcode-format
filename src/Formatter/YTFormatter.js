/**
 * Validates and formats postcodes in Mayotte.
 *
 * Postcodes consist of 5 digits, without separator.
 * Overseas Department of France. French codes used. Range 97600 - 97690.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode < '97600' || postcode > '97690') {
        return null;
    }
    return postcode;

}