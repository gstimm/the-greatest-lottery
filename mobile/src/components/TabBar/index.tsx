import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Container, TabView, TabLabel, SelectedBar, NewBetIcon, NewBetView } from './styles';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import colors from '../../utils/colors';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <Container style={styles.boxShadow}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const iconName = `${label.toLowerCase()}-outline`;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            canPreventDefault: true,
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (label === 'NewBet') {
          return (
            <TabView key={index} onPress={onPress}>
              <NewBetView style={styles.boxShadow}>
                <NewBetIcon
                  source={require('../../../assets/newbeticon.png')}
                />
              </NewBetView>
            </TabView>
          );
        }

        return (
          <TabView key={index} onPress={onPress} style={{ marginTop: isFocused ? 0 : 9 }}>
            {isFocused && <SelectedBar />}
            <MaterialCommunityIcons
              name={iconName}
              size={30}
              color={isFocused ? colors.lightGreen : colors.iconsGray}
            />
            <TabLabel style={{
              color: isFocused ? colors.titleGray : colors.iconsGray,
              fontWeight: isFocused ? 'bold' : 'normal',
            }}>
              {label}
            </TabLabel>
          </TabView>
        );
      })}
    </Container>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 1.0,
    shadowRadius: 20,
    elevation: 24,
  }
})


export default TabBar;
