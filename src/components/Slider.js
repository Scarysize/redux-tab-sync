import preact from 'preact';
import {connect} from 'preact-redux';

import {updateSlider} from '../ducks/slider';

class Slider extends preact.Component {
  onChange(event) {
    const {value} = event.target;

    this.props.dispatch(updateSlider(value));
  }

  render(props) {
    return (
      <div>
        <input
          max="100"
          min="0"
          onInput={event => this.onChange(event)}
          type="range"
          value={props.value}
        />
        <div
          style={{
            textAlign: 'center'
          }}
        >
          {props.value}
        </div>
      </div>
    );
  }
}

export default connect(({slider}) => {
  return {
    value: slider
  };
})(Slider);
