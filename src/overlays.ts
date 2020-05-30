import { tileLayer } from 'leaflet';

export const StamenTonerOverlay = tileLayer('https://stamen-tiles-{s}.a.ssfastly.net/toner-hybrid/{z}/{x}/{y}{r}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20
});

export const R500Overlay = tileLayer('https://{s}.tile.openstreetmap.fr/route500/{z}/{x}/{y}.png', {
    opacity: 0.7,
    maxZoom: 16
})
export const R500HydroOverlay = tileLayer('https://{s}.tile.openstreetmap.fr/route500hydro/{z}/{x}/{y}.png', {
    opacity: 0.7
})
export const HillshadeOverlay = tileLayer('https://tiles.wmflabs.org/hillshading/{z}/{x}/{y}.png')
export const cyclosmLiteOverlay = tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm-lite/{z}/{x}/{y}.png', {
    attribution: 'Calque &copy; CyclOSM',
    opacity: 0.8
})
export const OpenseamapOverlay = tileLayer('http://tiles.openseamap.org/seamark/{z}/{x}/{y}.png')
