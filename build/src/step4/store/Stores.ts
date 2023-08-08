interface Stores{
    requestMemberStore(): MemberStore;
    requestClubStore(): ClubStore;
    requestBoardStore(): BoardStore;
    requestPostingStore(): PostingStore;
    requestCommentStore(): CommentStore;
}
export default Stores