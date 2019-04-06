import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { PureComponent as Row, styles } from '../Row';
import jss from 'jss';

const defaultProps = {
  classes: jss.createStyleSheet(styles),
};

describe('Row', () => {
  it('should render without crashing', () => {
    shallow(<Row {...defaultProps}>Test</Row>);
  });
  it('matches previous snapshots', () => {
    expect(shallow(<Row {...defaultProps}>Test</Row>)).toMatchSnapshot('base');

    expect(
      mount(
        <Row {...defaultProps} spacing={24}>
          <p>Item 1</p>
          <p>Item 2</p>
        </Row>,
      ),
    ).toMatchSnapshot('with_spacing');
  });
});
