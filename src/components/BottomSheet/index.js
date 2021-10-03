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
        overlayStyle={styles.root}
        adjustToContentHeight={true}
        modalStyle={styles.modal}
        closeOnOverlayTap={true}
        panGestureEnabled={false}
        {...props}>
        {props.children}
      </RNModalize>
    </Portal>
  );
});
