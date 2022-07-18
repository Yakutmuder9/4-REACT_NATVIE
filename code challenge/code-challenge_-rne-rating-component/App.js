import * as React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Card, Rating } from 'react-native-elements';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      submittedMessage: ''
    }
  }

  handleSubmit() {
    this.setState({submittedMessage: `Submitted Rating: ${this.state.rating}`})
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text>Overall Rating</Text>
          <Rating 
              startingValue={3}
              imageSize={20}
              readonly
              type={'rocket'}
              ratingCount={10}
              style={{alignItems: 'center', padding: 10}}
          />
          <Text>Submit Your Rating</Text>
          <Rating
              imageSize={20}
              startingValue={this.state.rating}
              type={'rocket'}
              fractions={1}
              ratingCount={10}
              showRating
              style={{alignItems: 'center'}}
              onFinishRating={rating => this.setState({rating: rating})}
          />
          <View style={{margin: 20}}>
            <Button
                color='#5637DD'
                title='Submit'
                onPress={this.handleSubmit}
            />
          </View>
          <View style={{margin: 10}}>
            <Text>
              {this.state.submittedMessage}
            </Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
