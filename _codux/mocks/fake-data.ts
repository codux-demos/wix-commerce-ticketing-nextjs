import { faker } from '@faker-js/faker';
import { cart } from '@wix/ecom';
import { PaymentOptionType } from '@wix/ecom/build/cjs/src/ecom-v1-cart-cart.universal';
import type { products } from '@wix/stores';

export function createProducts(numOfItems?: number) {
  return Array.from(new Array(numOfItems || 10)).map(createProduct);
}

function createProduct(): products.Product {
  return {
    _id: faker.string.uuid(),
    slug: faker.lorem.word(),
    name: faker.commerce.productName(),
    media: {
      mainMedia: {
        image: {
          url: faker.image.urlLoremFlickr({ category: 'product' }),
        },
      },
    },
    price: {
      formatted: {
        price: faker.commerce.price({
          symbol: 'USD',
        }),
      },
    },
  };
}

export function createCart(products: products.Product[]): cart.Cart {
  return {
    _id: faker.string.uuid(),
    currency: 'USD',
    lineItems: products.map(createCartItem),
  };
}

function createCartItem(product: products.Product): cart.LineItem {
  return {
    _id: faker.string.uuid(),
    productName: {
      original: product.name!,
      translated: product.name,
    },
    quantity: faker.number.int({ min: 1, max: 10 }),
    image: product.media!.mainMedia!.image!.url!,
    paymentOption: PaymentOptionType.FULL_PAYMENT_ONLINE,
    price: {
      amount: faker.commerce.price(),
    },
    descriptionLines: [
      {
        name: { translated: 'property', original: '' },
        plainText: {
          original: '',
          translated: faker.commerce.productAdjective(),
        },
      },
    ],
  };
}
