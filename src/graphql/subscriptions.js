/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop {
    onCreateShop {
      id
      name
      products {
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
      owner
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop {
    onUpdateShop {
      id
      name
      products {
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
      owner
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop {
    onDeleteShop {
      id
      name
      products {
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
      owner
      tags
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String!) {
    onCreateProduct(owner: $owner) {
      id
      name
      shop {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String!) {
    onUpdateProduct(owner: $owner) {
      id
      name
      shop {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String!) {
    onDeleteProduct(owner: $owner) {
      id
      name
      shop {
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
