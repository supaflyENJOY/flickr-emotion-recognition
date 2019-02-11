import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

const FilterWrapper = styled.div`
  background-color: #dddddd;
  border-bottom: 2px solid #cccccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 85px;
  width: 100%;
  flex-wrap: wrap;
  height: auto;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 15px 0 15px;
  p {
    width: 67px;
    height: 19px;
    font-family: Muller;
    font-size: 19px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #777777;
  }
`;
const useStyles = makeStyles({
  root: {
    width: '18px',
    height: '18px',
    '&$checked': {
      color: '#007464'
    }
  },
  checked: {}
});

function Checkboxes({ onFiltersChanged }) {
  const classes = useStyles();

  const [state, setState] = useState({
    sadness: false,
    neutral: false,
    disgust: false,
    anger: false,
    surprise: false,
    happiness: false,
    fear: false
  });

  const handleChange = name => event => {
    const newState = { ...state, [name]: event.target.checked };
    setState(newState);
    onFiltersChanged(newState);
  };

  return (
    <FilterWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.sadness}
          onChange={handleChange('sadness')}
          value="sadness"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Sadness</p>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.neutral}
          onChange={handleChange('neutral')}
          value="neutral"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Neutral</p>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.disgust}
          onChange={handleChange('disgust')}
          value="disgust"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Disgust</p>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.anger}
          onChange={handleChange('anger')}
          value="anger"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Anger</p>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.surprise}
          onChange={handleChange('surprise')}
          value="surprise"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Surprise</p>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.happiness}
          onChange={handleChange('happiness')}
          value="happiness"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Happiness</p>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <Checkbox
          checked={state.fear}
          onChange={handleChange('fear')}
          value="fear"
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
        />
        <p>Fear</p>
      </CheckboxWrapper>
    </FilterWrapper>
  );
}

export default Checkboxes;
