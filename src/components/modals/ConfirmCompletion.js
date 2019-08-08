import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ModalCard from '../common/ModalCard';
import { TextButton } from '../buttons/Button';
import { TextStyle } from '../../StyleSheet';
import { mainColor, fontSize } from '../../Constants';


class ConfirmCompletion extends Component {
  render() {
    const { closeAction, confirmAction } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <ModalCard>

          {/* modal head */}
          <Text style={[TextStyle.Regular, sectionEnd, { textAlign: 'center', fontSize: fontSize.L }]}>Mark task as completed?</Text>

          {/* Buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TextButton text="no" onPress={closeAction} />
            <TextButton text="yes" color={mainColor} onPress={confirmAction} />
          </View>

        </ModalCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionEnd: {
    marginBottom: 25,
  }
});

const { sectionEnd } = styles;

export default ConfirmCompletion;
