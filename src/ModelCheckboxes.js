import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ModelCheckboxesComponent extends React.Component {
  state = {
    activeIds: [],
  }

  render() {
    const { flagid, modellist, handleChangeCallback } = this.props;

    const { activeIds } = this.state;

    const models = modellist.map(model => (
      <FormGroup key={model.id}>
        <FormControlLabel
          control={(
            <Switch
              value={String(model.id)}
              checked={model.id === flagid || activeIds.includes(model.id)}
              onChange={handleChangeCallback(model.id)}
              color="primary"
            />
          )}
          label={model.name}
        />
      </FormGroup>
    ));

    return (
      <React.Fragment>
        {models}
      </React.Fragment>
    );
  }
}

ModelCheckboxesComponent.propTypes = {
  flagid: PropTypes.number.isRequired,
  handleChangeCallback: PropTypes.func.isRequired,
  modellist: PropTypes.object.isRequired,
};

export default ModelCheckboxesComponent;
