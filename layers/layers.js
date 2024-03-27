var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AllCountyBoundaries_1 = new ol.format.GeoJSON();
var features_AllCountyBoundaries_1 = format_AllCountyBoundaries_1.readFeatures(json_AllCountyBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllCountyBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllCountyBoundaries_1.addFeatures(features_AllCountyBoundaries_1);
var lyr_AllCountyBoundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllCountyBoundaries_1, 
                style: style_AllCountyBoundaries_1,
                interactive: true,
                title: '<img src="styles/legend/AllCountyBoundaries_1.png" /> All County Boundaries'
            });
var format_AfterIRSNotice202430324NewFFEs_2 = new ol.format.GeoJSON();
var features_AfterIRSNotice202430324NewFFEs_2 = format_AfterIRSNotice202430324NewFFEs_2.readFeatures(json_AfterIRSNotice202430324NewFFEs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AfterIRSNotice202430324NewFFEs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfterIRSNotice202430324NewFFEs_2.addFeatures(features_AfterIRSNotice202430324NewFFEs_2);
var lyr_AfterIRSNotice202430324NewFFEs_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AfterIRSNotice202430324NewFFEs_2, 
                style: style_AfterIRSNotice202430324NewFFEs_2,
                interactive: true,
                title: '<img src="styles/legend/AfterIRSNotice202430324NewFFEs_2.png" /> After IRS Notice 2024-30 (324 New FFEs)'
            });
var format_PriortoIRSNotice202430_3 = new ol.format.GeoJSON();
var features_PriortoIRSNotice202430_3 = format_PriortoIRSNotice202430_3.readFeatures(json_PriortoIRSNotice202430_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PriortoIRSNotice202430_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriortoIRSNotice202430_3.addFeatures(features_PriortoIRSNotice202430_3);
var lyr_PriortoIRSNotice202430_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PriortoIRSNotice202430_3, 
                style: style_PriortoIRSNotice202430_3,
                interactive: true,
    title: 'Prior to IRS Notice 2024-30<br />\
    <img src="styles/legend/PriortoIRSNotice202430_3_0.png" /> only meets the FFE threshold (not an energy community)<br />'
        });
var format_AfterIRSNotice202430122NewECs_4 = new ol.format.GeoJSON();
var features_AfterIRSNotice202430122NewECs_4 = format_AfterIRSNotice202430122NewECs_4.readFeatures(json_AfterIRSNotice202430122NewECs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AfterIRSNotice202430122NewECs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfterIRSNotice202430122NewECs_4.addFeatures(features_AfterIRSNotice202430122NewECs_4);
var lyr_AfterIRSNotice202430122NewECs_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AfterIRSNotice202430122NewECs_4, 
                style: style_AfterIRSNotice202430122NewECs_4,
                interactive: true,
                title: '<img src="styles/legend/AfterIRSNotice202430122NewECs_4.png" /> After IRS Notice 2024-30 (122 New ECs)'
            });
var format_PriortoIRSNotice202430_5 = new ol.format.GeoJSON();
var features_PriortoIRSNotice202430_5 = format_PriortoIRSNotice202430_5.readFeatures(json_PriortoIRSNotice202430_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PriortoIRSNotice202430_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PriortoIRSNotice202430_5.addFeatures(features_PriortoIRSNotice202430_5);
var lyr_PriortoIRSNotice202430_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PriortoIRSNotice202430_5, 
                style: style_PriortoIRSNotice202430_5,
                interactive: true,
    title: 'Prior to IRS Notice 2024-30<br />\
    <img src="styles/legend/PriortoIRSNotice202430_5_0.png" /> is an energy community, as it meets both the Fossil Fuel Employment (FFE) threshold and the unemployment rate requirement<br />'
        });
var format_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6 = new ol.format.GeoJSON();
var features_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6 = format_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.readFeatures(json_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.addFeatures(features_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6);
var lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6, 
                style: style_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6,
                interactive: true,
                title: '<img src="styles/legend/CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.png" /> Census Tract Directly Adjoining a Census Tract With a Coal Closure - Western'
            });
