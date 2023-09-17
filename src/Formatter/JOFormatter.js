/**
 * Validates and formats postcodes in Jordan.
 *
 * Postcodes consist of 5 digits, without separator.
 * According to Wikipedia, postcodes are used for deliveries to PO Boxes only.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    return postcode;

}