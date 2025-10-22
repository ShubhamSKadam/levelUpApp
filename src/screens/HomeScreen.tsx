import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../components/common/Header';
import UserStatus from '../components/UserStatus';
import AreaProgress from '../components/AreaProgress';

const HomeScreen = () => {
    return (
        <View style={styles.mainView}>
            <Header />
            <UserStatus />
            <AreaProgress />
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'black',
    },
});





