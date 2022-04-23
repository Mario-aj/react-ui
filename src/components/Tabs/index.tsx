import * as React from 'react';

import { Container, Item } from './styles';

type Props = {
  /**
   * Class name of the component.
   */
  className?: string;

  /**
   * Array of tabs to render, each tab should have a label and an id.
   */
  tabs: Array<{
    label: string | React.ReactNode;
    id: string | number;
  }>;

  /**
   * The id of the tab that should be selected.
   */
  selectedTab?: string | number;

  /**
   * Color of the active tab.
   */
  indicatorColor?: string;

  /**
   * Color of the active tab text.
   */
  textColor?: string;

  /**
   * The appearance of the tab.
   */
  appearance?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light';
};

const Tabs = ({ tabs, selectedTab, textColor, ...props }: Props) => {
  const [selected, setSelected] = React.useState(selectedTab);

  return (
    <Container>
      {tabs.map(tab => (
        <Item
          key={tab.id}
          isActive={selected === tab.id}
          onClick={() => setSelected(tab.id)}
          color={textColor}
          {...props}
        >
          <span>{tab.label}</span>
          <div className="item-indicator" />
        </Item>
      ))}
    </Container>
  );
};

export type { Props as TabsProps };
export { Tabs };