import type { ButtonProps } from './types';

import { cx } from '../../utils';

type PrepareButtonProps = {
  size: ButtonProps['size'];
  intent: ButtonProps['intent'];
  className: ButtonProps['className'];
  outlined: ButtonProps['outlined'];
};

const INTENT_CLASSES = {
  base: {
    all: 'flex items-center px-4 gap-3 justify-center py-1.5 transition-all duration-300 rounded shadow-sm text-base disabled:opacity-50 disabled:cursor-not-allowed',
    normal: 'text-white active:shadow-inner',
    outline: 'bg-white border border-solid',
  },
  primary: {
    normal:
      'bg-blue hover:bg-blue-500 active:bg-blue-600 disabled:hover:bg-blue disabled:active:bg-blue',
    outline:
      'text-blue border-blue hover:bg-blue-50 active:bg-blue-100 disabled:hover:bg-transparent disabled:bg-transparent',
  },
  secondary: {
    normal:
      'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 disabled:hover:bg-gray-500 disabled:active:bg-gray-500',
    outline:
      'text-gray-500 border-gray-500 hover:bg-gray-100 active:bg-gray-200 disabled:hover:bg-transparent disabled:active:bg-transparent',
  },
  success: {
    normal:
      'bg-green hover:bg-green-500 active:bg-green-600 disabled:hover:bg-green disabled:active:bg-green',
    outline:
      'text-green border-green hover:bg-green-50 active:bg-green-100 disabled:hover:bg-transparent disabled:active:bg-transparent',
  },
  warning: {
    normal:
      'bg-yellow hover:bg-yellow-500 active:bg-yellow-600 disabled:hover:bg-yellow disabled:active:bg-yellow',
    outline:
      'text-yellow border-yellow hover:bg-yellow-50 active:bg-yellow-100 disabled:text-yellow-dark disabled:hover:bg-transparent disabled:active:bg-transparent',
  },
  danger: {
    normal:
      'bg-red hover:bg-red-500 active:bg-red-600 disabled:hover:bg-red disabled:active:bg-red',
    outline:
      'text-red border-red hover:bg-red-50 active:bg-red-100 disabled:text-red-dark disabled:hover:bg-transparent disabled:active:bg-transparent',
  },
  none: {
    normal: 'text-gray-600 active:shadow-inner',
    outline: 'bg-gray-150',
  },
};

const prepareClassName = ({
  size,
  intent,
  className,
  outlined,
}: PrepareButtonProps) => {
  const styleVariant = outlined ? 'outline' : 'normal';

  return cx(
    'whitespace-nowrap',
    size === 'full' && 'w-full text-lg',
    size === 'small' && '!text-sm px-3',
    size === 'large' && 'text-lg px-5',
    INTENT_CLASSES.base.all,
    INTENT_CLASSES.base[styleVariant],
    INTENT_CLASSES[intent][styleVariant],
    className
  );
};

export { prepareClassName };