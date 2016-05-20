import React, { Component } from 'react';

// import components
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import { connect } from 'react-redux';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// import provider
import { mapStatsScreen } from '../providers/providers.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5979A8',
    borderBottomColor: '#CFE5FC',
    borderBottomWidth: 2,
  },
  listView: {
    backgroundColor: '#5979A8',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    backgroundColor: '#CFE5FC',
  },
  username: {
    fontSize: 14,
    color: '#FFFCE9',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    flex: 0.3,
  },
  points: {
    fontSize: 12,
    color: '#FFFCE9',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    flex: 0.2,
  },
  wins: {
    fontSize: 12,
    color: '#FFFCE9',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    flex: 0.2,
  },
  emojicoins: {
    fontSize: 12,
    color: '#FFFCE9',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 10,
    flex: 0.3,
  },
  thumbnail: {
    width: 43,
    height: 43,
  },
});

/**
 * StatsScreen is a React class component.
 * It displays the stats - like username, current points, wins, total points -
 * for each participant in a particular game.
 */
class StatsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.playerStats),
    });
  }

  renderPlayer(player) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: player.picture }}
          style={styles.thumbnail}
        />
        <Text style={styles.username}>{player.username}</Text>
        <Text style={styles.points}>{player.roundsWon}</Text>
        <Text style={styles.wins}>{player.gamesWon}</Text>
        <Text style={styles.emojicoins}>{player.emojicoins}</Text>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.thumbnail} />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.points}>Points</Text>
        <Text style={styles.wins}>Wins</Text>
        <Text style={styles.emojicoins}>Emojicoins</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPlayer}
        renderHeader={this.renderHeader}
        style={styles.listView}
        enableEmptySections={true}
      />
    );
  }
}

/**
 * StatsScreenContainer is a 'container component' which binds the props and
 * actions creators of StatsScreen to the store and dispatcher, respectively.
 * It should be imported in favor of HomeScreen, which is exported only
 * for documentation purposes.
 */
const StatsScreenContainer = connect(
  mapStatsScreen.mapStateToProps,
  mapStatsScreen.mapDispatchToProps
)(StatsScreen);

export default StatsScreenContainer;
