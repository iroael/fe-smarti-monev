<template>
  <tr> 
    <td> 
    <table class="table-responsive" style="width: 100%;border-collapse: separate;border-spacing: 0;border: 1px dashed rgba(82, 82, 108, 0.1)">
        <thead> 
        <tr style="background: #009DB5;border-radius: 8px;overflow: hidden;box-shadow: 0px 10.9412px 10.9412px rgb(0 157 181 / 4%), 0px 9.51387px 7.6111px rgb(0 157 181 / 6%), 0px 5.05275px 4.0422px rgb(0 157 181 / 4%);border-radius: 5.47059px;"> 
            <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 16px;">Products</span></th>
            <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 16px;">Quantity</span></th>
            <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 16px;">Price</span></th>
            <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 16px;">Unit</span></th>
            <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 16px;">Vat %</span></th>
            <th style="padding: 18px 15px;text-align: left"><span style="color: #fff; font-size: 16px;">Total</span></th>
        </tr>
        </thead>
        <tbody>
       <tr style="background-color: rgba(0, 157, 181, 0.11);box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);"> 
            <td style="padding: 18px 15px;display:flex;align-items: center;gap: 10px;"><span style="width: 54px; height: 51px; background-color:var(--light-shade-primary); display: flex; justify-content: center;align-items: center; border-radius: 5px;"><img src="/images/product/product-categories/laptop.png" alt="laptop" style="height:29px;"></span>
            <ul style="padding: 0;margin: 0;list-style: none;">
                <li> 
                <h4 style="font-weight:400; margin:4px 0px; font-size: 16px;">Apple Desktop</h4><span style="color: var(--normal-gray);opacity: 0.8; font-size: 14px;">#XDG-6437</span>
                </li>
            </ul>
            </td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">2</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">$100</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">Hour(s)</span></td>
            <td style="padding: 18px 15px; width: 10%;"> <span style="font-size: 16px;">0</span></td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">$200</span></td>
        </tr>
         <tr style="box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);">
            <td style="padding: 18px 15px;display:flex;align-items: center;gap: 10px;"><span style="width: 54px; height: 51px;background-color:var(--light-shade-primary); display: flex; justify-content: center;align-items: center; border-radius: 5px;"><img src="/images/product/product-categories/watch.png" alt="laptop" style="height:29px;"></span>
            <div> 
                <h4 style="font-weight:400; margin:4px 0px; font-size: 16px;">Smart Watch</h4><span style="color: var(--normal-gray);opacity: 0.8; font-size: 14px;">#XDG-6437</span>
            </div>
            </td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">1</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">$200</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">Hour(s)</span></td>
            <td style="padding: 18px 15px; width: 10%;"> <span style="font-size: 16px;">0</span></td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">$200</span></td>
        </tr>
        <tr style="background-color: rgba(0, 157, 181, 0.11);box-shadow: 0px 1px 0px 0px rgba(82, 82, 108, 0.15);"> 
            <td style="padding: 18px 15px;display:flex;align-items: center;gap: 10px;"><span style="width: 54px; height: 51px; background-color:var(--light-shade-primary); display: flex; justify-content: center;align-items: center; border-radius: 5px;"><img src="/images/product/product-categories/phone.png" alt="laptop" style="height:29px;"></span>
            <div> 
                <h4 style="font-weight:400; margin:4px 0px; font-size: 16px;">Apple iphone 13 Pro</h4><span style="color: var(--normal-gray);opacity: 0.8; font-size: 14px;">#XDG-6437</span>
            </div>
            </td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">1</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">$10,000</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">Hour(s)</span></td>
            <td style="padding: 18px 15px; width: 10%;"> <span style="font-size: 16px;">0</span></td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">$10,000</span></td>
        </tr>
        <tr>
            <td style="padding: 18px 15px;display:flex;align-items: center;gap: 10px;"><span style="width: 54px; height: 51px; background-color:var(--light-shade-primary); display: flex; justify-content: center;align-items: center; border-radius: 5px;"><img src="/images/product/product-categories/headphone.png" alt="laptop" style="height:29px;"></span>
            <div> 
                <h4 style="font-weight:400; margin:4px 0px; font-size: 16px;">Wireless Headphone</h4><span style="color: var(--normal-gray);opacity: 0.8; font-size: 14px;">#XDG-6437</span>
            </div>
            </td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">2</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">$8,000</span></td>
            <td style="padding: 18px 15px; width: 12%;"> <span style="font-size: 16px;">Hour(s)</span></td>
            <td style="padding: 18px 15px; width: 10%;"> <span style="font-size: 16px;">0</span></td>
            <td style="padding: 18px 15px;"><span style="font-size: 16px;">$16,000</span></td>
        </tr>
        </tbody>
    </table>
    </td>
</tr>
<tr style="display: flex ; justify-content: end"> 
    <td> 
   <table style="float: right;">
        <tfoot>
        <tr> 
            <td style="padding: 5px 24px 5px 0; padding-top: 15px; text-align: end;"> <span style="color: var(--normal-gray); font-size: 16px; font-weight: 400;">Subtotal  </span><span style="margin-left: 8px; font-size: 16px;">:</span></td>
            <td style="padding: 5px 0;text-align: left;padding-top: 15px;"><span style="font-size: 16px;">$26,400.00</span></td>
        </tr>
        <tr>
            <td style="padding: 5px 24px 5px 0; text-align: end;"> <span style="color: var(--normal-gray); font-size: 16px; font-weight: 400;">VAT (0%)  </span><span style="margin-left: 8px; font-size: 16px;">:</span></td>
            <td style="padding: 5px 0;text-align: left;padding-top: 0;"><span style="font-size: 16px;">$0.00</span></td>
        </tr>
        <tr>
            <td style="padding: 5px 24px 5px 0; text-align: end;"> <span style="color: var(--normal-gray); font-size: 16px; font-weight: 400;">Shipping Rate</span><span style="margin-left: 8px; font-size: 16px;">:</span></td>
            <td style="padding: 5px 0;text-align: left;padding-top: 0;"><span style="font-size: 16px;">$10.00</span></td>
        </tr>
        <tr>
            <td style="padding: 12px 24px 22px 0;"> <span style="font-weight: 600; font-size: 18px; color: var(--body-font-color);">Total Amount</span><span style="margin-left: 8px;">:</span></td>
            <td style="padding: 12px 24px 22px 0;;text-align: right"><span style="font-weight: 500; font-size: 18px; color: #009DB5;">$26,410.00</span></td>
        </tr>
        </tfoot>
    </table>
    </td>
</tr>
<tr> 
    <td> <span style="display:block;background: rgba(82, 82, 108, 0.3);height: 1px;width: 100%;margin-bottom:30px;"></span></td>
</tr>
<tr> 
    <td> <span style="display: flex; justify-content: end; gap: 15px;"><a style="background: #009DB5; color:rgba(255, 255, 255, 1);border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;" href="#!" >Print Invoice<i class="icon-arrow-right" style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></a><nuxt-link style="background: #009DB533;color: #009DB5;border-radius: 10px;padding: 18px 27px;font-size: 16px;font-weight: 600;outline: 0;border: 0; text-decoration: none;" to="/ecommerce/invoice/invoice_1" download="">Download<i class="icon-arrow-right" style="font-size:13px;font-weight:bold; margin-left: 10px;"></i></nuxt-link></span></td>
</tr>
</template>