# Daily-Report

# <summary>2023.07.31</summary>

# stage 1

흐름 step1
newClub -> tellMeAboutYou -> clubInfo
1.StoryAssistant.ts

- TravelClub import
- TravelClub 클래스로 newClub 객체생성
- TravelClub의 tellMeAboutYou 메소드 호출

2. TravelClub.ts

- 여행자의 name과 intro 변수 및 생성자 생성
- clubInfo 메소드: getter method
- tellMeAboutYou 메소드: clubInfo method 호출해서 return `club name: ${this.name},  intro: ${this.intro}`;
- TravelClub export

typescript

1. 생성자 멤버변수를 대입값으로 초기화. 파라미터로 받음
   constructor(name: string, intro: string){ this.name = name; this.intro = intro;}
2. 메소드 생성: tellMeAboutYou(): 리턴타입{}

흐름 step2
ClubConsole -> showMenu -> displayMainMenu -> selectMainMenu -> register/find/findAll/exitProgram/'Choose again'

1. StoryAssistant.ts

- import ClubConsole 클래스
- ClubConsole 클래스로 객체생성

2. ClubConsole.ts

- import question from readline-sync : questino 함수를 readline-sync에서 import( npm 패키지 중 하나)
- constructor 생성
- showMenu 메소드 생성
- inputNumber 지역변수 선언(사용자의 input)
- displayMainMenu 호출: console에 옵션들 보여주기
- selectMainMenu 호출 후, inputNumber 값 초기화: question 함수 호출(question 함수는 입력받은 아무 타입인 값을 받고 string으로 return하는 typescript 제공 함수)
- inputNumber에 따라서 switch case로 각각 메소드(register(),find(), findAll(), exitProgram()) 호출
- exitProgram(): process 클래스에서 exit라는 함수 호출하여 never를 반환받음. never는 어떤 값도 가질 수 없다

흐름 step3

1. register
   clubConsole -> showMenu -> displayMainMenu -> selectMainMenu -> case 1: register -> 유효성검사(이름 공백, 중복체크 exist()) -> ClubCoordinator의 register()호출 -> clubs: TravelClub[]에 삽입

2. find
   clubConsole -> showMenu -> displayMainMenu -> selectMainMenu ->case 2: find -> 유효성검사(등록된 클럽 체크 displayFindMenuAndGetKey()) -> find()호출 -> clubs Array에 있는 이름이면 해당 index의 값 return

3. findAll
   clubConsole -> showMenu -> displayMainMenu -> selectMainMenu ->case 3: findAll -> 유효성검사(등록된 클럽 체크 hasClubs()) -> findAll()호출 -> clubs Array 모두 return -> 총 개수와 클럽이름 하나씩 출력

- if(savedClubName){}: savedClubName이 null, undefined, 0, false, NaN, or an empty string 아니면 true, 맞으면 false

4. exitProgram
   clubConsole -> showMenu -> displayMainMenu -> selectMainMenu ->case 0: exitProgram -> process.exit(0) never 반환 -> 종료

# <summary>2023.08.01</summary>

# stage1

TravelClub[] 배열에 push()할때 []만 들어갈 수 있고 number로 반환

- console

1. register: 유저input 이름, 공백제거, 유효성체크(빈값확인), 유효성체크(이름중복체크), 유저input 인트로, 공백제거, 유효성체크(빈값확인), register 작업수행, 결과출력
2. find: 유저input 이름, 공백제거, 유효성체크(빈값확인), 유효성체크(이름중복체크), find 작업수행, 결과출력
3. findAll: 유효성체크(클럽존재여부), findAll 작업수행, 결과출력
4. exitprogram: process.exit(0)로 프로그램 종료

# stage2

TravelClub(여행클럽들 정보) -> ClubMember(클럽멤버들 정보) -> RoleInClub(= Enumertaion 클럽회원의 역할)

작성순서
StoryAssistant -> TravelClub -> ClubMember -> RoleInClub

흐름 step1

- 회원등록 후, club 출력
  1.StoryAssistant
  StoryAssistant -> inviteLeader() -> push(inviteLeader에서 받은 값)

메소드에서 파라미터 받을때, 순서 맞아야함

1. TravelClub
   프로퍼티 세팅 -> 생성자 -> setName() name의 길이 유효성 체크 및 초기화, setIntro() intro의 길이 유효성 체크 및 초기화
2. ClubMember
   프로퍼티 세팅 -> 생성자 -> setEmail() -> isEmailValid() -> inviteLeader() -> inviteMember()
3. RoleInClub
   enum 세팅

흐름 step2
ui

- console: ClubWindow, MemberWindow
- menu: ClubMenu, MemberMenu

- StoryAssistant -> ClubMenu -> ClubWindow
- StoryAssistant -> ClubMenu -> ClubMenu.showMenu() -> MemberMenu -> MemberWindow

ClubMenu

- register(), find(), findAll(), modify(), remove(), showMenu(), exitProgram()
  MemberMenu
