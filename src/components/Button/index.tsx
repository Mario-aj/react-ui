/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Spinner } from '..';

import { Container } from './styles';

type Props = {
  /**
   * The label of the button.
   */
  label: string;

  /**
   * The classes of the button.
   */
  className?: string;

  /**
   * Disabled state of the button.
   */
  disabled?: boolean;

  /**
   *  Outlined state of the button.
   */
  outlined?: boolean;

  /**
   * Loading state of the button.
   */
  loading?: boolean;

  /**
   *  Set the icon to be shown to the left of the label.
   */
  startIcon?: React.ReactNode;

  /**
   * Set the icon to be shown to the right of the label.
   */
  endIcon?: React.ReactNode;

  /**
   * type of button element
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The size of button.
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Define if button will stretch to full width.
   */

  full?: boolean;

  /**
   * onClick handler of button.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * The appearance of the button.
   */
  appearance:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light';
};

const Button = ({
  label,
  endIcon,
  startIcon,
  type = 'button',
  size = 'md',
  loading = false,
  disabled = false,
  outlined = false,
  appearance = 'primary',
  ...props
}: Props) => {
  if (!appearance)
    throw new Error(
      'Button appearence must be one of this [primary, secondary, success, warning, danger, none]'
    );

  const spinnerAppearance = outlined && !disabled ? appearance : 'light';

  return (
    <Container
      appearance={appearance}
      outlined={outlined}
      disabled={disabled}
      type={type}
      size={size}
      {...props}
    >
      {loading && <Spinner appearance={spinnerAppearance} size="sm" />}
      {!loading && startIcon && startIcon}
      {label}
      {!loading && endIcon && endIcon}
    </Container>
  );
};

export type { Props as ButtonProps };
export { Button };
