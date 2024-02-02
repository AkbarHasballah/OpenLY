export let URLGeoJson = "https://asia-southeast2-bustling-walker-340203.cloudfunctions.net/function-GetGeoJson";
export let urlPostGCF = "https://asia-southeast2-bustling-walker-340203.cloudfunctions.net/function-PostGCFGIS";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`