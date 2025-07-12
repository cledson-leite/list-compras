import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import {Colors} from '@/constants';
import { useColorScheme } from '@/styles/useColorScheme';
import { View} from 'react-native';
import ButtonHeaderScreen from '@/components/atomic/ButtonHeaderScreen';
import { useFabButtonActions } from '@/hooks/useFabButtonActions';
import { useListConfirmed } from '../../stores/useListConfirmed';
import { useEffect } from 'react';
import { useListPending } from '@/stores';
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size?: number;
}) {
  return <FontAwesome size={props.size || 28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {countConfirmed} = useListConfirmed()
  const {countList} = useListPending()

  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].secundarioBorda,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarIconStyle: { 
          transitionDuration: '0.5s', 
          transitionTimingFunction: 'ease-in-out', 
          transitionProperty: 'all',
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
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        headerTitleStyle: {
          fontFamily: 'GochiHand',
          fontSize: 32
        }
      }}>
        <Tabs.Screen
        name="encontrados"
        options={{
          title: 'Confirmados',
          tabBarIcon: ({ color, focused, size }) => {
            return(
              <View style={{ width: size, height: size }}>
                <TabBarIcon name="check-circle" color={color} size={focused ? 30 : size} />
                {countConfirmed > 0 && ( // Mostra o badge apenas se houver itens
                <View style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'red',
                }} />
              )}
              </View>
            )
        },
          headerRight: function (props) {
            const { handleAddHistory } = useFabButtonActions()
            if(countList > 0) return null
            return (
              <ButtonHeaderScreen type='sucesso' onPress={handleAddHistory}>
                <FontAwesome 
                  name="check" 
                  size={25} 
                  color={Colors[colorScheme ?? 'light'].textoPrincipal} 
                />
              </ButtonHeaderScreen>
            );
          },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lista de Compras',
          tabBarIcon: ({ color, focused, size }) => <TabBarIcon name="list" color={color} size={focused ? 30 : size} />,
          headerRight: function (props) {
            const { handleAddProduct } = useFabButtonActions()
            return (
              <ButtonHeaderScreen type='secundario' onPress={handleAddProduct}>
                <FontAwesome 
                  name="plus" 
                  size={25} 
                  color={Colors[colorScheme ?? 'light'].textoPrincipal} 
                />
              </ButtonHeaderScreen>
            );
          },
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
