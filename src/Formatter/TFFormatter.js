/**
 * Validates and formats postcodes in French Southern and Antarctic Territories.
 *
 * French codes in the 98400 range have been reserved, but do not seem to be in use at the moment.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode.substring(0, 3) !== '984') {
        return null;
    }
    return postcode;

}