/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';

import { Container, Tab } from './styles';

type TabProps = {
  label: string | React.ReactNode;
  id: string | number;
};
type Props = {
  /**
   * Class name of the component.
   */
  className?: string;

  /**
   * Array of tabs to render, each tab should have a label and an id.
   */
  tabs: Array<TabProps>;

  /**
   * The id of the tab that should be selected.
   */
  selectedTab?: string | number;

  /**
   *
   */
  disabledTab?: Array<string> | Array<number>;

  /**
   * Callback function that is called when a tab is selected. The selected tab is passed as an argument.
   */
  onSelect?: (selectedTab: TabProps) => void;

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

const Tabs = ({
  tabs,
  selectedTab,
  textColor,
  disabledTab = [],
  onSelect,
  ...props
}: Props) => {
  const [selected, setSelected] = useState(selectedTab);

  const handleTabClick = useCallback(
    (tab: TabProps) => {
      if (!disabledTab.length) {
        setSelected(tab.id);
        onSelect && onSelect(tab);
      }

      if (disabledTab.length) {
        // @ts-ignore
        if (disabledTab.includes(tab.id)) return;
        setSelected(tab.id);
        onSelect && onSelect(tab);
      }
    },
    [disabledTab]
  );

  return (
    <Container>
      {tabs.map(tab => (
        <Tab
          key={tab.id}
          isActive={selected === tab.id}
          onClick={() => handleTabClick(tab)}
          color={textColor}
          // @ts-ignore
          disabled={disabledTab.includes(tab.id)}
          {...props}
        >
          <span>{tab.label}</span>
          <div className="tab-indicator" />
        </Tab>
      ))}
    </Container>
  );
};

export type { Props as TabsProps };
export { Tabs };
