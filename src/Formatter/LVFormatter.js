/**
 * Validates and formats postcodes in Latvia.
 *
 * Postal codes in Latvia are 4 digit numeric and use a mandatory country code (LV) in front.
 * The format is LV-NNNN, where N stands for a digit.
 *
 * This formatter accepts the postcode both with and without the LV prefix, and always outputs the prefix.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Latvia
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) === 'LV') {
        postcode = postcode.substring(2);
    }
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return 'LV-' + postcode;

}