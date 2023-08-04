import RoleInClub from "./RoleInClub";

class ClubMember {

    name: string = '';
    email: string = '';
    phoneNum: string = '';
    birthday: string = '';
    nickname: string = '';
    role: RoleInClub = RoleInClub.Member;

    constructor(name: string, email: string, phoneNum: string) {
        this.name = name;
        this.setEmail(email);
        this.phoneNum = phoneNum;
    }
    setEmail(email: string):void {
        if(!this.isValidEmail(email)){
            console.log('invalid email entered')
        }
        this.email = email;
    }
    isValidEmail(email: any): boolean {
        const pattern = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";

        return !!email.match(pattern);
    }
}
export default ClubMember