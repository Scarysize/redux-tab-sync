import preact from 'preact';
import {connect} from 'preact-redux';

import {updateCursor} from '../ducks/cursor';

class Cursor extends preact.Component {
  constructor() {
    super();

    this.state = {isHovering: false};
  }

  componentDidMount() {
    document.body.addEventListener('mousemove', event => {
      this.props.dispatch(updateCursor(event.clientX, event.clientY));
    });

    document.body.addEventListener('mouseenter', () => {
      this.setState({isHovering: true});
    });

    document.body.addEventListener('mouseleave', () => {
      this.setState({isHovering: false});
    });
  }

  render(props, state) {
    return (
      <div>
        {
          !state.isHovering &&
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: 5,
              height: 5,
              borderRadius: '50%',
              backgroundColor: 'rgb(0, 0, 255)',
              pointerEvents: 'none',
              transform: `translate(${props.x}px, ${props.y}px)`
            }}
          />
        }
      </div>
    );
  }
}

export default connect(({cursor}) => {
  return {
    x: cursor.x,
    y: cursor.y
  };
})(Cursor);
