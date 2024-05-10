import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}
  deleteButton = commentId => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }
  likeButton = id => {
    this.setState(previous => ({
      commentList: previous.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }
  renderCommentList = () => {
    const {commentList} = this.state
    return commentList.map(each => (
      <CommentItem
        key={each.id}
        commentDetails={each}
        likeButton={this.likeButton}
        deleteButton={this.deleteButton}
      />
    ))
  }
  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackground = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
      initialClassName: initialBackground,
    }
    this.setState(previous => ({
      commentList: [...previous.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
    onChangeNameInput = event => {
      this.setState({nameInput: event.target.value})
    }
    onChangeCommentInput = event => {
      this.setState({commentInput: event.target.value})
    }
  }
  render() {
    const {nameInput, commentInput, commentList} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Comments</h1>
        <form className="form-container" onSubmit={this.onAddComment}>
          <p className="para">Say something about 4.0 Technologies</p>
          <input
            type="text"
            value={nameInput}
            onChange={this.onChangeNameInput}
            className="input-container"
          />
          <div>
            <textarea
              rows="8"
              className="text-container"
              value={commentInput}
              onChange={this.onChangeCommentInput}
            />
          </div>
          <button className="button" type="submit">
            Add Comment
          </button>
        </form>
        <hr className="horizontal-container" />
        <p className="para">
          <span className="span">{commentList.length}</span> Comments
        </p>
        <ul className="unorder-container">{this.renderCommentList()}</ul>
      </div>
    )
  }
}
export default Comments
