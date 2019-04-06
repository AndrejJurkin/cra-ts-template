import * as React from 'react';
import withStyles from '../../utils/withStyles';
import { cx } from '../../utils/exports';

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      marginRight: props => props.spacing || 16,
    },
  },
};

interface ParentProps {
  classes: any;
}

interface OwnProps {
  children: React.ReactNode;

  // Space between row children
  spacing?: number;

  // Classes to be applied to a root container
  className?: string;

  // Wrapper element
  wrapper?: React.ElementType;
}

type Props = OwnProps & Partial<ParentProps>;

function Row({ classes, children, className, wrapper }: Props) {
  const Wrapper = wrapper || 'div';
  return <Wrapper className={cx(classes.root, className)}>{children}</Wrapper>;
}

// Visible for testing
export const PureComponent = Row;

export default withStyles(Row, styles);
