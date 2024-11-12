import {useProducts, useSearchProducts} from '@hooks/index';
import React, {useCallback, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Wrapper} from '@components/index';
import {Product} from '@domain/models/Product';
import {ProductCard, EmptyProducts, Header} from '@components/Product';
import {COLORS, commonStyles} from '@constants';
import UpArrow from '@assets/UpArrow';

const Products = () => {
  const flatListRef = useRef<FlatList>(null);
  const {
    isLoading,
    productList,
    loadMoreItems,
    onRefresh,
    isRefreshing,
    isLoadingMore,
  } = useProducts();
  const {
    filteredProducts,
    isFiltering,
    query,
    setQuery,
    loadMoreFilteredItems,
    isLoadingMoreFilteredProducts,
  } = useSearchProducts(productList);

  const onScrollToTop = () => {
    if (flatListRef.current && filteredProducts.length > 0)
      flatListRef.current.scrollToIndex({index: 0});
  };

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
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          onEndReached={query ? loadMoreFilteredItems : loadMoreItems}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoadingMore || isLoadingMoreFilteredProducts ? (
              <View style={commonStyles.loadingMoreContainer}>
                <ActivityIndicator size="large" color={COLORS.BLACK} />
              </View>
            ) : null
          }
        />
        {filteredProducts.length > 4 && (
          <TouchableOpacity
            style={styles.buttonToScroll}
            onPress={onScrollToTop}>
            <UpArrow />
          </TouchableOpacity>
        )}
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
  buttonToScroll: {
    position: 'absolute',
    zIndex: 5,
    bottom: 60,
    right: 20,
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: '50%',
  },
});

export default Products;
