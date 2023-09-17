/**
 * Validates and formats postcodes in U.S. Virgin Islands.
 *
 * U.S. ZIP codes. Range 00801 - 00851.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let zip;
    let length;

    if (!/^[0-9]+$/.test(postcode)) {
        return null;
    }
    length = postcode.length;
    if (length === 5) {
        zip = postcode;
    } else if (length === 9) {
        zip = postcode.substring(0, 5);
    } else {
        return null;
    }
    if (zip < '00801' || zip > '00851') {
        return null;
    }
    if (length === 5) {
        return postcode;
    }
    return zip + '-' + postcode.substring(5);

}