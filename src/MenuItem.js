import React from 'react';

import PropTypes             from 'prop-types';
import {
  Platform,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
}                            from 'react-native';

const Touchable = Platform.select({
  android: TouchableNativeFeedback,
  default: TouchableHighlight,
});

function MenuItem({children, disabled, disabledTextColor, ellipsizeMode, onPress, style, textStyle, ...props}) {
  const touchableProps =
    Platform.OS === 'android'
      ? { background: TouchableNativeFeedback.SelectableBackground() }
      : {};

  return (
    <Touchable
       disabled={disabled}
       onPress={onPress}
       {...touchableProps}
       {...props}
    >
       {children}
    </Touchable>
   );
}

MenuItem.propTypes = {
  children: PropTypes.func,
  disabled: PropTypes.bool,
  disabledTextColor: PropTypes.string,
  ellipsizeMode: PropTypes.string,
  onPress: PropTypes.func,
  style: TouchableHighlight.propTypes.style,
  textStyle: Text.propTypes.style,
  underlayColor: TouchableHighlight.propTypes.underlayColor,
};

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#bdbdbd',
  ellipsizeMode: Platform.OS === 'ios' ? 'clip' : 'tail',
  underlayColor: '#e0e0e0',
};

export default MenuItem;
