odoo.define('fv_rand.discount',function(require){
    'use strict';
    const DiscountButton = require('pos_discount.DiscountButton');
    const Regiries = require('point_of_sale.Registries');
    const NumberBuffer = require('point_of_sale.NumberBuffer');
    
    console.log("fv_rand module its running");
    const POSDiscountButton = (DiscountButton) => 
        class extends DiscountButton{

            async onClick(){
                var self = this;
                var userInput = await this.showPopup('NumberPopup',{
                    isPassword : true,
                    'title': this.env._t("Enter Password")
                });
                if (userInput['confirmed']){
                    if (userInput['payload'] == this.env.pos.config.discount_passcode){
                        NumberBuffer.reset();
                        var {confirmed,payload} = await this.showPopup('NumberPopup',{
                            'title' : this.env._t("Discount Percentage")
    
                        })
    
                        if(confirmed){
                            self.apply_discount(payload); 
                        } 
    
    
                    }
                    else{
                        await this.showPopup('ErrorPopup',{
                            'title': this.env._t("Error"),
                            'body':this.env._t("Password incorrect"),
                        });
    
                    }
                    
                };
                
                 
            }

        }
    Regiries.Component.extend(DiscountButton,POSDiscountButton); 
return POSDiscountButton;

});