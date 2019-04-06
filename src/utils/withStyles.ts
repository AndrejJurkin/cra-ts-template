import * as React from 'react';
import injectSheet from 'react-jss';

export default function withStyles<T>(
  component: React.ElementType<T>,
  styles: object,
): React.ElementType<T> {
  return injectSheet(styles)(component);
}
