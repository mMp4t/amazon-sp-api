const utils = require('../utils');

module.exports = {
  getSolicitationActionsForOrder:(req_params) => {
  	utils.checkParams(req_params, {
  		query:{
  			marketplaceIds:{
  				type:'array'
  			}
  		},
  		path:{
  			amazonOrderId:{
  				type:'string'
  			}
  		}
  	});
    return Object.assign(req_params, {
      method:'GET',
      api_path:'/solicitations/v1/orders/' + req_params.path.amazonOrderId,
      restore_rate:1
    });
  },
  createProductReviewAndSellerFeedbackSolicitation:(req_params) => {
  	utils.checkParams(req_params, {
  		query:{
        marketplaceIds:{
          type:'array'
        }
      },
      path:{
        amazonOrderId:{
          type:'string'
        }
      }
  	});
    return Object.assign(req_params, {
      method:'POST',
      api_path:'/solicitations/v1/orders/' + req_params.path.amazonOrderId + '/solicitations/productReviewAndSellerFeedback',
      restore_rate:60
    });
  }
};