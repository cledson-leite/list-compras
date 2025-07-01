import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/styles/useColorScheme';
import { View } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
}) {
  return <FontAwesome size={props.size || 28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].secundarioBorda,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarIconStyle: { 
          transitionDuration: '0.5s', transitionTimingFunction: 'ease-in-out', transitionProperty: 'all' 
        },
        tabBarBackground: () => (
          <View style={{ 
            flex: 1, 
            backgroundColor: Colors[colorScheme ?? 'light'].principalPreenchimento,
          }} />
        ),
        headerShown: true,
        headerBackground: () => (
          <View style={{ 
            flex: 1, 
            backgroundColor: Colors[colorScheme ?? 'light'].principalPreenchimento,
          }} />
        ),
        headerTitleAlign: 'center',
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitleStyle: {
          fontFamily: 'Guchi',
          fontSize: 32
        }
      }}>
        <Tabs.Screen
        name="encontrados"
        options={{
          title: 'Encontrados',
          tabBarIcon: ({ color, focused, size }) => <TabBarIcon name="check-circle" color={color} size={focused ? 30 : size} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lista de Compras',
          tabBarIcon: ({ color, focused, size }) => <TabBarIcon name="list" color={color} size={focused ? 30 : size} />,
        }}
      />
      <Tabs.Screen
        name="historico"
        options={{
          title: 'Historico',
          tabBarIcon: ({ color, focused, size }) => <TabBarIcon name="history" color={color}  size={focused ? 30 : size}/>,
        }}
      />
    </Tabs>
  );
}
