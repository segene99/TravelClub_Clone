import ClubMember from "./ClubMember";
import TravelClub from "./TravelClub";

const name = 'segene club';
const intro = 'welcome to segene club';
const club = new TravelClub(name, intro);

club.members.push(new ClubMember('jason kim','010-3884-0444','jkim@naver.com').invitePresident());
club.members.push(new ClubMember('nara kim','010-9994-4813','nara@nextree.com').inviteMember());

console.log(club);