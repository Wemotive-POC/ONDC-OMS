module.exports = {
    create: async (ctx) => {
      const { orders, sellers, settlementDetails } = ctx.request.body;
  
      // Validate the request body
      if (!orders || !sellers || !settlementDetails) {
        return ctx.badRequest('Missing required data in the request body.');
      }
  
      try {
        // Create orders
        const orderService = strapi.service('api::order.order');
        console.log('Orders:', orders);
        const createdOrders = await Promise.all(orders.map(orderData => orderService.create(orderData)));
        console.log('Created orders:', createdOrders);
  
        // Create sellers
        const sellerService = strapi.service('api::seller.seller');
        console.log('Sellers:', sellers);
        const createdSellers = await Promise.all(sellers.map(sellerData => sellerService.create(sellerData)));
        console.log('Created sellers:', createdSellers);
  
        // Create settlement_details
        const settlementDetailService = strapi.service('api::settlement-detail.settlement-detail');
        console.log('Settlement details:', settlementDetails);
        const createdSettlementDetails = await Promise.all(settlementDetails.map(settlementDetailData => settlementDetailService.create(settlementDetailData)));
        console.log('Created settlement details:', createdSettlementDetails);
  
        // Associate orders with sellers
        for (const [index, order] of createdOrders.entries()) {
          console.log('Updating order with id:', order.id);
          await orderService.update({ id: order.id }, { order: createdSellers[index].id });
        }
  
        // Associate settlement_details with orders
        for (const [index, settlementDetail] of createdSettlementDetails.entries()) {
          console.log('Updating settlement detail with id:', settlementDetail.id);
          await settlementDetailService.update({ id: settlementDetail.id }, { settlement_detail: createdOrders[index].id });
        }
  
        return ctx.created({ message: 'Data successfully populated.' });
      } catch (error) {
        console.error(error);
        return ctx.badRequest('Failed to populate data.');
      }
    },
  };
  