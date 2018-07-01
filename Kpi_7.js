define(["qlik", "text!./template.html", "css!./css/all.css"], function(qlik, template) {
	return {
		definition: {
			type: "items",
			component: "accordion",
			items: {
				measures: {
					uses: "measures",
					min: 1,
					max: 2,
					items: {
						title: {
							ref: "qDef.title", // id of the textbox
							label: "Title", // label
							type: "string", // type
							defaultValue: "Header Title", // default value/ init value
							expression: "optional"
						},
						color: {
							ref: "qDef.color", // id of the textbox
							label: "Color", // label
							type: "string", // type
							defaultValue: "#fff", // default value/ init value
							expression: "optional"
						},
						bgcolor: {
							ref: "qDef.bgcolor", // id of the textbox
							label: "Background Color", // label
							type: "string", // type
							defaultValue: "#3BAFDA", // default value/ init value
							expression: "optional"
						},
						icon: {
							ref: "qDef.icon", // id of the textbox
							label: "Icon", // label
							type: "string", // type
							expression: "optional"
						},
						// end custom prop for measure
					}
				},
				settings: {
					uses: "settings",
					items: {
						navigate: {
							ref: "navigate", // id of the textbox
							label: "Sheet ID Here", // label
							type: "string", // type
							expression: "optional"
						}
					}
				}
				// end
			}
		},
		template: template,
		support: {
			snapshot: true,
			export: true,
			exportData: true
		},
		paint: function($element, layout) {
			//add your rendering code here
			var app = qlik.currApp();
			var objID = layout.qInfo.qId;
			/*
			var title=layout.qHyperCube.qMeasureInfo["0"].title;
			var color=layout.qHyperCube.qMeasureInfo["0"].color;
			var icon=layout.qHyperCube.qMeasureInfo["0"].icon;
			var bgcolor=layout.qHyperCube.qMeasureInfo["0"].bgcolor;
			var value=layout.qHyperCube.qGrandTotalRow["0"].qText;
			*/
			//console.log(objID,title,color,icon,bgcolor,'Value : ',value);
			//$element.html( '<p>'+objID+'</p>'+'<p>'+title+'</p><p>'+color+'</p><p>'+icon+'</p><p>'+bgcolor+'</p><p>'+'Value : '+value+'</p>' );
			var getappMode = qlik.navigation.getMode();
			//console.log(layout.navigate);
			if (getappMode == 'analysis' && !layout.navigate == '') {
				$('#kpi_' + objID).click(function() {
					console.log('cilcked',layout.navigate);
					// do something
					qlik.navigation.gotoSheet(layout.navigate);
				});
			}
			//needed for export
			return qlik.Promise.resolve();
		},
		controller: ['$scope', function($scope) {
			//add your rendering code here
			//$scope.html = "Hello World";
		}]
	};
});