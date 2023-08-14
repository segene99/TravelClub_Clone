import MapStores from '../map/MapStores';
import PostingDto from '../service/dto/PostingDto';
import PostingService from '../service/PostingService';
import BoardStore from '../store/BoardStore';
import ClubStore from '../store/ClubStore';
import PostingStore from '../store/PostingStore';


class PostingServiceLogic implements PostingService {
  boardStore: BoardStore;
  postingStore: PostingStore;
  clubStore: ClubStore;

  constructor() {
    this.boardStore = MapStores.getInstance().requestBoardStore();
    this.postingStore = MapStores.getInstance().requestPostingStore();
    this.clubStore = MapStores.getInstance().requestClubStore();
  }

  register(boardId: string, postingDto: PostingDto): string {
    const foundClub = this.clubStore.retrieveByUsId(boardId);

    if (!foundClub) {
      throw new Error('No such club with id --> ' + boardId);
    }

    const membership = foundClub.getMembershipBy(postingDto.writerEmail);

    if (!membership) {
      throw new Error('In the club, No such member with admin\'s email --> ' + postingDto.writerEmail);
    }

    const foundBoard = this.boardStore.retrieveBoard(boardId);

    if (!foundBoard) {
      throw new Error('No such board with id --> ' + boardId);
    }

    return this.postingStore.create(postingDto.toPosting(foundBoard));
  }

  find(postingId: string): PostingDto {
    const foundPosting = this.postingStore.retrieve(postingId);

    if (!foundPosting) {
      throw new Error('No such posting with id: ' + postingId);
    }
    return PostingDto.toPostingDTO(foundPosting);
  }

  findByBoardId(boardId: string): PostingDto[] {
    //
    const foundBoard = this.boardStore.retrieveBoard(boardId);

    if (!foundBoard) {
      throw new Error('No such board with id --> ' + boardId);
    }

    return this.postingStore.retrieveByBoardId(boardId).map(posting => PostingDto.toPostingDTO(posting));
  }

  modify(postingDto: PostingDto): void {
    //
    const postingId = postingDto.usid;

    const targetPosting = this.postingStore.retrieve(postingId);

    if (!targetPosting) {
      throw new Error('No such posting with id : ' + postingId);
    }

    if (!postingDto.title) {
      postingDto.title = targetPosting.title;
    }

    if (!postingDto.contents) {
      postingDto.contents = targetPosting.contents;
    }

    this.postingStore.update(postingDto.toPostingIn(postingId, targetPosting.boardId));
  }

  remove(postingId: string): void {
    //
    if (!this.postingStore.retrieve(postingId)) {
      throw new Error('No such posting with id: ' + postingId);
    }
    this.postingStore.delete(postingId);

  }

}
export default PostingServiceLogic;
