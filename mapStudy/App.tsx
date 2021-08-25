import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, Alert} from 'react-native';

import MapView from 'react-native-maps';

const App = () => {
  const [region, setRegion] = useState({
    latitude: -23.5492243,
    longitude: -46.5813785,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const positionChange = (position: any) =>
    setRegion({
      latitude: position.latitude,
      longitude: position.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

  const clicou = (e: any) =>
    alert(
      'Latitude clicada: ' +
        e.nativeEvent.coordinate.latitude +
        ' Latitude clicada: ' +
        e.nativeEvent.coordinate.longitude,
    );

  return (
    <View style={styles.container}>
      <Text>
        {region.latitude} | {region.longitude}
      </Text>
      <MapView
        //  onMapReady={alert('AAAAA')}
        onRegionChangeComplete={positionChange}
        onPress={clicou}
        region={region}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: '100%',
    height: '95%',
  },
});

export default App;
