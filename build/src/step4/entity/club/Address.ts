import AddressType from './AddressType';


class Address {
    //19. 주소 필드 선언
    zipCode: string = '';
    zipAddress: string = '';
    streetAddress: string = '';
    country: string = 'South Korea';
    addressType: AddressType = AddressType.Office;

    constructor(zipCode: string, zipAddress: string, streetAddress: string) {
      //20. 받은 zipCode, zipAddress, streetAddress로 초기화
      this.zipCode = zipCode;
      this.zipAddress = zipAddress;
      this.streetAddress = streetAddress;
    }

    static getHomeAddressSample(): Address {
      //18. Address로 객체 생성하여 값 초기화에서 address에 정의
      const address: Address = new Address('134-321', 'Geumcheon-gu, gasan-dong', '231');
      //21. enum인 AddressType에서 'Home'값을 addressType에 정의
      address.addressType = AddressType.Home;
      //22. address 객체 리턴
      return address;
    }

}
export default Address;
