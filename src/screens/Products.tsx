import {useProducts, useSearchProducts} from '@hooks/index';
import React, {useCallback, useRef} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Wrapper} from '@components/index';
import {Product} from '@domain/models/Product';
import {ProductCard, EmptyProducts, Header} from '@components/Product';
import {COLORS, commonStyles} from '@constants';

const Products = () => {
  const flatListRef = useRef<FlatList>(null);
  const {isLoading, productList} = useProducts();
  const {filteredProducts, isFiltering, query, setQuery} =
    useSearchProducts(productList);

  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  const renderItem = useCallback(({item}: {item: Product}) => {
    return <ProductCard product={item} />;
  }, []);

  return (
    <Wrapper>
      <View style={commonStyles.basicFlex}>
        <Header query={query} setQuery={setQuery} />
        <FlatList
          ref={flatListRef}
          data={filteredProducts}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListEmptyComponent={
            <EmptyProducts isLoading={isLoading || isFiltering} />
          }
          numColumns={2}
          columnWrapperStyle={styles.column}
          contentContainerStyle={styles.container}
          bounces={false}
          // refreshing={refreshing}
          // onRefresh={onRefresh}
          // onEndReached={loadMoreItems}
          // onEndReachedThreshold={0.1}
          // ListFooterComponent={
          //   isLoadingMore ? (
          //     <View style={commonStyles.loadingMoreContainer}>
          //       <ActivityIndicator size="large" color={COLORS.BLACK} />
          //     </View>
          //   ) : null
          // }
        />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  column: {
    columnGap: 10,
    justifyContent: 'space-between',
  },
  header: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    color: COLORS.BLACK,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Products;