var format_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7 = new ol.format.GeoJSON();
var features_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7 = format_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.readFeatures(json_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.addFeatures(features_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7);
var lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7, 
                style: style_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7,
                interactive: true,
                title: '<img src="styles/legend/CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.png" /> Census Tract Directly Adjoining a Census Tract With a Coal Closure - Eastern'
            });
var format_CensusTractWithaCoalClosure_8 = new ol.format.GeoJSON();
var features_CensusTractWithaCoalClosure_8 = format_CensusTractWithaCoalClosure_8.readFeatures(json_CensusTractWithaCoalClosure_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CensusTractWithaCoalClosure_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CensusTractWithaCoalClosure_8.addFeatures(features_CensusTractWithaCoalClosure_8);
var lyr_CensusTractWithaCoalClosure_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CensusTractWithaCoalClosure_8, 
                style: style_CensusTractWithaCoalClosure_8,
                interactive: true,
                title: '<img src="styles/legend/CensusTractWithaCoalClosure_8.png" /> Census Tract With a Coal Closure'
            });
var group_CoalClosuresDOE = new ol.layer.Group({
                                layers: [lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6,lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7,lyr_CensusTractWithaCoalClosure_8,],
                                title: "Coal Closures - DOE"});
var group_MSANonMSAsthatareFossilEmploymentEnergyCommunitiesUntilAtLeastMay2024 = new ol.layer.Group({
                                layers: [lyr_AfterIRSNotice202430122NewECs_4,lyr_PriortoIRSNotice202430_5,],
                                title: "MSA/Non-MSAs that are Fossil Employment Energy Communities Until At Least May 2024"});
var group_MSAsNonMSAsthatonlymeettheFossilFuelEmploymentFFEThreshold = new ol.layer.Group({
                                layers: [lyr_AfterIRSNotice202430324NewFFEs_2,lyr_PriortoIRSNotice202430_3,],
                                title: "MSAs/Non-MSAs that only meet the Fossil Fuel Employment (FFE) Threshold"});
var group_TheBaseLayers = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_AllCountyBoundaries_1,],
                                title: "The Base Layers"});

