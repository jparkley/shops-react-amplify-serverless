/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
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
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
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
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
      id
      username
      email
      orders {
        items {
          id
          user {
            id
            username
            email
            registered
            createdAt
            updatedAt
          }
          products {
            nextToken
          }
          address {
            id
            street1
            street2
            city
            state
            zipCode
            country
          }
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      orders {
        items {
          id
          user {
            id
            username
            email
            registered
            createdAt
            updatedAt
          }
          products {
            nextToken
          }
          address {
            id
            street1
            street2
            city
            state
            zipCode
            country
          }
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user {
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
      address {
        id
        street1
        street2
        city
        state
        zipCode
        country
      }
      createdAt
      updatedAt
    }
  }
`;
