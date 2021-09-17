import React, {forwardRef} from 'react';
import {Modalize as RNModalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import styles from './styles';

export const BottomSheet = forwardRef((props, ref) => {
  return (
    <Portal>
      <RNModalize
        ref={ref}
        panGestureComponentEnabled={true}
        disableScrollIfPossible
        overlayStyle={styles.root}
        adjustToContentHeight={true}
        withHandle={true}
        modalStyle={styles.modal}
        avoidKeyboardLikeIOS={true}
        closeOnOverlayTap={true}
        // scrollViewProps={{ scrollEnabled: false, bounces: true }}
        panGestureEnabled={false}
        {...props}>
        {props.children}
      </RNModalize>
    </Portal>
  );
});
