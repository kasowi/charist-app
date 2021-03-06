import React from "react";
import {PayPalButtons} from "@paypal/react-paypal-js";

type PaypalDonateButtonProps = {
    recipient: string;
}

export function PaypalDonateButton({recipient}: PaypalDonateButtonProps) {
    return (
        <div>
            <PayPalButtons
            style={{ layout: 'horizontal',
                color:  'silver',
                shape:  'pill',
                label:  'donate',
                tagline: false,
                height: 40}}
            disabled={false}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "5",
                                    breakdown: {
                                        item_total: {
                                            currency_code: "USD",
                                            value: "5",
                                        },
                                    },
                                },
                                payee: {
                                    email_address: `${recipient}`
                                },
                                items: [
                                    {
                                        name: "Donation",
                                        quantity: "1",
                                        unit_amount: {
                                            currency_code: "USD",
                                            value: "5",
                                        },
                                        category: "DONATION",
                                    }
                                ],
                            },
                        ],
                    })
            }}/>
        </div>
    )
}