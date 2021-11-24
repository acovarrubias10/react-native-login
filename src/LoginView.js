import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      errorMessage: null,
    };
  }

  getLogin = () => {
    if (this.state.text1.length === 0) {
      return this.setState({
        ...this.state,
        errorMessage: 'El usuario no puede estar vacio',
      });
    }
    if (this.state.text2.length === 0) {
      return this.setState({
        ...this.state,
        errorMessage: 'La contraseña no puede estar vacia',
      });
    }
    this.setState({ ...this.state, errorMessage: null });
    Actions.home({ text1: this.state.text1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.jpeg')}
        />
        <Text>Usuario</Text>
        <TextInput
          style={styles.input}
          value={this.state.text1}
          onChangeText={(text) =>
            this.setState({ ...this.state, text1: text })
          }
        />
        <Text>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={this.state.text2}
          onChangeText={(text) =>
            this.setState({ ...this.state, text2: text })
          }
        />
        {this.state.errorMessage && (
          <Text style={styles.errorMessage}>
            {this.state.errorMessage}
          </Text>
        )}

        <Button
          onPress={this.getLogin}
          title='Login'
          color='#009DDC'
          accessibilityLabel='Login button'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 175,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 5,
    marginBottom: 10,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  errorMessage: {
    marginBottom: 10,
    color: 'red',
  },
});
