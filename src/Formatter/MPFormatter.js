/**
 * Validates and formats postcodes in Northern Mariana Islands.
 *
 * U.S. ZIP codes. Range 96950 - 96952.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_the_Northern_Mariana_Islands
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
    if (zip < '96950' || zip > '96952') {
        return null;
    }
    if (length === 5) {
        return postcode;
    }
    return zip + '-' + postcode.substring(5);

}