- findClub(), add(), find(), modify(), remove(), exitProgram()

### Comment

학습 코딩을 진행하시는 프로젝트의 구조가 엉망으로 되어 있네요?
gitlab을 통해 프로젝트를 push 하시는 그 결과물은 곧 보고서와 다르지 않습니다.
그날 그날 workspace를 push 하는 형태라면 굳이 9개의 프로젝트를 나눠서 올릴 이유도 없지 않을까요?
앞으로는 정돈해서 올리세요.
더불어 OT에서 각 stage의 반복은 어떤 순서로 진행하라고 했는지를 생각해보시고 반복 코딩 진행하시기 바랍니다.

# <summary>2023.08.02</summary>

- stage1-3 작성
- stage2-1-step3 작성중

# <summary>2023.08.03</summary>

- stage2-1 작성완료 (2564 lines)
- stage2-2 step1 작성중
  구조정리
- UI: ClubMenu, MemberMenu
- coordination: ClubWindow, MemberWindow ClubCoordinator, MemberCoordinator
- storage: ClubMemberStore, TravelClubStore, MapStorage

# <summary>2023.08.04</summary>

- stage2-2 작성완료
- stage2-3 작성완료
- stage3-1 구조분석중

# <summary>2023.08.06</summary>

- stage3-1 step1 구조파악 및 작성완료

# <summary>2023.08.07</summary>

-stage3-1 step2 작성완료
mainmenu: showMenu()

- clubmenu: register(), modify(), remove(), showMenu()
  - membershipmenu: findclub(), add(), find(), modify(), remove()
- MemberMenu: register(), find(), modify(), remove()
- boardmenu: register(), findByName(), modify(), remove(), showMenu()
  - postingmenu: findBoard(), register(), findByBoardId(), find(), modify(), remove()
- stage3-1 step3 작성중
  ClubConsole -> ServiceLogicLycler.shareInstance(),createClubService()
  class ServiceLogicLycler implements ServiceLycler(각종 서비스 객체생성 추상메소드)
  class ClubServiceLogic implements ClubService(메뉴의 기능 관련 추상메소드)

# <summary>2023.08.08</summary>

- stage3-1 step3 작성완료
- stage3-1 step4 구조작성, 작성중

# <summary>2023.08.09</summary>

- stage3-1 step4 작성완료
- stage3-2 step2 작성중

# <summary>2023.08.10</summary>

- stage3-2 step4 작성완료
- stage3-3 step3 작성중

# <summary>2023.08.11</summary>

- stage3-3 step4 작성완료
- stage3 step4 레이어별 정리

# <summary>정리노트</summary>

