import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class Counter extends PureComponent {

  state = {
    hours: "00",
    minutes: "00",
    seconds: "00",
    start: new Date(),
    interval: () => {}
  };

  updateClock = () => {
    const { start } = this.state
    const timer = Date.now() - start
  
    let hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timer / (1000 * 60)) % 60);
    let seconds = Math.floor((timer / 1000) % 60);
    this.setState(prevState => ({
      ...prevState,
      hours: hours > 9 ? hours : `0${hours}`,
      minutes: minutes > 9 ? minutes : `0${minutes}`,
      seconds: seconds > 9 ? seconds : `0${seconds}`
    })); 
  };

  componentDidMount() {
    this.updateClock();
    let intervalId = setInterval(this.updateClock, 1000);
    this.setState(prevState => ({ ...prevState, intervalId: intervalId }))
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    return(
      <View>
        <View style={styles.container}>
          <Text style={styles.time}>
            {`${hours}:${minutes}:${seconds}`}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    position: "absolute",
    left: 10,
    bottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  time: {
    color: "#fff",
    fontSize: 20
  },
})

export default Counter;
