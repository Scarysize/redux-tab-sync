import preact from 'preact';
import {connect} from 'preact-redux';

import {updateText} from '../ducks/text';

class Text extends preact.Component {
  onChange(event) {
    const {value} = event.target;

    this.props.dispatch(updateText(value));
  }

  render(props) {
    return (
      <div>
        <input
          onInput={event => this.onChange(event)}
          type="text"
          value={props.value}
        />
      </div>
    );
  }
}

export default connect(({text}) => {
  return {
    value: text
  };
})(Text);
