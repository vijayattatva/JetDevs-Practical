import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, FlatList } from 'react-native';
import { UserData } from '../../redux/actions/userAction';
import UserItem from '../../components/user/user-item';
import { UserItemModal } from '../../models/user-model';

type UserDataItem = {
  UserData: User;
};

type User = {
  userList: UserItemModal[];
};

const FavoriteScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: UserDataItem) => state.UserData);
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    if (user.userList && user.userList.length > 0) {
      let arrayList = user.userList.filter((data: UserItemModal) => data.isFavorite === true);
      setFavoriteList(arrayList);
    }
  }, [user.userList]);

  const onFavoritePress = (id: string) => {
    const { userList } = user;
    let arrayList = [...userList];
    let index = userList.findIndex((obj: UserItemModal) => obj.login.uuid === id);
    if (arrayList[index].isFavorite) {
      arrayList[index].isFavorite = false;
    } else {
      arrayList[index].isFavorite = true;
    }
    dispatch(UserData(arrayList));
  };

  const renderItem = (item: UserItemModal, index: number) => {
    return (
      <UserItem
        key={index}
        item={item}
        onFavoritePress={() => {
          onFavoritePress(item.login.uuid);
        }} />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={favoriteList}
        renderItem={({ item, index }) =>
          renderItem(item, index)
        }
        keyExtractor={(item: UserItemModal) => item.id}
      />
    </SafeAreaView>
  );
};

export default FavoriteScreen;