lyr_OSMStandard_0.setVisible(true);lyr_AllCountyBoundaries_1.setVisible(true);lyr_AfterIRSNotice202430324NewFFEs_2.setVisible(true);lyr_PriortoIRSNotice202430_3.setVisible(true);lyr_AfterIRSNotice202430122NewECs_4.setVisible(true);lyr_PriortoIRSNotice202430_5.setVisible(true);lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.setVisible(false);lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.setVisible(false);lyr_CensusTractWithaCoalClosure_8.setVisible(false);
var layersList = [group_TheBaseLayers,group_MSAsNonMSAsthatonlymeettheFossilFuelEmploymentFFEThreshold,group_MSANonMSAsthatareFossilEmploymentEnergyCommunitiesUntilAtLeastMay2024,group_CoalClosuresDOE];
lyr_AllCountyBoundaries_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'STUSPS': 'STUSPS', 'STATE_NAME': 'STATE_NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_AfterIRSNotice202430324NewFFEs_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'STUSPS': 'STUSPS', 'STATE_NAME': 'STATE_NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Potent.EC': 'Potent.EC', 'Qual.EC.24': 'Qual.EC.24', });
lyr_PriortoIRSNotice202430_3.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'affgeoid_c': 'affgeoid_c', 'fipstate_2': 'fipstate_2', 'fipscty_20': 'fipscty_20', 'geoid_cty_': 'geoid_cty_', 'county_nam': 'county_nam', 'state_name': 'state_name', 'msa_area_i': 'msa_area_i', 'msa_area_n': 'msa_area_n', 'ffe_ind_qu': 'ffe_ind_qu', 'ec_ind_qua': 'ec_ind_qua', 'msa_qual': 'msa_qual', 'fee_qual_s': 'fee_qual_s', 'ec_qual_st': 'ec_qual_st', 'label_fee': 'label_fee', 'label_ec': 'label_ec', 'msa_nmsa_l': 'msa_nmsa_l', 'date_last_': 'date_last_', 'dataset_ve': 'dataset_ve', 'date_recor': 'date_recor', 'globalid': 'globalid', 'SHAPE__Len': 'SHAPE__Len', 'SHAPE__Are': 'SHAPE__Are', });
lyr_AfterIRSNotice202430122NewECs_4.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'STUSPS': 'STUSPS', 'STATE_NAME': 'STATE_NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Potent.EC': 'Potent.EC', 'Qual.EC.24': 'Qual.EC.24', });
lyr_PriortoIRSNotice202430_5.set('fieldAliases', {'objectid_1': 'OBJECTID_1', 'objectid': 'ObjectID', 'affgeoid_cty_2020': 'AFFGEOID_COUNTY_2020', 'fipstate_2020': 'fipstate_2020', 'fipscty_2020': 'fipscounty_2020', 'geoid_cty_2020': 'geoid_county_2020', 'county_name_2020': 'county_name_2020', 'state_name': 'state_name', 'msa_area_id': 'MSA_area_ID_2020', 'msa_area_name': 'MSA_area_name_2020', 'ffe_ind_qual': 'ffe_ind_qual', 'ec_ind_qual': 'ec_ind_qual', 'msa_qual': 'msa_qual', 'fee_qual_status': 'FEE_qual_status', 'ec_qual_status': 'EC_qual_status', 'label_fee': 'Label_FEE', 'label_ec': 'Label_EC', 'msa_nmsa_label': 'Label_MSA_NMSA', 'date_last_update': 'date_last_update', 'dataset_version': 'dataset_version', 'date_record_added': 'date_record_added', 'globalid': 'globalid', 'SHAPE__Length': 'SHAPE__Length', 'SHAPE__Area': 'SHAPE__Area', });
lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.set('fieldAliases', {'objectid': 'objectid', 'affgeoid_t': 'affgeoid_t', 'geoid_trac': 'geoid_trac', 'state_name': 'state_name', 'county_nam': 'county_nam', 'censustrac': 'censustrac', 'mine_closu': 'mine_closu', 'generato_1': 'generato_1', 'adjacent_t': 'adjacent_t', 'tract_stat': 'tract_stat', 'record_add': 'record_add', 'symbol': 'symbol', });
lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.set('fieldAliases', {'objectid': 'objectid', 'affgeoid_t': 'affgeoid_t', 'geoid_trac': 'geoid_trac', 'state_name': 'state_name', 'county_nam': 'county_nam', 'censustrac': 'censustrac', 'mine_closu': 'mine_closu', 'generato_1': 'generato_1', 'adjacent_t': 'adjacent_t', 'tract_stat': 'tract_stat', 'record_add': 'record_add', 'symbol': 'symbol', });
lyr_CensusTractWithaCoalClosure_8.set('fieldAliases', {'objectid': 'objectid', 'affgeoid_t': 'affgeoid_t', 'geoid_trac': 'geoid_trac', 'state_name': 'state_name', 'county_nam': 'county_nam', 'censustrac': 'censustrac', 'mine_closu': 'mine_closu', 'generato_1': 'generato_1', 'adjacent_t': 'adjacent_t', 'tract_stat': 'tract_stat', 'record_add': 'record_add', 'symbol': 'symbol', });
lyr_AllCountyBoundaries_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'STUSPS': 'TextEdit', 'STATE_NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', });
lyr_AfterIRSNotice202430324NewFFEs_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'STUSPS': 'TextEdit', 'STATE_NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'Potent.EC': 'TextEdit', 'Qual.EC.24': 'TextEdit', });
lyr_PriortoIRSNotice202430_3.set('fieldImages', {'objectid_1': 'Range', 'objectid': 'TextEdit', 'affgeoid_c': 'TextEdit', 'fipstate_2': 'TextEdit', 'fipscty_20': 'TextEdit', 'geoid_cty_': 'TextEdit', 'county_nam': 'TextEdit', 'state_name': 'TextEdit', 'msa_area_i': 'TextEdit', 'msa_area_n': 'TextEdit', 'ffe_ind_qu': 'TextEdit', 'ec_ind_qua': 'TextEdit', 'msa_qual': 'TextEdit', 'fee_qual_s': 'TextEdit', 'ec_qual_st': 'TextEdit', 'label_fee': 'TextEdit', 'label_ec': 'TextEdit', 'msa_nmsa_l': 'TextEdit', 'date_last_': 'TextEdit', 'dataset_ve': 'TextEdit', 'date_recor': 'TextEdit', 'globalid': 'TextEdit', 'SHAPE__Len': 'TextEdit', 'SHAPE__Are': 'TextEdit', });
lyr_AfterIRSNotice202430122NewECs_4.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'AFFGEOID': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'STUSPS': 'TextEdit', 'STATE_NAME': 'TextEdit', 'LSAD': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'Potent.EC': 'TextEdit', 'Qual.EC.24': 'TextEdit', });
lyr_PriortoIRSNotice202430_5.set('fieldImages', {'objectid_1': '', 'objectid': '', 'affgeoid_cty_2020': '', 'fipstate_2020': '', 'fipscty_2020': '', 'geoid_cty_2020': '', 'county_name_2020': '', 'state_name': '', 'msa_area_id': '', 'msa_area_name': '', 'ffe_ind_qual': '', 'ec_ind_qual': '', 'msa_qual': '', 'fee_qual_status': '', 'ec_qual_status': '', 'label_fee': '', 'label_ec': '', 'msa_nmsa_label': '', 'date_last_update': '', 'dataset_version': '', 'date_record_added': '', 'globalid': '', 'SHAPE__Length': '', 'SHAPE__Area': '', });
lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.set('fieldImages', {'objectid': 'Range', 'affgeoid_t': 'TextEdit', 'geoid_trac': 'TextEdit', 'state_name': 'TextEdit', 'county_nam': 'TextEdit', 'censustrac': 'TextEdit', 'mine_closu': 'TextEdit', 'generato_1': 'TextEdit', 'adjacent_t': 'TextEdit', 'tract_stat': 'TextEdit', 'record_add': 'TextEdit', 'symbol': 'TextEdit', });
lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.set('fieldImages', {'objectid': 'Range', 'affgeoid_t': 'TextEdit', 'geoid_trac': 'TextEdit', 'state_name': 'TextEdit', 'county_nam': 'TextEdit', 'censustrac': 'TextEdit', 'mine_closu': 'TextEdit', 'generato_1': 'TextEdit', 'adjacent_t': 'TextEdit', 'tract_stat': 'TextEdit', 'record_add': 'TextEdit', 'symbol': 'TextEdit', });
lyr_CensusTractWithaCoalClosure_8.set('fieldImages', {'objectid': 'Range', 'affgeoid_t': 'TextEdit', 'geoid_trac': 'TextEdit', 'state_name': 'TextEdit', 'county_nam': 'TextEdit', 'censustrac': 'TextEdit', 'mine_closu': 'TextEdit', 'generato_1': 'TextEdit', 'adjacent_t': 'TextEdit', 'tract_stat': 'TextEdit', 'record_add': 'TextEdit', 'symbol': 'TextEdit', });
lyr_AllCountyBoundaries_1.set('fieldLabels', {});
lyr_AfterIRSNotice202430324NewFFEs_2.set('fieldLabels', {});
lyr_PriortoIRSNotice202430_3.set('fieldLabels', {});
lyr_AfterIRSNotice202430122NewECs_4.set('fieldLabels', {});
lyr_PriortoIRSNotice202430_5.set('fieldLabels', {});
lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureWestern_6.set('fieldLabels', {});
lyr_CensusTractDirectlyAdjoiningaCensusTractWithaCoalClosureEastern_7.set('fieldLabels', {});
lyr_CensusTractWithaCoalClosure_8.set('fieldLabels', {});
lyr_CensusTractWithaCoalClosure_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});