import preact from 'preact';
import {connect} from 'preact-redux';

import {updateMap} from '../ducks/map';

const accessToken = 'pk.eyJ1Ijoic2NhcnlzaXplIiwiYSI6ImNpcjR2ZWs4ODAwNDZoc25xMmRzM2JlcnQifQ.XmRVjMqDm9jUWw3eMYrrUw';
window.mapboxgl.accessToken = accessToken;

class Map extends preact.Component {
  init(container) {
    if (container && !this.initialized) {
      this.initialized = true;

      this.map = new mapboxgl.Map({
        container: container,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: this.props.center,
        zoom: this.props.zoom
      });

      this.map.on('move', () => {
        this.props.dispatch(updateMap(
          this.map.getCenter(),
          this.map.getZoom()
        ));
      });
    }
  }

  componentWillReceiveProps({center, zoom}) {
    this.map.setCenter(center);
    this.map.setZoom(zoom);
  }

  shouldComponentUpdate() {
    if (this.initialized) {
      return false;
    }

    return true;
  }

  render(props) {
    return (
      <div style={{
        position: 'relative',
        height: 300,
        width: 300
      }}>
        <div
          className="map"
          ref={item => this.init(item)}
        />
      </div>
    );
  }
}

export default connect(({map}) => {
  return {
    center: map.center,
    zoom: map.zoom
  };
})(Map);
