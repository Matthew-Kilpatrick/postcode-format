/**
 * Validates and formats postcodes in Micronesia.
 *
 * U.S. ZIP codes. Range 96941 - 96944.
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
    if (zip < '96941' || zip > '96944') {
        return null;
    }
    if (length === 5) {
        return postcode;
    }
    return zip + '-' + postcode.substring(5);

}