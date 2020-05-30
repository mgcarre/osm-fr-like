import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import * as layers from './layers';
import * as overlays from './overlays';
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/leaflet-geosearch/dist/geosearch.css';

const map = L.map('map', {
    center: [46.6022, 2.4984],
    zoom: 6,
    layers: [layers.OSMFranceLayer]
});

const geocoder =
    new GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        searchLabel: 'Recherchez une adresse',
        notFoundMessage: 'Aucun résultat'
    });

map.addControl(geocoder);

const satelliteImagery = L.layerGroup([layers.ESRIWorldImageryLayer, overlays.StamenTonerOverlay])

L.control.layers({
    "OSM FR": layers.OSMFranceLayer,
    "OSM": layers.OSMLayer,
    "Satellite": satelliteImagery,
    "BZH": layers.OSMFranceBzhLayer,
    "Euskadi": layers.OSMFranceEuLayer,
    "Occitan": layers.OSMFranceOcLayer,
    "CyclOSM": layers.OSMFranceCycleLayer,
    "Monochrome": layers.OSMMonoLayer,
    "RiverBoat": layers.OSMFranceRiverLayer,
    "HOT": layers.OSMFranceHumanitarianLayer
}, {
    'Route 500': overlays.R500Overlay,
    'Hydro': overlays.R500HydroOverlay,
    'Relief': overlays.HillshadeOverlay,
    'CyclOSMLite': overlays.cyclosmLiteOverlay,
    'SeaMap': overlays.OpenseamapOverlay,
    'Toner': overlays.StamenTonerOverlay
}).addTo(map)
