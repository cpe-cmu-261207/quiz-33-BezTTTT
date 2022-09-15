import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";
import Reply from "../components/Reply";

export default function Home() {
  return (
    <div>
      <PostOwner />
      {comments.map((x) => (
        <Comment
          user={x.username}
          img={x.userImagePath}
          com={x.commentText}
          like={x.likeNum}
          rep={x.replies}
        />
      ))}
    </div>
  );
}
