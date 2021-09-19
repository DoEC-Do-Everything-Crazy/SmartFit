import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Image, Switch} from 'react-native';

const Item = ({isSwitch, name, isPinCode}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Block paddingHorizontal={16}>
      <Block row alignCenter height={48} space="between">
        <Text size={16}>{name}</Text>
        {isSwitch ? (
          <Switch
            value={isEnabled}
            onValueChange={toggleSwitch}
            trackColor={{
              false: 'rgba(155, 155, 155, 0.3)',
              true: 'rgba(155, 155, 155, 0.3)',
            }}
            thumbColor={isEnabled ? '#2AA952' : theme.colors.white}
          />
        ) : (
          <Image source={icons.right} />
        )}
      </Block>
      {isPinCode ? (
        <Block
          row
          alignCenter
          height={48}
          borderRadius={8}
          marginVertical={8}
          paddingHorizontal={16}
          backgroundColor="#F9F9F9">
          <Image source={icons.lock} />
          <Text size={20} marginLeft={16}>
            * * * * * * * * * *
          </Text>
        </Block>
      ) : (
        <Block />
      )}
    </Block>
  );
};

const ItemFeature = ({data, title}) => {
  const renderItem = item => (
    <Item
      isSwitch={item.isSwitch}
      name={item.name}
      isPinCode={item.isPinCode}
    />
  );
  return (
    <Block marginHorizontal={16} marginBottom={10}>
      <Text size={18} fontType="bold">
        {title}
      </Text>
      <Block
        shadow
        marginTop={10}
        borderRadius={8}
        space="between"
        backgroundColor={theme.colors.white}>
        {data.map(renderItem)}
      </Block>
    </Block>
  );
};

export default ItemFeature;
