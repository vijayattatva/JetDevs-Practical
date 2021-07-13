import React from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { images } from '../../assets';
import { UserItemModal } from '../../models/user-model';
import { styles } from './styles';

interface UserItemProps {
  item: UserItemModal;
  onFavoritePress: () => void;
}

export default function UserItem(props: UserItemProps) {
  const { item, onFavoritePress } = props;
  return (
    <View
      style={styles.main}>
      <View style={styles.container}>
        <Image
          source={{ uri: item.picture.medium }}
          style={styles.userImage}
        />
        <View style={styles.nameView}>
          <Text >{`Name: ${item.name.first + ' ' + item.name.last}`}</Text>
          <Text style={styles.gender}>{"Gender: " + item.gender}</Text>
        </View>
        <TouchableOpacity onPress={onFavoritePress}>
          <Image source={item.isFavorite ? images.heartFilled : images.heart} style={styles.favIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}