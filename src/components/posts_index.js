import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import { bindActionCreator, bindActionCreators } from 'redux';
import _ from 'lodash';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        })
    }

    render() {
        //console.log(this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts };
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// export default connect(null, mapDispatchToProps )(PostsIndex);

//This is same as sbove two
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);