- implements 상속
  - 멤버 메뉴로 예시
  - MemberMenu.ts에서 register()메소드로 MemberConsole.ts 이동.
  - MemberConsole에서 MemberServiceLogic.ts으로 이동해야됨
  - 이때, memberService를 선언해주고 생성자로 초기화
    - ServiceLogicLycler는 모든 service들(ClubService, MemberService, BoardService, PostingService)가 선언 되어 있음
      ```tsx
      clubService: ClubService | null;
          memberService: MemberService | null;
          boardService: BoardService | null;
          postingService: PostingService | null;

          private constructor() {
            //
            this.clubService = null;
            this.memberService = null;
            this.boardService = null;
            this.postingService = null;
          }
      ```
    - **또한, ServiceLycler를 상속받아 interface와 동일한 메소드로 구성되어 있는지 확인한다.**
      - `implements` 키워드는 새로운 클래스의 모양을 동일하게 정의하고 싶을 때 사용한다. 따라서, interface로 정의한 값들은 모두 필수적으로 들어가야 하며, 하나라도 빠질 경우 에러를 반환한다. 타입으로 지정한 메서드 모두 내부에서 재정의가 필요하다.(https://www.howdy-mj.me/typescript/extends-and-implements)
- 싱글톤 패턴 분석
  - this.memberService = ServiceLogicLycler.shareInstance().createMemberService();
    - ServiceLogicLycler 클래스에 instance가 private으로 선언되어 내부에서만 접근 가능하게 되어있음
    - 생성자도 private 처리되어 있어 외부에서 인스턴스를 생성할수없게 되어있음
    - shareInstance()를 호출해야만 인스턴스를 외부에서 생성할수있음.
    ```tsx
    private static lycler: ServiceLycler;

       private constructor() {
          //
          this.clubService = null;
          this.memberService = null;
          this.boardService = null;
          this.postingService = null;
        }

    static shareInstance(): ServiceLycler {
            //
            if (!this.lycler) {
              this.lycler = new ServiceLogicLycler();
            }

            return this.lycler;
          }
    ```
- DTO는 왜 쓰는가?
  - 중요한 정보를 노출없이 두 시스템 사이에 통신을 할수있게 함
  - DTO라는 이동수단으로 데이터를 왔다갔다 한다
  - 이 프로젝트에서는 entity의 정보를 바꾸지 않기위해 사용된다. 데이터 변질이 될수 있으니
- toCommunityMember()의 존재이유
  - memberDTO로 데이터전송을 하기때문에 registration()을 진행하여 memberMap에 set할때 이런 에러가 나온다. memberDTO와 CommunityMember로 이루어진 memberMap의 value는 완전히 같지않기 때문에 CommunityMember 객체로 바꾸어 넣어주어야한다.
  - 이렇게 바꾸어주는 과정을 toCommunityMember 맡고있다.
  ```tsx
  Argument of type 'MemberDTO' is not assignable to parameter of type 'CommunityMember'.
    Property 'getId' is missing in type 'MemberDTO' but required in type 'CommunityMember'.ts(2345)
  ```
  - 바꾸는 방식
    - 호출
    ```tsx
    this.memberMap.set(newMember.email, newMember.toCommunityMember());
    ```
    - 변경방식
    1. CommunityMember 객체에 newMember에 설정된 값 memberdto의 값을 넣고 생성
    2. 나머지도 설정
    3. membershipList라는 멤버쉽리스트를 갖고있는 array에 담기

       ```tsx
       toCommunityMember(): CommunityMember {
               //
               const member = new CommunityMember(this.email, this.name, this.phoneNum);

               member.nickname = this.nickname;
               member.birthday = this.birthday;

               for (const membershipDto of this.membershipList) {
                 member.membershipList.push(membershipDto.toMembership());
               }

               return member;
             }
       ```

       1. membershipdto또한 entity인 ClubMembership 으로 변환 되어야하기에 toClubMembership()을 호출
       2. ClubMembership으로 객체생성 및 현재 값으로 설정해서 리턴

          ```tsx
          //clubMembership 객체 생성 및 초기화 해서 리턴
              toClubMembership(): ClubMembership {
                //27. 현재 clubId와 member email로 객체 생성
                const membership = new ClubMembership(this.clubId, this.memberEmail);

                //28. role과 가입일 설정
                membership.role = this.role;
                membership.joinDate = this.joinDate;

                //29.clubmembership 객체 리턴
                return membership;
              }
          ```

    4. CommunityMember로 된 객체 리턴
- toMemberDTO의 존재이유
  - toCommunityMember() 의 반대로 CommunityMember 타입을 memberDTO로 값을 넣어서 리턴하는 과정. 형식은 같다
- filter()
  - given condition과 맞는 element들을 포함한 array로 반환
  - 이 예제에서는 filter()에서 posting.boardId 와 boardId가 맞는 posting만 담은 array가 반환되고, 이 array에서 map()으로 다시 targetPosting으로 하나씩때와서 toPostingDTO(targeposting)로 형변환 해주는 과정이다.
- map()
  - for문으로 하나씩 때오는 작업과 같은 작업을 수행
  - map(때온 요소 ⇒ 결과);
  ```tsx
  findByBoardId(boardId: string): PostingDto[] {
        //
        const foundBoard = this.boardMap.get(boardId);

        if (!foundBoard) {
          throw new Error('\n> No such a board with id --> ' + boardId);
        }

        const postings = Array.from(this.postingMap.values());

        return postings.filter(posting => posting.boardId === boardId)
                       .map(targetPosting => PostingDto.toPostingDTO(targetPosting));
      }

  let arr = [3, 4, 5, 6];

  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * 3;
  }

  let modifiedArr = arr.map(function(element){
      return element *3;
  });
  ```

작성법

- 시스템 끼리 데이터 전송은 DTO로 한다
- interface인 Services, Stores, Map은 싱글톤으로 ServiceLogics, MapStores, MapStorage에서 관리한다

개선점

- membership 메뉴는 멤버만 사용 접근가능하게 하기?
- membershipList는 클럽과 멤버양쪽에 update필요, Membership을 분리한다면?
  ```tsx
  foundClub.membershipList.push(clubMembership);
  this.clubStore.updateMembership(foundClub);

  foundMember.membershipList.push(clubMembership);
  this.memberStore.updateMembership(foundMember);
  ```
- findMembership() 할때 멤버존재여부 확인
- modifyMembership()의 _this_.clubStore.update(targetClub);는 수정된 부분이 없는데 의미가 있는가?
- boardview posting 기능 console 스킵 괜찮은 것인가?
- 댓글은 아무나 달수있다. 이것이 맞나?
-

데이터 저장 중요포인트

- 멤버는 email이 고유번호
- 클럽은 usid가 고유번호
- 게시판의 고유번호와 클럽의 고유번호는 같다
- 게시글의 고유번호와 댓글의 고유번호는 같다

### VO 정리

**bold처리 이름**: 고유번호

class

- 클럽: TravelClub
  - name, intro, foundDate, boardId, membershipList: ClubMembershipList[], **clubId**
  - setName(): 글자길이 체크
  - setIntro(): 글자길이 체크
  - setAutoId() : 클럽고유번호 등록
    ```
    setAutoId(autoId: string): string {
            this.clubId = autoId;
        }
    ```
  - getId(): 고유번호 가져오기
    ```
    getId(){
            return this.clubId;
        }
    ```
- 멤버: CommunityMember
  - **email**, name, nickName, phoneNum, birthDay, addressList: Address[], membershipList: ClubMembershipList[]
  - getId(): 고유번호 가져오기
- 멤버쉽: ClubMembership
  - **clubId**, memberEmail, role,joinDate
- 게시판: SocialBoard
  - **boardId**, boardName, adminEmail, createdDate, seq
  - getId(): 고유번호 가져오기
  - get nextPostingId(): 게시판 번호 반환
    - _return_ `${*this*.clubId} : ${*this*.seq++}`;
- 게시글: Posting
  - **uniqueId**, title, writerEmail, contents, writtenDate, readCount, boardId, seq
  - getId(): 고유번호 가져오기
  - get nextCommentId(): _return_ `${*this*.uniqueId} : ${*this*.sequence++}`;
- 댓글: Comments
  - **uniqueId**, writer, contents, writtenDate
  - getId(): 고유번호 가져오기
- 주소: Address
  - postalCode, jibunAddress, streetAddress, country, addressType

enum

- AddressType
- RoleInClub

interface

- AutoIdEntity: TravelClub의 getId(), setAutoId()
  - setAutoId()
  - getId()
- Entity: getId() 인터페이스
  - getId()

Util

- today(): 오늘 날짜 설정
  ```
  const date = new Date();
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDay();

          return `${year}.${this.formatNum(month)}.${this.formatNum(day)}`;

  private static formatNum(n: number){
          return n<10 ? `0${n}` : n;
      }
  ```

### **Menu정리**

- displayMenu(): 출력
- selectMenu(): 메뉴선택
- exitProgram(): 프로그램 종료

### Console정리

- ClubConsole
  - registerClub(): void = 클럽 등록
  - findClubByName(): void = 클럽 이름검색
  - checkClubByName(): ClubDto | null = 클럽 존재여부 확인(클럽 이름검색)
  - modifyClub():void = 클럽 수정
  - removeClub():void = 클럽 삭제
- MemberConsole
  - registerMember(): void = 멤버 등록
  - findMemberByEmail(): void = 멤버 이메일검색
  - checkMemberByEmail(): MemberDto | null = 멤버 존재여부 확인(멤버 이메일검색)
  - modifyMember(): void = 멤버 수정
  - deleteMember():void = 멤버 삭제
- ClubMembershipConsole
  - hasCurrentClub(): string | null = 현재 클럽설정 여부확인
  - addMembership(): void = 멤버쉽 등록
  - findClubByName(): void = 클럽 이름검색(클럽 설정)
  - checkMembershipByEmail(): void = 멤버쉽 중복체크(클럽 멤버쉽검색 클럽고유번호와 멤버이메일)
  - modifyMembership(): void = 멤버쉽 수정
  - checkMembershipByEmail(): ClubMembershipDto | null = 멤버쉽 존재여부 확인(멤버 이메일검색)
  - removeMembership(): void = 멤버쉽 삭제
- BoardConsole
  - checkClubByName(): ClubDto | null = 클럽 존재여부 확인(클럽 이름검색)
  - registerBoard(): void = 게시판 등록
  - findBoardByBoardName(): void = 게시판 게시판이름검색
  - findAllBoards(): void = 모든 게시판 리스트출력 & BoardView로 이동
  - selectBoardNumber(totalNumOfBoard: number): number: number = 특정 게시판 선택
  - checkBoardByClubName(): BoardDto | null = 클럽 게시판 보유 확인(게시판 클럽이름검색)
  - modifyBoard(): 게시판 수정
  - removeBoard(): 게시판 삭제
- PostingConsole
  - findBoardByClubName(): void = 게시판 찾기( 클럽이름검색)
  - registerPosting(): 게시글 등록
  - findPostingByBoardId(): void = 게시글 게시판 고유번호 검색
  - findPostingById(): void = 게시글 게시글 고유번호검색
  - checkPostingById(): PostingDto | null = 게시글 존재여부(게시글 게시글고유번호검색)
  - modifyPosting(): 게시글 수정
  - removePosting(): 게시글 삭제

Service 작성법

각각의 service interface(ClubService.ts) → interface services.ts (createClubService(): Clubservice) → ServiceLogics.ts(싱글톤 서비스 객체 공유)

MapStore에서 리턴은 entity

ServiceLogic에서 리턴은 dto

### CRUD 핵심기능

ClubMenu

- register(): void
  - Console
    - question() 유저 input
    - 객체에 값 담아 넘어가기
  - ServiceLogic implements Service
    - 중복체크 retrievebyName()
      - dto의 클럽이름 담고 넘어가기
        - MapStore implements Store
          - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
          - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
    - dto를 entity로 변환
    - entity 담아 넘어가기
  - MapStore implements Store
    - 중복체크 get()
    - 새클럽고유번호 설정: autoIdMap 에 클럽아이디를 key로 usid를 value로 set()
    - 새클럽설정: clubMap.set(club.getId(), club);
    - 고유번호 return
- find(): ClubDto | null
  - console
    - question() 유저 input
    - 이름값 담아 넘어가기
  - ServiceLogic implements Service
    - 중복체크 retrievebyName()
      - dto의 클럽이름 담고 넘어가기
        - MapStore implements Store
          - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
          - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
      - entity를 dto로 바꿔서 return
- modify(): void
  - console
    - 타겟클럽 객체 찾기: findOne()
      - console
        - question() 유저 input
        - 이름값 담아 넘어가기
      - ServiceLogic implements Service
        - 중복체크 retrieveByUsId()
          - dto의 클럽이름 담고 넘어가기
            - MapStore implements Store
              - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
              - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
          - entity를 dto로 바꿔서 return
        - retrieveByUsId()
          - 고유번호값 담아 넘어가기
            - MapStore implements Store
              - _return_ _this_.clubMap.get(usid) || null;
    - question() 유저 input
    - 객체에 값 담아 넘어가기
  - ServiceLogic implements Service
    - 중복체크 retrievebyName()
      - dto의 클럽이름 담고 넘어가기
        - MapStore implements Store
          - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
          - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
      - entity를 dto로 바꿔서 return
    - 고유번호로 클럽 가져오기: retrieve()
      - 클럽고유번호 담고 넘어가기
        - MapStore implements Store
          - get()으로 return
    - 가져온 dto에 값설정
    - dto를 entity로 바꿔서 넘어가기
  - MapStore implements Store
    - clubMap.set(고유번호, entity객체) 설정
- delete(): void
  - console
    - 타겟클럽 객체 찾기: findOne()
      - console
        - question() 유저 input
        - 이름값 담아 넘어가기
      - ServiceLogic implements Service
        - 중복체크 retrievebyName()
          - dto의 클럽이름 담고 넘어가기
            - MapStore implements Store
              - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
              - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
          - entity를 dto로 바꿔서 return
    - question() 유저 input
    - usid 고유번호 들고 넘어가기
  - ServiceLogic implements Service
    - 고유번호로 클럽존재여부 확인
      - MapStore implements Store
        - get(usid) 으로 있으면 boolean 리턴
  - MapStore implements Store
    - 있으면 고유번호로 삭제
    - delete(usid) 삭제
- showMenu() → ClubMembershipMenu
  - findClub(): void
    - Console
      - question() 유저 input
      - clubName담아 넘어가기
        - ServiceLogic implements Service
          - 클럽이름으로 찾아오기 retrieveByName()
          - dto에서 entity로 바꿔서 return
        - MapStore implements Store
          - array.from(this.clubMap.values())
          - return clubMap.find(club ⇒ [club.name](http://club.name) === 받아온 클럽이름)
      - clubdto 담아와서 현재클럽에 저장 this.currentClub = clubFound
  - addMembership(): void
    - Console
      - question() 유저 input
      - dto객체에 새값 담고 넘어가기
    - ServiceLogic implements Service
      - 유효성검사
        - email로 맴버존재여부 확인 memberStore.retrieveByEmail()
          - MapStore implements Store
            - email 담아서 넘어가기
              - MapStore implements Store
                - return memberMap.get(email)
          - 가져온 entity를 dto로 변환해서 return
        - clubName으로 클럽존재여부 확인 clubStore.retrieve()
          - MapStore implements Store
            - _return_ _this_.clubMap.get(clubId) || null;
        - 중복체크 멤버쉽 find()
          - membershipList에서 email이 같은 membership find()
      - \*\*클럽과 멤버 양쪽 다해줘야됨
        - 받아온 dto를 entity로 바꾸어서 membershipList push
        - 멤버쉽이 추가된 객체들을 store에 넣기위해 담아서 이동 update()
    - MapStore implements Store
      - clubStore.update()
        - set(고유번호, 객체)
      - memberStore.update()
        - set(email, 객체)
  - findMembership(): void
    - Console
      - 현재클럽 설정 여부 hasCurrentClub()
        - this.currentClub 있으면 이름 return, 없으면 null
      - question() 유저 input
      - 현재 클럽고유번호와 email을 담고 넘어가기
    - ServiceLogic implements Service
      - 클럽객체를 고유번호로 가져오기 retrieveByUsId()
        - MapStore implements Store
          - _return_ _this_.clubMap.get(usid) || null;
      - 현재 클럽객체와 멤버email을 담아 getMembership()
        - membershipList를 for문으로 돌려서 멤버email 같은 객체를 return
  - modify(): void
    - Console
      - 현재클럽 설정 여부 hasCurrentClub()
        - this.currentClub 있으면 이름 return, 없으면 null
      - 타겟멤버쉽 가져오기 findOne()
        - console
          - question() 유저 input
          - 현재 클럽고유번호와 email을 담고 넘어가기
        - ServiceLogic implements Service
          - 현재 클럽객체 고유번호로 가져오기 retrieveByUsId()
            - MapStore implements Store
              - _return_ _this_.clubMap.get(usid) || null;
          - 현재 클럽객체와 멤버email을 담아 getMembership()
            - membershipList를 for문으로 돌려서 멤버email 같은 객체를 return
      - question() 유저 input: newRole
      - 클럽고유번호와 타겟멤버쉽 담아 넘어가기
    - ServiceLogic implements Service
      - 업데이트할 클럽 고유번호로 가져오기 retrieveByUsId()
        - MapStore implements Store
          - _return_ _this_.clubMap.get(usid) || null;
      - 타겟 클럽객체와 받아온 dto의 멤버email을 담아 getMembership()
        - membershipList를 for문으로 돌려서 멤버email 같은 객체를 return
      - targetClub.memberList에 접근해서 클럽고유번호가 같은 클럽멤버쉽으로 filter()하고 그 멤버쉽들을 newRole로 map()으로 업데이트
      - 타겟 클럽객체를 보내 클럽 update()
      - 타겟 멤버 email로 가져오기 retrieveByEmail()
        - email 담아서 넘어가기
          - MapStore implements Store
            - return memberMap.get(email)
      - targetMember.memberList에 접근해서 클럽고유번호가 같은 클럽멤버쉽으로 filter()하고 그 멤버쉽들을 newRole로 map()으로 업데이트
      - 타겟 맴버객체를 보내 클럽 update()
    - MapStore implements Store
      - MapStore implements Store
        - clubStore.update()
          - set(고유번호, 객체)
      - MapStore implements Store
        - memberStore.update()
          - set(email, 객체)
  - remove(): void
    - console
      - 현재클럽 설정 여부 hasCurrentClub()
        - this.currentClub 있으면 이름 return, 없으면 null
      - 타겟멤버쉽 가져오기 findOne()
        - console
          - question() 유저 input
          - 현재 클럽고유번호와 email을 담고 넘어가기
        - ServiceLogic implements Service
          - 현재 클럽객체 고유번호로 가져오기 retrieveByUsId()
            - MapStore implements Store
              - _return_ _this_.clubMap.get(usid) || null;
          - 현재 클럽객체와 멤버email을 담아 getMembership()
            - membershipList를 for문으로 돌려서 멤버email 같은 객체를 return
      - 타겟멤버쉽 email 담아서 넘어가기
    - ServiceLogic implements Service
      - 타겟클럽 찾기 retrieveByUsId()
        - MapStore implements Store
          - _return_ _this_.clubMap.get(usid) || null;
      - 타겟멤버 찾기 retrieveByEmail()
        - email 담아서 넘어가기
          - MapStore implements Store
            - return memberMap.get(email)
      - 타겟멤버쉽 찾기 getMembership()
        - membershipList를 for문으로 돌려서 멤버email 같은 객체를 return
      - membershipList에서 찾은 클럽 넣어서 indexof()로 위치 찾기
        - foundClub.membershipList.indexof(clubMembership);
      - membershipList에서 찾은 멤버 넣어서 indexof()로 위치 찾기
        - foundMember.membershipList.indexof(clubMembership);
      - membershipList로 splice(찾은 클럽위치, 1);
        - foundClub.membershipList.splice(clubIndex, 1)
      - membershipList로 splice(찾은 멤버위치, 1);
        - foundMember.membershipList.splice(memberIndex, 1)

MemberMenu

- register(): void
  - console
    - question() 유저 input
    - dto객체에 값 담아 넘어가기
  - ServiceLogic implements Service
    - 중복체크 retrievebyEmail()
      - email값 담아 넘어가기
      - MapStore implements Store
        - get(email) return
    - dto를 entity로 바꾼 객체를 담아 넘어가기
  - MapStore implements Store
    - 고유번호로 중복체크 get(member.getId())
    - memberMap.set(고유번호, entity객체)
    - 고유번호 return
- find(): void
  - console
    - question() 유저 input
    - email값 담아서 넘어가기
  - ServiceLogic implements Service
    - 중복체크 retrieveByEmail()
      - email 담아서 넘어가기
        - MapStore implements Store
          - return memberMap.get(email)
    - 가져온 entity를 dto로 변환해서 return
- modify(): void
  - console
    - 타겟멤버 가져오기: findOne()
      - console
        - question() 유저 input
        - email값 담아 넘어가기
      - ServiceLogic implements Service
        - 중복체크 retrieveByEmail()
          - dto의 클럽이름 담고 넘어가기
            - MapStore implements Store
              - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
              - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
          - entity를 dto로 바꿔서 return
    - question() 유저 input
    - dto를 담아 넘어가기
  - ServiceLogic implements Service
    - 타겟멤버 가져오기 retrieveByEmail()
      - dto의 클럽이름 담고 넘어가기
        - MapStore implements Store
          - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
          - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
      - entity를 return
    - entity와 새 dto의 값을 비교하며 설정
    - 새 dto를 entity로 바꾸어 담어 넘어가기
  - MapStore implements Store
    - memberMap.set(email, entity)
- delete(): void
  - console
    - 타겟멤버 가져오기: findOne()
      - console
        - question() 유저 input
        - email값 담아 넘어가기
      - ServiceLogic implements Service
        - 중복체크 retrieveByEmail()
          - dto의 클럽이름 담고 넘어가기
            - MapStore implements Store
              - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
              - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
          - entity를 dto로 바꿔서 return
    - question() 유저 input
    - email를 담아 넘어가기
  - ServiceLogic implements Service
    - email로 멤버존재여부 확인: exists()
      - MapStore implements Store
        - return memberMap.get(email)
    - email값 담아 넘어가기
  - MapStore implements Store
    - memberMap.delete(email)

BoardMenu

- register(): string
  - Console
    - 클럽선택 findClub()
      - console
        - question() 유저 input
        - 이름값 담아 넘어가기
      - ServiceLogic implements Service
        - 중복체크 retrievebyName()
          - dto의 클럽이름 담고 넘어가기
            - MapStore implements Store
              - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
              - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
          - entity를 dto로 바꿔서 return
    - question() 유저 input: newBoardName, adminEmail
    - 새값들을 보내 entity로 객체 newBoard 생성
    - newBoard에 새게시판이름과 관리자이메일 담아서 boarddto생성
    - boarddto담아서 넘어가기
  - ServiceLogic implements Service
    - 게시판 중복체크 retrieveBoard()
      - dto의 게시판 고유번호(=클럽고유번호) 담고 넘어가기
      - MapStore implements Store
        - retrieveBoard()
          - get(boardId) | null
    - 클럽존재여부 retrieveByUsId()
      - dto의 클럽이름 담고 넘어가기
        - MapStore implements Store
          - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
          - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
      - entity를 dto로 바꿔서 return
    - 타겟클럽의 멤버이메일 존재여부 getMembershipBy()
      - Entity: TravelClub
        - membershipList를 for문으로 돌려서 새멤버이메일 === 기존이메일이면 return
    - boarddto를 entity로 변환하여 넘어가기
  - MapStore implements Store
    - 게시판 중복체크 retrieveBoard()
      - dto의 게시판 고유번호(=클럽고유번호) getId()담고 넘어가기
      - MapStore implements Store
        - retrieveBoard()
          - get(boardId) | null
    - set(고유번호, 게시판 객체)
    - 고유번호 return
- find(): void
  - Console
    - question 유저 input
    - boardName 보내 넘어가기
    - boardList를 받은 다음, for문으로 index번호와 함께 출력
  - ServiceLogic implements Service
    - boardName을 보내어 배열로 받아오기 위해 넘어가기
  - MapStore implements Store
    - Array.from 으로 boardMap의 모든 배열가지고 오기
    - 가지고온 boardList를 filter(board ⇒ board.boardName === boardName) 같이 게시판 이름이 같은 board만 담은 배열 return
- modify()
  - Console
    - 타겟 게시판 찾기 findBoardByClubName()
      - question 유저 input: clubname
      - clubname담아서 넘어가기
        - ServiceLogic implements Service
          - 클럽존재여부 확인 retrievebyName()
            - dto의 클럽이름 담고 넘어가기
              - MapStore implements Store
                - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
                - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
            - entity를 dto로 바꿔서 return
          - 게시판 고유번호로 타겟 게시판 가져오기 retrieveBoard()
            - dto의 게시판 고유번호(=클럽고유번호) getId()담고 넘어가기
              - MapStore implements Store
                - retrieveBoard()
                  - get(boardId) | null
          - 받아온 entity 게시판 객체를 dto로 변환하여 return
    - question 유저 input: newBoardName, newAdminEmail
    - 받은 타겟게시판에 boardName과 adminEmail 삽입 후 보내어 넘어가기
  - ServiceLogic implements Service
    - 해당 게시판 존재여부 retrieveBoard()
      - dto의 게시판 고유번호(=클럽고유번호) 담고 넘어가기
      - MapStore implements Store
        - retrieveBoard()
          - get(boardId) | null
      - 해당 게시판이 있을경우 target게시판과 받은 dto의 boardName과 관리자email을 같게 대입
    - 클럽존재여부 retrieveByUsId()
      - dto의 클럽이름 담고 넘어가기
        - MapStore implements Store
          - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
          - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
      - entity를 dto로 바꿔서 return
    - 타겟클럽의 멤버이메일 존재여부 getMembershipBy()
      - Entity: TravelClub
        - membershipList를 for문으로 돌려서 새멤버이메일 === 기존이메일이면 return
    - 받은 dto 를 entity로 변환하여 넘어가기
  - MapStore implements Store
    - set(entity의 getId()로 게시판 고유번호, entity)
- remove()
  - Console
    - 타겟 게시판 찾기 findBoardByClubName()
      - question 유저 input: clubname
      - clubname담아서 넘어가기
        - ServiceLogic implements Service
          - 클럽존재여부 확인 retrievebyName()
            - dto의 클럽이름 담고 넘어가기
              - MapStore implements Store
                - clubMap 모든 클럽 가져오기: array.from(this.clubMap.values());
                - 모든클럽에서 find()로 클럽이름이 일치하는 객체 return
            - entity를 dto로 바꿔서 return
          - 게시판 고유번호로 타겟 게시판 가져오기 retrieveBoard()
            - dto의 게시판 고유번호(=클럽고유번호) getId()담고 넘어가기
              - MapStore implements Store
                - retrieveBoard()
                  - get(boardId) | null
          - 받아온 entity 게시판 객체를 dto로 변환하여 return
    - question 유저 input: confirmation
    - 클럽 고유번호 담고 넘어가기 remove()
  - ServiceLogic implements Service
    - 해당 게시판 존재여부 retrieveBoard()
      - dto의 게시판 고유번호(=클럽고유번호) 담고 넘어가기
      - MapStore implements Store
        - retrieveBoard()
          - get(boardId) | null
    - 고유번호 담고 넘어가기 delete()
  - MapStore implements Store
    -
- findAll() → showMenu() → BoardView
  - Console
    - 바로 넘어가기 (let boardList = _this_.boardService.findAllBoards();)
    - return 받은 boardList를 출력
      - console.clear() 로 콘솔창 내용제거
      - forEach문으로 select할수있게 index번호와 함께 board 하나씩 출력되도록 함
        ```tsx
        boardList.forEach((board, index) => {
          let menuNumber = index + 1; //index가 0부터 시작해서
          console.log(`   ${menuNumber}. ${board.boardName}`);
        });
        ```
    - 게시판 선택을 위해 selectBoardNumber() 에 boardList.length를 담아 호출
      - question 유저 input
      - 해당 번호 return
    - 받은 게시판 번호에서 인덱스는 0부터 시작이므로 -1 해서 BoardView()에 담아 객체생성
    - boardView.showMenu()호출
  - ServiceLogic implements Service
    - 바로 넘어가기 let boardList = _this_.boardService.findAllBoards();
    - boardList에 있는 entity를 dto로 map()을 사용하여 바꿔서 return
  - MapStore implements Store
    - Array.from 으로 boardMap의 모든 배열 return

BoardView

- register()
  - Menu
    - question 유저 input: 게시글 제목, 게시글 작성자 member email, 게시글 내용
    - 유저의 input을 담은 postingDto 생성
    - dto를 보내어 넘어가기
  - ServiceLogic implements Service
    - 타겟 클럽 존재여부 확인 retrieveByUsId()
    - 타겟 게시판 존재여부 확인 retrieveBoard()
    - 멤버쉽 존재여부 확인 getMembershipBy()
    - dto를 entity로 변환하여 넘어가기 create()
  - MapStore implements Store
    - 게시글 고유번호로 게시글 중복체크 get(posting.getId())
    - postingMap에 set(게시글 고유번호, posting entity)
- findAll()
  - menu
    - 현재 게시판의 클럽 고유번호를 보내 넘어가기 findbyBoardId()
      - ServiceLogic implements Service
        - 해당 게시판 존재여부 retrieveBoard()
          - dto의 게시판 고유번호(=클럽고유번호) 담고 넘어가기
          - MapStore implements Store
            - retrieveBoard()
              - get(boardId) | null
        - 받아온 고유번호를 보내 넘어가기 retrieveBoardId()
        - 받아온 배열의 요소 하나씩 entity에서 dto로 map()을 활용하여 변환 후 return
      - MapStore implements Store
        - Array.from(_this_.postingMap.values()); 로 게시글 전부 가져오기
        - filter()로 고유번호가 같은 배열요소만 return
    - 가져온 게시글들을 출력
      - return 받은 postings를 출력
        - console.clear() 로 콘솔창 내용제거
        - forEach문으로 select할수있게 index번호와 함께 board 하나씩 출력되도록 함
          ```tsx
          postings.forEach((post, index) => {
            let menuNumber = index + 1;
            console.log(" " + menuNumber + ". " + postings[index].title);
          });
          ```
      - 게시판 선택을 위해 selectPostingNumber() 에 postings.length를 담아 호출
        - question 유저 input
        - 해당 번호 return
      - 받은 게시판 번호에서 인덱스는 0부터 시작이므로 -1 해서 PostingView()에 담아 객체생성
      - PostingView.showMenu()호출

PostingView

- register()
  - Menu
    - question 유저 input: 댓글 작성자, 댓글 내용
    - 유저의 input을 담은 commentDto 생성
    - this.posting.usid 고유번호와 dto를 보내어 넘어가기
  - ServiceLogic implements Service
    - 타겟 게시글 고유번호로 존재여부 확인 retrieve()
    - dto를 entity로 변환하여 넘어가기 create()
  - MapStore implements Store
    - 댓글 고유번호로 게시글 중복체크 get(posting.getId())
    - postingMap에 set(댓글 고유번호, comment entity)
- findAll()
