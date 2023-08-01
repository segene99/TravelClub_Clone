import TravelClub from "./TravelClub";
import ClubMember from "./ClubMember";


const name='namu kim';
const intro = 'welcome to namusori';
const club = new TravelClub(name, intro);

club.members.push(new ClubMember('genie@test.co.kr','segene cho','010-4888-8390').inviteLeader());
club.members.push(new ClubMember('gitui@nextree.com','namu kim','010-3988-9584').inviteMember());

console.log(club);