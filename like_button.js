import styles from './css/style.css';
'use strict';


const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Our Story';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Our Story'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);