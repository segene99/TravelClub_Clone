import RoleInClub from "./RoleInClub";

class ClubMember{

    name: string ='';
    email: string ='';
    birthday: string ='';
    nickname: string ='';
    phoneNum: string ='';
    role: RoleInClub = RoleInClub.Member;

    constructor(name: string, phoneNum: string, email: string){
        this.name = name;
        this.setEmail(email);
        this.phoneNum = phoneNum;
    }
    setEmail(email: string) {
        if(!this.isValidEmail(email)){
            throw new Error('invalid format of email')
        }
        this.email = email;

    }
    isValidEmail(email: string) {
        const pattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        return !!email.match(pattern);   
     }

    invitePresident(): ClubMember {
        const clubmember = new ClubMember('nara kim', '010-1111-1111','test@test.co.kr');
        
        clubmember.role = RoleInClub.President;
        return clubmember;
    }
    inviteMember(): ClubMember{
        return new ClubMember('abdulah','010-8888-9333','asan@abcd.com');
    }

    

}
export default ClubMember