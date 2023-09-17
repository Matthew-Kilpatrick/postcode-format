/**
 * Validates and formats postcodes in Puerto Rico.
 *
 * Puerto Rico is allocated the US ZIP codes 00600 to 00799 and 00900 to 00999.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Puerto_Rico
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

    if (!isInRange(zip)) {
        return null;
    }
    if (length === 5) {
        return postcode;
    }
    return zip + '-' + postcode.substring(5);

}

function isInRange(zip) {
    if (zip >= '00600' && zip <= '00799') {
        return true;
    }

    if (zip >= '00900' && zip <= '00999') {
        return true;
    }

    return false;
}