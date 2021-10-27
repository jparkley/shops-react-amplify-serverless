/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      name
      products {
        items {
          id
          name
          owner
          description
          price
          shipped
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      tags
      createdAt
      updatedAt
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        products {
          nextToken
        }
        owner
        tags
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      shop {
        id
        name
        products {
          nextToken
        }
        owner
        tags
        createdAt
        updatedAt
      }
      owner
      description
      image {
        bucket
        region
        key
      }
      price
      shipped
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shop {
          id
          name
          owner
          tags
          createdAt
          updatedAt
        }
        owner
        description
        image {
          bucket
          region
          key
        }
        price
        shipped
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      orders {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      registered
      createdAt
      updatedAt
    }
  }
`;
export const searchShops = /* GraphQL */ `
  query SearchShops(
    $filter: SearchableShopFilterInput
    $sort: SearchableShopSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchShops(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        products {
          nextToken
        }
        owner
        tags
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
