import type { Schema, Attribute } from '@strapi/strapi';

export interface RefundRefundAction extends Schema.Component {
  collectionName: 'components_refund_refund_actions';
  info: {
    displayName: 'Refund Action';
    icon: 'chartCircle';
  };
  attributes: {
    amount: Attribute.Decimal;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'refund.refund-action': RefundRefundAction;
    }
  }
}
