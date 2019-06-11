import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../components/Button';

const stories = storiesOf('Components|Button', module);

stories.add('Default', () => {
  return (
    <>
      <p>
        <Button>Button No Link</Button>
      </p>
      <p>
        <Button to="/">Button With Link</Button>
      </p>
    </>
  );
});