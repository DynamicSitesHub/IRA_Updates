var size = 0;
var placement = 'point';

var style_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(163,159,159,0.2549019607843137)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(255,205,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
