sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"mithra/app/purchaseorderapp/test/integration/pages/POsList.gen",
	"mithra/app/purchaseorderapp/test/integration/pages/POsObjectPage.gen",
	"mithra/app/purchaseorderapp/test/integration/pages/POItemsObjectPage.gen"
], function (JourneyRunner, POsListGenerated, POsObjectPageGenerated, POItemsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('mithra/app/purchaseorderapp') + '/test/flp.html#app-preview',
        pages: {
			onThePOsListGenerated: POsListGenerated,
			onThePOsObjectPageGenerated: POsObjectPageGenerated,
			onThePOItemsObjectPageGenerated: POItemsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

