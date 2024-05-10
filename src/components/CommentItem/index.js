import {formatDistanceToNow} from 'date-fns'
import './index.css'
const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, date, initialClassName} = commentDetails
  const isNamed = name ? name[0].toUpperCase() : ''
  const likeComment = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const datePosted = formatDistanceToNow(date)
  const onClickLikeButton = () => {
    const {likeButton} = props
    likeButton(id)
  }
  const onDeleteButton = () => {
    const {deleteButton} = props
    deleteButton(id)
  }
  return (
    <li className="list-container">
      <div className={initialClassName}>
        <p className="main-heading">{isNamed}</p>
      </div>
      <div className="container">
        <h1 className="heading">{name}</h1>
        <p className="para">{datePosted} ago</p>
      </div>
      <div>
        <p className="para">{comment}</p>
      </div>
      <div className="contain">
        <div>
          <img src={likeComment} className="image" alt="like" />
          <button className="button" onClick={onClickLikeButton}>
            like
          </button>
        </div>
        <button className="button" onClick={onDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="button"
            alt="delete"
          />
        </button>
      </div>
      <hr className="hr-container" />
    </li>
  )
}
export default CommentItem
