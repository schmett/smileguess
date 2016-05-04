/* Import Dependencies */
import { connect } from 'react-redux';

/* Import Provider */
// define in provider
import { defineAction } from '../providers/providers.js';

/* Import Components */

// Keep this as it is until we have working components

import React, {
  Alert,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

const UIExplorerBlock = require('./UIExplorerBlock');

const alertMessage = 'Nice job, you win!';

class AlertBlock extends React.Component ({
  render: function() {
    return (
      <View>
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(alertMessage)}>
          <View style={styles.button}>
            <Text>I will not need this later on.</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  },
})

class AlertOfGameWon extends React.Component ({
  statics: {
    title: 'Alert',
    description: 'Display a concise and informative message',
  },
  render: function() {
    return (
      <UIExplorerBlock title={'Alert'}>
        <AlertBlock />
      </UIExplorerBlock>
    );
  },
});

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 10,
  },
});

module.exports = {
  AlertOfGameWon,
  AlertBlock,
};
