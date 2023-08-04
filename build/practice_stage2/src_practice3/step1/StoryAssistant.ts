import ClubMember from "./ClubMember";
import TravelClub from "./TravelClub";

const name = 'jason club';
const intro = 'welcome to jason club';
const club = new TravelClub(name, intro);

club.members.push(new ClubMember('jason kim','010-3887-1999','jkim@gmail.com').invitePresident());
club.members.push(new ClubMember('nara kim','010-9994-4813','kim@next.com').inviteMember());

console.log(club);