import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}> 
      <LinearGradient
        colors={['#00c8f9', '#ffffff','#d0f3f6']}
        locations={[0, 0.2, 0.6]}
        start={{x: 0.5, y:1}}
        end={{x:0.5, y:0}}
        style={styles.background}
      />
      <View style={{width: 100, height: 100, borderRadius: 50, borderWidth:11, borderColor: 'black', alignSelf: 'center', marginVertical: 20, marginTop: 50}}> 
      </View>

      <Text style={{flex: 1,fontSize: 20, color: 'black', fontWeight:'bold', textAlign: 'center', marginTop: 30}}>
        GROW{"\n"}YOUR BUSINESS 
      </Text>

      <Text style={{flex: 1, fontSize: 14, color: 'black', fontWeight:'bold', textAlign: 'center'}}>
        We will help you to grow your business using online server 
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginBottom: 20, width: '90%'}}>
        <TouchableOpacity style={[styles.button, { borderRadius: 0}]}>
          <Text style={styles.buttonText}>LOGIIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { borderRadius: 0}]}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <Text style={{flex: 1, fontSize: 16, color: 'black', fontWeight:'bold', textAlign: 'center', marginBottom: 30}}>
        HOW WE WORK? 
      </Text>

    </View>
  );
}

var styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  background: {
    position: 'absolute',
    left: 0, 
    right: 0,
    top: 0,
    bottom: 0,
  },
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

