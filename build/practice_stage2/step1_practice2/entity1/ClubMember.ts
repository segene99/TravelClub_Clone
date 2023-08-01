import RoleInClub from "../../step1_practice1/entity/RoleInClub";

class ClubMember{

    name: string = ''; 
    email: string = '';
    phoneNumber: string = '';
    nickname: string = '';
    birthDay: string = '';
    role: RoleInClub = RoleInClub.Member;

    constructor(email:string, name: string, phoneNumber: string){
        this.name = name
        this.setEmail(email);
        this.phoneNumber = phoneNumber;
    }
    setEmail(email: string): void{
        if(!this.isEmailValid(email)){
            throw new Error('Invalid email provided: ' + email);
        }
        this.email = email
    }
    isEmailValid(email: string): boolean {
        const ePattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

        return !!email.match(ePattern);
    }
    inviteLeader(): ClubMember{
        const leader = new ClubMember('gene@nexttree.com','segene cho','010-3987-4667');
        leader.role = RoleInClub.President;
        return leader;
    }
    inviteMember(): ClubMember{
        return new ClubMember('bobby@gmail.com', 'nara kim', '010-4887-0999');
    }

}
export default ClubMember