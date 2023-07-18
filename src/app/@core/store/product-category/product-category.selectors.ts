import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProductCategory from './product-category.reducer';
const getProductCategoryState =
  createFeatureSelector<fromProductCategory.ProductCategoryState>(
    'productCategory'
  );

export const fetchProductCategory = createSelector(
  getProductCategoryState,
  (state) => {
    return state.productCategory;
  }
);
