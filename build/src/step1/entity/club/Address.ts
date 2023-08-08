import AddressType from "./AddressType";

class Address{

    postalCode: string = '';
    jibunAddress: string = '';
    streetAddress: string = '';
    country: string = '대한민국';
    addressType: AddressType = AddressType.Office;

    constructor(postalCode: string, jibunAddress: string,streetAddress: string ){
        this.postalCode = postalCode;
        this.jibunAddress = jibunAddress;
        this.streetAddress = streetAddress;
    }
    
    static getMemberAddress(): Address {
        
        const address = new Address('13903','anyang-si dongaanagu', '135 dongyoung-ro')

        address.addressType = AddressType.Home;

        return address;

    }

}
export default Address