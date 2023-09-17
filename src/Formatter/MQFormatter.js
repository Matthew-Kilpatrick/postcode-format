/**
 * Validates and formats postcodes in Martinique.
 *
 * Postcodes consist of 5 digits, without separator.
 * Overseas Department of France. French codes used. Range 97200 - 97290.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode < '97200' || postcode > '97290') {
        return null;
    }
    return postcode;

}