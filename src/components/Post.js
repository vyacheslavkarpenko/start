import React, { Component } from 'react';

  class Post extends Component {
    constructor(props) {
      super(props);
      this.state = {isOpen: true}
  }
   
    render() {
      const {article} = this.props
      const title = this.state.isOpen && article.title
      const body = this.state.isOpen && article.body
      const date = this.state.isOpen && 'Published: '+ article.date
      return (
        <div>
          <h3>
              {title}
          </h3>
          <p className="post_body">{body}</p>
          <h5 className="post_date">{date}</h5>

          <button onClick={this.handleClick}>
              {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </div>
       );
    }
  
    handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  
  }


export default Post;