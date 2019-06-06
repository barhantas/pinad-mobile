import React from "react";
import { connect } from "react-redux";
import { Container, Text, Input } from "native-base";
import { WebView } from "react-native";

class Map extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <WebView
          originWhitelist={["*"]}
          source={{ uri: "https://mapchat-7244f.firebaseapp.com" }}
        />
      </Container>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
