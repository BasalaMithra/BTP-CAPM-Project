const cds = require('@sap/cds');

module.exports = async (srv) => 
{        
    // Using CDS API      
    const PurchaseOrder = await cds.connect.to("PurchaseOrder"); 
      srv.on('READ', 'A_PurchaseOrder', req => PurchaseOrder.run(req.query)); 
}