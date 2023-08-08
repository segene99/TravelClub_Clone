import ServiceLogics from "./logic/ServiceLogics";
import ClubDto from "./service/dto/ClubDto";
import ClubMembershipDto from "./service/dto/ClubMembershipDto";
import MemberDto from "./service/dto/MemberDto";
import MainMenu from "./ui/menu/MainMenu";

//intialization
const initialClubDto = new ClubDto('namoosori club', 'Welcome to namoosori club.');
const initialMemberDto = new MemberDto('namoosori@test.co.kr', 'Minsoo Lee', '010-3321-1001');

const serviceLogics = ServiceLogics.shareInstance();
const clubService = serviceLogics.createClubService();
const memberService = serviceLogics.createMemberService();

clubService.register(initialClubDto);
memberService.register(initialMemberDto);
clubService.addMembership(new ClubMembershipDto('0', 'namoosori@test.co.kr'));

const mainMenu = new MainMenu();
mainMenu.showMenu();
