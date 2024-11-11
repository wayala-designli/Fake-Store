import Search from '@assets/Search';
import {COLORS} from '@constants';
import {IProductsHeader} from '@domain/models/Product';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Header = ({query, setQuery}: IProductsHeader) => {
  return (
    <View>
      <View style={styles.searchContainer}>
        <Search />
        <TextInput
          placeholder="Search product..."
          placeholderTextColor={COLORS.GREY}
          style={styles.searchText}
          value={query}
          onChangeText={text => setQuery(text)}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  searchText: {
    marginLeft: 10,
    color: COLORS.BLACK,
    padding: 0,
    width: '100%',
    fontSize: 16,
  },
});
