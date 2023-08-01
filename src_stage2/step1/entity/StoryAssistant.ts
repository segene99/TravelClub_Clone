import ClubMember from './ClubMember';
import TravelClub from './TravelClub';

//클럽 소개
const name = 'namoosori club';
const intro = 'Welcome to namoosori club';
//클럽VO 객체 생성
const club = new TravelClub(name, intro);

club.members.push(new ClubMember('leaderhong@nextree.co.kr', 'gil dong Hong', '010-0001-0001').inviteLeader());
club.members.push(new ClubMember('memberlee@nextree.co.kr', 'nara Lee', '010-0001-0002').inviteMember());

console.log(club);
