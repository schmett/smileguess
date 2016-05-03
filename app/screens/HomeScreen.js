/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
  },
});

const HomeScreen = ({ onJoinGame }) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button style={styles.button} onTouchEnd={onJoinGame}> Join Random Game! </Button>
    </View>
  </View>
);

HomeScreen.propTypes = {
  onJoinGame: PropTypes.func.isRequired,
};

export default HomeScreen;
