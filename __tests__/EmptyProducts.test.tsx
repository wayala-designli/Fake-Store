import React from 'react';
import {render} from '@testing-library/react-native';
import {EmptyProducts} from '@components/Product';

jest.mock('@assets/index', () => {
    const React = require('react');
    const { Text } = require('react-native');
    return {
      ProductNotFound: () => <Text>Product Not Found Icon</Text>,
    };
  });

describe('EmptyProducts Component', () => {
  it('display activity indicator when isLoading is true', () => {
    const {getByTestId} = render(<EmptyProducts isLoading={true} />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('display message "No products found" and the icon when isLoading is false', () => {
    const {getByText} = render(<EmptyProducts isLoading={false} />);
    expect(getByText('No products found')).toBeTruthy();
    expect(getByText('Product Not Found Icon')).toBeTruthy();
  });
});
