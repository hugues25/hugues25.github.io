ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([251524.897268, 147509.858608, 1784118.731228, 1067750.352659]);
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
var format_Fort_communale_1 = new ol.format.GeoJSON();
var features_Fort_communale_1 = format_Fort_communale_1.readFeatures(json_Fort_communale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Fort_communale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fort_communale_1.addFeatures(features_Fort_communale_1);
var lyr_Fort_communale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fort_communale_1, 
                style: style_Fort_communale_1,
                interactive: true,
                title: '<img src="styles/legend/Fort_communale_1.png" /> Forêt_communale'
            });
var format_Fort_communautaire_2 = new ol.format.GeoJSON();
var features_Fort_communautaire_2 = format_Fort_communautaire_2.readFeatures(json_Fort_communautaire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Fort_communautaire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fort_communautaire_2.addFeatures(features_Fort_communautaire_2);
var lyr_Fort_communautaire_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fort_communautaire_2, 
                style: style_Fort_communautaire_2,
                interactive: true,
                title: '<img src="styles/legend/Fort_communautaire_2.png" /> Forêt_communautaire'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Fort_communale_1.setVisible(true);lyr_Fort_communautaire_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Fort_communale_1,lyr_Fort_communautaire_2];
lyr_Fort_communale_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'INDICATIF': 'INDICATIF', 'AFF_CODE': 'AFF_CODE', 'TOPONYME': 'TOPONYME', 'SUP_SIG': 'SUP_SIG', 'NOM': 'NOM', 'STATUT': 'STATUT', 'REF_DOC_OF': 'REF_DOC_OF', 'TYPE_DOC_O': 'TYPE_DOC_O', 'DATE_': 'DATE_', 'SUP_PROVIS': 'SUP_PROVIS', 'SUP_DEFINI': 'SUP_DEFINI', 'WOOD_VOL08': 'WOOD_VOL08', 'CLASSE': 'CLASSE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Fort_communautaire_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TOPONYME': 'TOPONYME', 'SUP_SIG': 'SUP_SIG', 'AFF_CODE': 'AFF_CODE', 'ATTRIBUTAI': 'ATTRIBUTAI', 'ENTITE': 'ENTITE', 'DATE_CONVE': 'DATE_CONVE', 'DATE_PSG': 'DATE_PSG', 'DATE_RESER': 'DATE_RESER', 'ARRONDISSE': 'ARRONDISSE', 'SUPERFICIE': 'SUPERFICIE', 'REF_TYPE': 'REF_TYPE', 'DATE_REF': 'DATE_REF', 'REF_MINFOF': 'REF_MINFOF', 'Region': 'Region', 'Departemen': 'Departemen', 'ETAT': 'ETAT', 'DATE_CPG': 'DATE_CPG', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Fort_communale_1.set('fieldImages', {'OBJECTID': 'Range', 'INDICATIF': 'TextEdit', 'AFF_CODE': 'TextEdit', 'TOPONYME': 'TextEdit', 'SUP_SIG': 'TextEdit', 'NOM': 'TextEdit', 'STATUT': 'TextEdit', 'REF_DOC_OF': 'TextEdit', 'TYPE_DOC_O': 'TextEdit', 'DATE_': 'TextEdit', 'SUP_PROVIS': 'TextEdit', 'SUP_DEFINI': 'TextEdit', 'WOOD_VOL08': 'TextEdit', 'CLASSE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Fort_communautaire_2.set('fieldImages', {'OBJECTID': 'Range', 'TOPONYME': 'TextEdit', 'SUP_SIG': 'TextEdit', 'AFF_CODE': 'TextEdit', 'ATTRIBUTAI': 'TextEdit', 'ENTITE': 'TextEdit', 'DATE_CONVE': 'TextEdit', 'DATE_PSG': 'TextEdit', 'DATE_RESER': 'TextEdit', 'ARRONDISSE': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'REF_TYPE': 'TextEdit', 'DATE_REF': 'TextEdit', 'REF_MINFOF': 'TextEdit', 'Region': 'TextEdit', 'Departemen': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CPG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Fort_communale_1.set('fieldLabels', {'OBJECTID': 'no label', 'INDICATIF': 'no label', 'AFF_CODE': 'no label', 'TOPONYME': 'no label', 'SUP_SIG': 'no label', 'NOM': 'inline label', 'STATUT': 'no label', 'REF_DOC_OF': 'no label', 'TYPE_DOC_O': 'no label', 'DATE_': 'no label', 'SUP_PROVIS': 'no label', 'SUP_DEFINI': 'no label', 'WOOD_VOL08': 'no label', 'CLASSE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Fort_communautaire_2.set('fieldLabels', {'OBJECTID': 'no label', 'TOPONYME': 'no label', 'SUP_SIG': 'no label', 'AFF_CODE': 'no label', 'ATTRIBUTAI': 'no label', 'ENTITE': 'no label', 'DATE_CONVE': 'no label', 'DATE_PSG': 'no label', 'DATE_RESER': 'no label', 'ARRONDISSE': 'no label', 'SUPERFICIE': 'no label', 'REF_TYPE': 'no label', 'DATE_REF': 'no label', 'REF_MINFOF': 'no label', 'Region': 'no label', 'Departemen': 'no label', 'ETAT': 'no label', 'DATE_CPG': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Fort_communautaire_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});