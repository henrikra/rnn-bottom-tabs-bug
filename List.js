import React from "react";
import { FlatList, Text } from "react-native";

const items = Array.from({ length: 100 }).map(index => ({ key: index }));

class List extends React.Component {
  renderItem = () => <Text>Hello</Text>;

  keyExtractor = (_, index) => index.toString();

  render() {
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default List;
