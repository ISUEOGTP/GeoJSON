var good_geojson = '{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"FACILITY_T":"AIRPORT","LOC_IDENT":"Y00","INFO_EFF_D":"3/3/94","STATE":"IA","STATE_NAME":"IOWA","COUNTY":"LYON","CITY":"LARCHWOOD"},"geometry":{"type":"Point","coordinates":[-96.40617466596912,43.451333257494255]}},{"type":"Feature","properties":{"FACILITY_T":"AIRPORT","LOC_IDENT":"RRQ","INFO_EFF_D":"3/3/94","STATE":"IA","STATE_NAME":"IOWA","COUNTY":"LYON","CITY":"ROCK RAPIDS"},"geometry":{"type":"Point","coordinates":[-96.18008466096316,43.45218817521464]}}]}';
var bad_geojson = '{"type":"Triangle","features":[{"type":"Feature","properties":{"FACILITY_T":"AIRPORT","LOC_IDENT":"Y00","INFO_EFF_D":"3/3/94","STATE":"IA","STATE_NAME":"IOWA","COUNTY":"LYON","CITY":"LARCHWOOD"},"geometry":{"type":"Point","coordinates":[-96.40617466596912,43.451333257494255]}},{"type":"Feature","properties":{"FACILITY_T":"AIRPORT","LOC_IDENT":"RRQ","INFO_EFF_D":"3/3/94","STATE":"IA","STATE_NAME":"IOWA","COUNTY":"LYON","CITY":"ROCK RAPIDS"},"geometry":{"type":"Point","coordinates":[-96.18008466096316,43.45218817521464]}}]}';
function processSuccess(data) {
    if (data.status === 'ok') {
        console.log('You just posted some valid GeoJSON!');
    } else if (data.status === 'error') {
        console.log('There was a problem with your GeoJSON: ' + data.message);
    }
}
function processError() {
    console.log('There was a problem with your ajax.');
}
$.ajax({
    url: 'http://geojsonlint.com/validate',
    type: 'POST',
    data: bad_geojson,
    dataType: 'json',
    success: processSuccess,
    error: processError
});
