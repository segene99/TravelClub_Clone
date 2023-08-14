import Address from "./Address";
import ClubMembership from "./ClubMembership";

class CommunityMember{


    name: string = '';
    email: string = '';
    birthday: string = '';
    nickname: string  = '';
    phoneNum: string = '';
    
    addresses: Address[] = [];
    membershipList: ClubMembership[] =[];

    constructor(name: string, email: string, phoneNum: string){
        this.name = name;
        this.email = email;
        this.phoneNum = phoneNum;
    }

    static getSample(): CommunityMember{

        const member = new CommunityMember('segene cho', 'sgene@dyoung.co.kr', '010-4765-0948');

        member.nickname = 'Cho';
        member.birthday = '1980.03.05'

        member.addresses.push(Address.getMemberAddress());

        return member;
    }   
    getId(): string {
        return this.email;
    }

}
export default CommunityMember