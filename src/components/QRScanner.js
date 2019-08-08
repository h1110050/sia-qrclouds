/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { Spinner } from './common';
import { mainBaseColor } from '../Constants';
import { TextStyle, Absolute } from '../StyleSheet';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: mainBaseColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Spinner fontSize="large" />
  </View>
);

class QRScanner extends Component {
  constructor(props) {
    super(props);
    this.camera = null;

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },
      read: false
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { read, loading, scanResult } = this.state;
    const { location, qrDocID, counter } = this.props;

    if (prevState.read !== read) {
      switch (read) {
        case true:
          this.props.onQRScan();
          break;
        case -1:
          Alert.alert(
            'Wrong QR Code',
            'Are you at the right place?',
            [
              { text: 'Cancel', onPress: () => this.setState({ read: false, loading: false }) }
            ],
          );
          break;
        default:
      }
    }
    if (loading && prevState.loading !== loading) {
      this.onLoading();
    }
  }

  onBarCodeRead(scanResult) {
    this.setState({ scanResult: scanResult, loading: true });
  }

  onLoading() {
    const { read, scanResult } = this.state;
    const { docID, redeemed, docType, qrDocID } = this.props;

    if (redeemed) { // failsafe
      Alert.alert(
        'Already Redeemed!',
        'You have already redeemed this',
      );
      Actions.pop();
    } else {
      console.log('read');
      if (scanResult.data && !read) {
        let qrLink = 'https://outsideapp.co/';
        qrLink = qrLink.concat(docType, '/');
        if (scanResult.data.indexOf(qrLink) !== -1) {
          const qrID = scanResult.data.slice(23 + docType.length, -1);
          const multiDocID = qrDocID.slice(0, -1);
          console.warn(qrID);
          console.warn(multiDocID);
          if (qrID === multiDocID) {
            this.setState({ read: true });
          } else {
            this.setState({ read: -1 });
          }
        } else {
          console.log(`${scanResult.type} ${scanResult.data}`);
          this.setState({ read: -1 });
        }
      }
    }
    return null;
  }

  renderSpinner() {
    const { loading } = this.state;

    if (loading) {
      return (
        <View style={[Absolute.CenteredContent, { backgroundColor: 'rgba(1,1,1,0.6)' }]}>
          <Spinner fontSize="large" />
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          defaultTouchToFocus
          mirrorImage={false}
          style={styles.preview}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
          onBarCodeRead={this.state.read ? null : this.onBarCodeRead.bind(this)}
          barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        >
          {({ status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={styles.overlay}>
                {this.props.children}
                {this.renderSpinner()}
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: mainBaseColor,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default QRScanner;
