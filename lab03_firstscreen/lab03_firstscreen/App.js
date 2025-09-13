import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: '#00c8f9',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 11,
          borderColor: 'black',
          alignSelf: 'center',
          marginVertical: 20,
          marginTop: 50,
        }}></View>

      <Text
        style={{
          flex: 1,
          fontSize: 20,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 70,
        }}>
        GROW{'\n'}YOUR BUSINESS
      </Text>

      <Text
        style={{
          flex: 1,
          fontSize: 13,
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        We will help you to grow your business using online server
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        <TouchableOpacity style={[styles.button, { borderRadius: 7 }]}>
          <Text style={styles.buttonText}>LOGIIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderRadius: 7 }]}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  button: {
    backgroundColor: '#f5bf1d',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
