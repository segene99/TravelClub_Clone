import { question } from 'readline-sync';
import BoardService from '../../service/BoardService';
import BoardDto from '../../service/dto/BoardDto';
import PostingDto from '../../service/dto/PostingDto';
import PostingService from '../../service/PostingService';
import ServiceLogics from '../../logic/ServiceLogics';


class PostingConsole {
    
    currentBoard: BoardDto | null
    boardService: BoardService;
    postingService: PostingService;

    constructor(currentBoard: BoardDto) {
      this.currentBoard = currentBoard;
      this.boardService = ServiceLogics.shareInstance().createBoardService();
      this.postingService = ServiceLogics.shareInstance().createPostingService();
    }

    findBoard(): void {
      let boardFound = null;

      while (true) {
        const clubName = question('\n club name to find a board (0. Posting menu): ');

        if (clubName === '0') {
          break;
        }

        try {
          boardFound = this.boardService.findBoardByClubName(clubName);
          console.log('\n> Found board: ', boardFound);
          break;
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
        boardFound = null;
      }
      this.currentBoard = boardFound;
    }

    register(): void {
      while (true) {
        const title = question('\n posting title (0.Posting menu): ');

        if (title === '0') {
          return;
        }
        const writerEmail = question(' posting writerEmail: ');
        const contents = question(' posting contents: ');

        try {
          if (this.currentBoard) {
            const postingDto = new PostingDto(title, writerEmail, contents);

            postingDto.usid = this.postingService.register(this.currentBoard.clubId, postingDto);
            console.log('\n> Registered a posting --> ', postingDto);
          }
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
      }
    }

    findByBoardId(): void {
      try {
        if (this.currentBoard) {
          const postings = this.postingService.findByBoardId(this.currentBoard.clubId);

          let index = 0;

          for (const postingDto of postings) {
            console.log(`[${index}] , ` + postingDto.postingDtoInfo);
            index++;
          }
        }
      }
      catch (e) {
        if(e instanceof Error) {
          console.error(`Error: ${e.message}`);
        }
      }
    }

    find(): void {
      let postingDto = null;

      while (true) {
        const postingId = question('\n posting id to find (0.Posting menu): ');

        if (postingId === '0') {
          break;
        }

        try {
          postingDto = this.postingService.find(postingId);
          console.log('\n> Found posting: ', postingDto);
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
      }
    }

    findOne(): PostingDto | null {
      let postingDto = null;

      while (true) {
        const postingId = question('\n posting id to find (0.Posting menu): ');

        if (postingId === '0') {
          break;
        }

        try {
          postingDto = this.postingService.find(postingId);
          console.log('\n> Found posting: ', postingDto);
          break;
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
        postingDto = null;
      }
      return postingDto;
    }

    modify(): void {
      const targetPosting = this.findOne();

      if (!targetPosting) {
        return;
      }

      const newTitle = question('\n new posting title (0.Posting menu, Enter. no change): ');

      if (newTitle === '0') {
        return;
      }
      targetPosting.title = newTitle;

      const contents = question(' new posting contents (Enter. no change): ');
      targetPosting.contents = contents;

      try {
        this.postingService.modify(targetPosting);
        console.log('\n> Modified Posting : ', targetPosting);
      }
      catch (e) {
        if(e instanceof Error) {
          console.error(`Error: ${e.message}`);
        }
      }

    }

    remove(): void {
      const targetPosting = this.findOne();

      if (!targetPosting) {
        return;
      }

      const confirmStr = question('Remove this posting in the board? (Y:yes, N:no): ');

      if (confirmStr.toLowerCase() === 'y' || confirmStr.toLowerCase() === 'yes') {
        //
        console.log('\n> Removing a posting -->' + targetPosting.title);
        this.postingService.remove(targetPosting.usid);
      }
      else {
        console.log(' > Remove cancelled, the posting is safe --> ' + targetPosting.title);
      }
    }

}
export default PostingConsole;
