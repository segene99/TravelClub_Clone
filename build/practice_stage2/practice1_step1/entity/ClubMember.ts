import RoleInClub from "./RoleInClub";

class ClubMember{

    email: string = '';
    name: string = '';
    nickname: string = '';
    phoneNumber: string = '';
    birthDay: string = '';
    role: RoleInClub = RoleInClub.Member;

    constructor(email: string, name: string, phoneNumber: string){
        this.setEmail(email);
        this.name = name;
        this.phoneNumber = phoneNumber;
    }
    setEmail(email: string): void {
        if(this.isValidEmail(email)){
            throw new Error("Invalid email: " + email);
        }
        this.email = email;
    }
    isValidEmail(email: string): boolean {
        const ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
        return !email.match(ePattern);
    }


    inviteLeader(): ClubMember{
        return new ClubMember('memberlee@naver.co.kr', 'segene cho', '010-3944-9877');
    }

    inviteMember(): ClubMember{
        return new ClubMember('jason@gmail.com', 'nara lee', '010-5556-7776');
    }


}
export default ClubMember