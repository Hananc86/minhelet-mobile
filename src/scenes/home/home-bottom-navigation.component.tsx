import React from 'react';
import { BottomNavigationTab, Divider } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { BrandBottomNavigation } from '../../components/brand-bottom-navigation.component';
import { ColorPaletteIcon, LayoutIcon, StarOutlineIcon, SettingsIcon } from '../../components/icons';

export const HomeBottomNavigation = (props): React.ReactElement => {

  const onSelect = (index: number): void => {
    props.navigation.navigate(props.state.routeNames[index]);
  };

  return (
    <SafeAreaLayout insets='bottom'>
      <Divider/>
      <BrandBottomNavigation
        appearance='noIndicator'
        selectedIndex={props.state.index}
        onSelect={onSelect}>
        <BottomNavigationTab
          title='פרופיל'
          icon={LayoutIcon}
        />
        <BottomNavigationTab
          title='סטטיסטיקות משתמש'
          icon={StarOutlineIcon}
        />
        <BottomNavigationTab
          title='הגדרות'
          icon={SettingsIcon}
        />
      </BrandBottomNavigation>
    </SafeAreaLayout>
  );
};
