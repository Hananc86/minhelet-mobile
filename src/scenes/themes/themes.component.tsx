import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Divider, List, ThemeProvider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ThemeCard } from './theme-card.component';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { Theme, ThemeContextValue, Theming } from '../../services/theme.service';
import { appThemes } from '../../app/app-themes';
import { MenuIcon } from '../../components/icons';
const themes: string[] = Object.keys(appThemes).filter(theme => theme !== 'brand');

export const ThemesScreen = (props): React.ReactElement => {
  const renderDrawerAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={props.navigation.toggleDrawer}
    />
  );

  const themeContext: ThemeContextValue = React.useContext(Theming.Context);

  const renderItem = (info: ListRenderItemInfo<Theme>): React.ReactElement => (
    <ThemeProvider theme={appThemes[info.item]}>
      <ThemeCard
        style={styles.item}
        title={info.item.toUpperCase()}
        disabled={themeContext.currentTheme === info.item}
        onPress={() => themeContext.setCurrentTheme(info.item)}
      />
    </ThemeProvider>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'
      level='2'>
      <TopNavigation
        title='Minhelet League'
        alignment='center'
        leftControl={renderDrawerAction()}
      />
      <Divider/>
      <List
        contentContainerStyle={styles.container}
        data={themes}
        renderItem={renderItem}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  item: {
    margin: 8,
  },
});
