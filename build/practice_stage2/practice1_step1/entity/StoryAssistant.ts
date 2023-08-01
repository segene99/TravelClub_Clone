import ClubMember from "./ClubMember";
import TravelClub from "./TravelClub";

const name = 'namu club';
const intro = 'welcome to namu club'
const club = new TravelClub(name, intro);

club.members.push(new ClubMember('jason@nextree.co.kr','segene cho','010-1234-3994').inviteLeader());
club.members.push(new ClubMember('tpwls@gmail.com','genkins paul','011-9483-oioi').inviteMember());

console.log(club);