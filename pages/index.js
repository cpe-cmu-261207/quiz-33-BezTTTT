import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";
import Reply from "../components/Reply";

export default function Home() {
  return (
    <div>
      <div
        style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
        className="p-3"
      >
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
    </div>
  );
}
