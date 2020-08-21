import { tileLayer } from 'leaflet';

export const OSMFranceLayer = tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; Openstreetmap France'
});
export const OSMFranceBzhLayer = tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap France'
});
export const OSMFranceCycleLayer = tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    attribution: 'Calque &copy; CyclOSM'
});
export const OSMFranceOcLayer = tileLayer('https://tile.openstreetmap.bzh/oc/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap France'
});
export const OSMFranceEuLayer = tileLayer('https://tile.openstreetmap.bzh/eu/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap France'
});
export const OSMMonoLayer = tileLayer('http://www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: 'Tuiles de fond <a href="http://www.openstreetmap.org/" target="_blank">OSM.org</a>'
});
export const OSMLayer = tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Tuiles de fond <a href="http://www.openstreetmap.org/" target="_blank">OSM.org</a>',
    minZoom: 1,
    maxZoom: 20
});
export const OSMFranceRiverLayer = tileLayer('https://{s}.tile.openstreetmap.fr/openriverboatmap/{z}/{x}/{y}.png', {
    attribution: 'Calque &copy; ybon'
});
export const OSMFranceHumanitarianLayer = tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; ybon'
});
export const ESRIWorldImageryLayer = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 18
});