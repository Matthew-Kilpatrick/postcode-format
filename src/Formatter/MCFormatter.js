/**
 * Validates and formats postcodes in Monaco.
 *
 * Postcodes consist of 5 digits, without separator.
 *
 * Although an independent country, Monaco is part of the French postal code system as if it were a French département,
 * numbered, with codes consisting of 980 and two digits, with 00 being used for deliveries to all physical addresses
 * in the Principality, and 01 to 99 being used for special types of delivery.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_France#Monaco
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode.substring(0, 3) !== '980') {
        return null;
    }
    return postcode;

}