import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, FlatList, Alert, View, ActivityIndicator, RefreshControl } from 'react-native';
import { getUserDetails, UserData } from '../../redux/actions/userAction';
import UserItem from '../../components/user/user-item';
import { styles } from './styles';
import { UserItemModal } from '../../models/user-model';

type UserDataItem = {
  UserData: User;
};

type User = {
  userList: UserItemModal[];
  userLoadMore: boolean;
  isLoading: boolean;
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: UserDataItem) => state.UserData);
  const [arrUserList, setArrUserList] = useState([]);
  const [
    onEndReachedCalledDuringMomentum,
    setonEndReachedCalledDuringMomentum,
  ] = useState(false);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const loadMoreRandomData = () => {
    dispatch(getUserDetails(true));
  };

  useEffect(() => {
    if (user.userLoadMore) {
      setArrUserList([...arrUserList, ...user.userList]);
    } else {
      setArrUserList(user.userList);
    }
  }, [user]);

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        {user.isLoading ? (
          <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
        ) : null}
      </View>
    );
  };

  const onFavoritePress = (index: number) => {
    const { userList } = user;
    let arrayList = [...userList];
    if (arrayList[index].isFavorite) {
      arrayList[index].isFavorite = false;
    } else {
      arrayList[index].isFavorite = true;
    }
    dispatch(UserData(arrayList));
  };

  const onEndReached = async () => {
    if (!onEndReachedCalledDuringMomentum) {
      await setonEndReachedCalledDuringMomentum(true);
      await loadMoreRandomData();
    }
  };

  const renderItem = (item: UserItemModal, index: number) => {
    return (
      <UserItem
        key={index}
        item={item}
        onFavoritePress={() => {
          onFavoritePress(index);
        }} />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={user.userList}
        renderItem={({ item, index }) =>
          renderItem(item, index)
        }
        keyExtractor={item => item.login.uuid}
        refreshControl={
          <RefreshControl
            refreshing={user.isLoading}
            onRefresh={() => dispatch(getUserDetails())}
          />
        }
        onEndReachedThreshold={0.00001}
        onMomentumScrollBegin={() => {
          setonEndReachedCalledDuringMomentum(false);
        }}
        onEndReached={() => onEndReached()}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
