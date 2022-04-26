import React from 'react';

import { Container, Progress } from './styles';
import { SharedProps } from '../../shared/types';

export type ProgressBarProps = SharedProps & {
  /**
   * List of class names to pass along to spinner component.
   */
  className?: string;

  /**
   *  Value between 0 and 100 (inclusive) that determines the width of the progress meter. Values below 0 or above 100 will be interpreted as 0 or 100 respectively.
   */
  value: number;

  /**
   * Progress height size
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const progressValue = (value: number) => {
  if (value > 100) {
    return 100;
  } else if (value < 0) {
    return 0;
  }

  return value;
};

const ProgressBar = ({
  appearance,
  value,
  className,
  size = 'md',
}: ProgressBarProps) => {
  if (!appearance)
    throw new Error(
      'ProgressBar appearence must be one of this [primary, secondary, success, warning, danger, light]'
    );

  value = progressValue(value);

  return (
    <Container size={size}>
      <Progress appearance={appearance} value={value} className={className} />
    </Container>
  );
};

export { ProgressBar };
