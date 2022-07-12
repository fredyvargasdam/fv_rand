# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'Discount passcode',
    'version': '1.0',
    'category': 'Accounting/Accounting',
    'summary': 'Discount passcode',
    'depends': ['pos_discount'],
    'data': [
        'views/pos_config_view.xml',
    ],
    'assets': {
        'point_of_sale.assets':[
            'fv_rand/static/src/js/discount_passcode.js',
        ],
    },
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
