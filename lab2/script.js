L.mapbox.accessToken = 'pk.eyJ1Ijoic2lyaWthdDkwMTIiLCJhIjoiY2pzbzhwcHo1MDIyeDN5cWs1NWZ3dmhqdiJ9.1Nprp7O1CUk7Kg4Qtd_u2g';

var map = L.mapbox.map('map', 'mapbox.light', { zoomControl: false })
    .setView([43.7032,-79.3832,], 11);

//add hexbin hot spots
      var bbox = [-80.1470,
       42.81005601494022,
       -78.9199, 44.05];

       map.scrollWheelZoom.disable();

       var layerGroup = L.layerGroup().addTo(map);
       var grid = turf.hex(bbox, 0.015);
       var grid = turf.count(grid, pts, 'pt_count');
       grid.features.forEach(function(cell) {

         var pt_count = cell.properties.pt_count;

         var _nohex = cell._nohex = {};
         _nohex.weight = 0;
         _nohex.color = '#cf3030';
         _nohex.fillOpacity = 0;

         var _nocount = cell._nocount = {};
         _nocount.weight = 0.5;
         _nocount.color = '#cf3030';
         _nocount.fillOpacity = 0;

          var _withCount = cell._withCount = {};
          _withCount.color = '#cf3030';
          _withCount.weight = 0;
          _withCount.fill = '#cf3030';
          _withCount.fillOpacity = 0;
          if(pt_count >= 1 &&pt_count<2) {
            _withCount.fillOpacity = 0.1;
              _withCount.weight = 0.5;
          } else if(pt_count >= 2 && pt_count <4) {
              _withCount.weight = 1;
            _withCount.fillOpacity = 0.25;
          } else if(pt_count >= 4 && pt_count<6) {
            _withCount.weight = 2;
            _withCount.fillOpacity = 0.45;
          } else if (pt_count >= 6 ) {
            _withCount.weight = 3;
            _withCount.fillOpacity = 0.65;
          } else {
            _withCount.weight=0;
            _withCount.fillOpacity = 0;
          }

          cell.properties = cell._nohex;
        });

      var hex = L.geoJson(grid)
            .eachLayer(function(l) {
                l.setStyle(l.feature.properties);
            })
            .addTo(layerGroup);


      function setStage(stage) {
          var fns = [];
          hex.eachLayer(function(l) {
                  l.setStyle(l.feature[stage]);
          });
      }

      function slowChain(fns) {
          function run() {
              var fn = fns.pop();
              if (!fn) return;
              fn();
              setTimeout(function() {
                  run();
              }, 0);
          }
          run();
      }

      function fastChain(fns) {
          for (var i = 0; i < fns.length; i++) fns[i]();
      }
      function setButton(t) {
          var stages = document.getElementById('steps').getElementsByTagName('a');
          for (var i = 0; i < stages.length; i++) {
              stages[i].className = stages[i].className.replace('fill-green', '');
          }
          t.className = t.className + ' fill-green';
      }

document.getElementById('raw').onclick = function() { setButton(this); setStage('_nohex'); };
document.getElementById('hex').onclick = function() { setButton(this); setStage('_nocount'); };
document.getElementById('count').onclick = function() { setButton(this); setStage('_withCount'); };

setStage('_withCount');
setButton(document.getElementById('count'));

//add symbols for each point
for (var i = 0; i < pts.features.length; i++) {
     pts.features[i].properties['marker-color'] = '000000';
     pts.features[i].properties['marker-symbol'] = 'danger';
     pts.features[i].properties['marker-size'] = 'small';

   }
   var ptsLayer = L.mapbox.featureLayer(pts)
         .addTo(map);

//add a radius search interactivity
  var RADIUS = 5000;
      var filterCircle = L.circle(L.latLng(40, -75), RADIUS, {
          opacity: 1,
          weight: 1,
          color: "#5296A5",
          fillOpacity: 0.1
      }).addTo(map);

      map.on('mousemove', function(e) {
          filterCircle.setLatLng(e.latlng);
          ptsLayer.setFilter(function showCases(feature) {
              return e.latlng.distanceTo(L.latLng(
                      feature.geometry.coordinates[1],
                      feature.geometry.coordinates[0])) < RADIUS;
          });
      });
