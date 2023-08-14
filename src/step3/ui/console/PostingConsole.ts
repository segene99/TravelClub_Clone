import { question } from "readline-sync";
import ServiceLogicLycler from "../../logic/ServiceLogicLycler";
import PostingService from "../../service/PositngService";
import BoardDTO from "../../service/dto/BoardDTO";
import BoardService from "../../service/BoardService";
import PostingDTO from "../../service/dto/PostingDTO";

class PostingConsole{

    postingService: PostingService
    boardService: BoardService
    currentBoard: BoardDTO | null = null;
    constructor(){
        this.postingService = ServiceLogicLycler.shareInstance().createPostingService();
        this.boardService = ServiceLogicLycler.shareInstance().createBoardService();
    }

    findBoard(): void {
        const boardName = question('\n enter the board name to find(0. go back): ');

        if (boardName === '0') {
          return;
        }
  
        try {
          const boardDtos = this.boardService.findByName(boardName);
  
          let index = 0;
  
          for (const boardDto of boardDtos) {
            console.log(`\n [${index}] `, boardDto);
            index++;
          }
        }
        catch (e) {
          if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
          }
        }
    }
    register(): void {
        if(!this.currentBoard){
            console.log('board not found');
            return;
        }
        while(true){
            const email = question ('enter posting writer\'s email(0. go back): ');
            if(email === '0'){return;}
            const title = question('enter the posting title: ');
            const content = question('enter the posting content: ');
            try {
                const newPost = new PostingDTO(email, title, content);
                this.postingService.register(this.currentBoard.clubid, newPost);
            } catch (error) {
                
            }

        }
    }

    find(): void {
        if(!this.currentBoard){
            return;
        }
        let postingDTO = null;
        while(true){
            const postId = question('enter posting id to find post(0. back to menu): ');
            if(postId === '0'){
                break;
            }
            try {
                postingDTO = this.postingService.find(postId);
            } catch (error) {
                if(error instanceof Error) {
                    console.error(`Error: ${error.message}`);
                  }
            }
        }
    }
    findAll(): void {
        if(!this.currentBoard){
            return;
        }
        let index = 0;
        const postingList = this.postingService.findAll(this.currentBoard.clubid);
        for(const post of postingList){
            console.log(post)
            index++;
        }
    }
    modify(): void {
        if(!this.currentBoard){
            return;
        }
        const targetPost = this.findTarget();
        if(!targetPost){
            console.log('post not found');
            return;
        }

        const newTitle = question('enter the title(0.back to menu)');

        if (newTitle === '0') {
            return;
        }
        targetPost.title = newTitle;

        const newContent = question(' new posting contents (Enter. no change): ');
        targetPost.content = newContent;

        try {
            this.postingService.modify(targetPost);
            console.log('\n> Modified Posting : ', targetPost);
        }
        catch (e) {
            if(e instanceof Error) {
            console.error(`Error: ${e.message}`);
            }
        }

        
    }
    findTarget(): PostingDTO | null{
        if(!this.currentBoard){
            return null;
        }
        let postingDTO = null;
        while(true){
            const postId = question('enter posting id to find post(0. back to menu): ');
            if(postId === '0'){
                break;
            }
            try {
                postingDTO = this.postingService.find(postId);
            } catch (error) {
                if(error instanceof Error) {
                    console.error(`Error: ${error.message}`);
                  }
            }
        }  
        return postingDTO;  
    }
    remove(): void {
        const targetPosting = this.findTarget();

        if (!targetPosting) {
          return;
        }
  
        const confirmStr = question('Remove this posting in the board? (Y:yes, N:no): ');
  
        if (confirmStr.toLowerCase() === 'y' || confirmStr.toLowerCase() === 'yes') {
          //
          console.log('\n> Removing a posting -->' + targetPosting.title);
          this.postingService.remove(targetPosting.clubid);
        }
        else {
          console.log('\n> Remove cancelled, the posting is safe --> ' + targetPosting.title);
        }    
    }
    hasCurrentBoard(): string | null {
        let clubName = null;
        if(!this.currentBoard){
            return clubName;
        }
        clubName = this.currentBoard.clubName;
        return clubName;
    }

}
export default PostingConsole