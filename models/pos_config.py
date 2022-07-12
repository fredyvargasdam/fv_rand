from odoo import api, fields, models, _

class PosConfig(models.Model):
    _inherit = "pos.config"

    discount_passcode = fields.Char(string="Discount Passcode")