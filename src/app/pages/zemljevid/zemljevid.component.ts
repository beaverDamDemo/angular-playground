import { Component, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import * as MapColors from './map-colors-local';
import { legendInverted, ratiosBetweenGrades } from './results-map-settings';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-zemljevid',
  templateUrl: './zemljevid.component.html',
  styleUrls: ['./zemljevid.component.scss'],
})
export class ZemljevidComponent implements OnChanges {
  public map: L.Map;
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 21,
        attribution: '...',
      }),
    ],
    zoom: 16,
    center: L.latLng({ lat: 45.47165283353115, lng: 13.68345465782403 }),
  };
  mapLegend = new L.Control({ position: 'bottomright' });
  checkedRadioButton: string = '';
  extractingKeysLoopLimit: number = 3498;
  geojsonLoading: boolean = false;
  geoJsonStyleWeight: number = 5;
  geoJsonStyleOpacity: number = 0.8;
  grayscale: number = 50;
  loadGeojsons: Object[] = [];
  maxKeyValues: Object = {};
  newBrinkValues = new UntypedFormGroup({
    legend_0: new UntypedFormControl(undefined),
    legend_1: new UntypedFormControl(undefined),
    legend_2: new UntypedFormControl(undefined),
    legend_3: new UntypedFormControl(undefined),
    legend_4: new UntypedFormControl(undefined),
    legend_5: new UntypedFormControl(undefined),
  });
  newBrinkValuesApplied: boolean = false;
  radioButtonLayersControl: any;
  selectedGeojson: string = '';

  constructor() {}
  onMapReady(map: L.Map) {
    this.map = map;
    this.grayscaleChange();
    setTimeout(() => {
      map.invalidateSize();
    }, 0);

    const legendLabels = document.querySelectorAll(
      '#inputsLegendContainer > form > div > div > label'
    );
    for (let i = 0; i < legendLabels.length; i++) {
      (legendLabels[i] as HTMLElement).style.backgroundColor =
        MapColors.colorsAll[legendLabels.length - i - 1];
    }
    const inputsLegend = document.querySelectorAll(
      '#inputsLegendContainer > form > div > div > input'
    );
    for (let i = 0; i < inputsLegend.length; i++) {
      (inputsLegend[i] as HTMLElement).style.backgroundColor =
        MapColors.colorsAll[inputsLegend.length - i];
    }

    this.resetLayersAndButton();
    this.selectedGeojson = '';

    Object.entries(this.loadGeojsons).forEach((entry) => {
      entry[1]['response'] = undefined;
    });

    this.setLoadGeojsons();
  }

  onLoadClick(selectedKpi: string) {
    this.selectedGeojson = selectedKpi;
    this.resetLayersAndButton();
    this.setLoadGeojsons();

    if (this.radioButtonLayersControl)
      this.radioButtonLayersControl.remove(this.map);

    this.loadGeojsons.forEach((geojson, index) => {
      if (geojson['buttonValue'] == selectedKpi) {
        if (this.loadGeojsons[index]['response'] == undefined) {
          // this.toastrService.show("This might take a while", "Info", {
          //   status: "info",
          // });
          this.geojsonLoading = true;

          const geojsonRastline = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.68345465782403, 45.47165283353115],
                      [13.683488283250114, 45.47158829811323],
                      [13.683649331342252, 45.471635458618124],
                      [13.68359800832468, 45.47169875291837],
                      [13.68345465782403, 45.47165283353115],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683594468805609, 45.47170495823818],
                      [13.683649331342252, 45.471644146075306],
                      [13.683776754009614, 45.47169502972605],
                      [13.68373074026809, 45.47175211864547],
                      [13.683594468805609, 45.47170495823818],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683635173268527, 45.471609396238534],
                      [13.683700654361132, 45.47149770018967],
                      [13.683851083898617, 45.47151383407734],
                      [13.683792681842874, 45.471641663944894],
                      [13.683635173268527, 45.471609396238534],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683860665079834, 45.47173692372891],
                      [13.683873053395303, 45.47169472756539],
                      [13.684386283580011, 45.47180766428562],
                      [13.68441106020967, 45.47176174498716],
                      [13.68447123202364, 45.471776637736355],
                      [13.684437606598863, 45.471859788848946],
                      [13.683860665079834, 45.47173692372891],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.68388190217999, 45.47167362948139],
                      [13.683897830013251, 45.471642602858765],
                      [13.683996936531912, 45.47166990628742],
                      [13.683970390142719, 45.47170217395913],
                      [13.68388190217999, 45.47167362948139],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683966850624927, 45.471502362311185],
                      [13.683972159902254, 45.47145644276398],
                      [13.684078345457749, 45.471463889179404],
                      [13.684067726903095, 45.47151104978889],
                      [13.683966850624927, 45.471502362311185],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683936764717942, 45.471417969601305],
                      [13.68399339701412, 45.47141921067126],
                      [13.683995166772377, 45.47145147848647],
                      [13.683934994958378, 45.47144775527789],
                      [13.683936764717942, 45.471417969601305],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684205768125139, 45.471502362311185],
                      [13.684225235472752, 45.47145892490377],
                      [13.684304874639082, 45.47147381773294],
                      [13.684276558491632, 45.47152221940178],
                      [13.684205768125139, 45.471502362311185],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684342039584209, 45.47151849619826],
                      [13.684382744047127, 45.4714762998708],
                      [13.684435836824179, 45.47149491590156],
                      [13.684412829954113, 45.47153463007953],
                      [13.684342039584209, 45.47151849619826],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684338498590705, 45.47237482666873],
                      [13.684612811275201, 45.471502362381045],
                      [13.684747312978175, 45.47153587121605],
                      [13.684444684146229, 45.472472869463985],
                      [13.684365044978591, 45.47246666422919],
                      [13.684391591367813, 45.47239716554844],
                      [13.684338498590705, 45.47237482666873],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684460611979489, 45.47244680747207],
                      [13.68471368755337, 45.471672388486894],
                      [13.684807484793424, 45.47168852232414],
                      [13.684526093072066, 45.472460458993226],
                      [13.684460611979489, 45.47244680747207],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684835800942125, 45.4717617450664],
                      [13.684846419496807, 45.47157310323175],
                      [13.68490128203473, 45.47157434429866],
                      [13.68489420299656, 45.4716041298926],
                      [13.684961453848729, 45.47162522801244],
                      [13.684883584441934, 45.47176546825429],
                      [13.684835800942125, 45.4717617450664],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
            ],
          };
          const geojsonParcele = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683837895053841, 45.47173299765399],
                      [13.683883463369, 45.47164778349568],
                      [13.68449357247988, 45.47177382939259],
                      [13.684455598884227, 45.47186969509764],
                      [13.683837895053841, 45.47173299765399],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.683863210783954, 45.47163535642011],
                      [13.683911310672585, 45.471546591515335],
                      [13.684516356637488, 45.47167796352508],
                      [13.684463193603676, 45.47176495293073],
                      [13.683863210783954, 45.47163535642011],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.68389612123454, 45.47153416441745],
                      [13.683918905392119, 45.47146137707517],
                      [13.68449357247988, 45.47148090539565],
                      [13.684498635625857, 45.47166376116013],
                      [13.68389612123454, 45.47153416441745],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684306236072189, 45.47244843644401],
                      [13.684602430122737, 45.471543040916316],
                      [13.684749261360366, 45.47155369271269],
                      [13.684422688433614, 45.47249104293431],
                      [13.684306236072189, 45.47244843644401],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  coordinates: [
                    [
                      [13.684432814726563, 45.472487492394805],
                      [13.6847568560799, 45.47155369271269],
                      [13.684822676980133, 45.47156256920849],
                      [13.684972039791262, 45.47167796352508],
                      [13.684749261360366, 45.471832414009526],
                      [13.684551798660607, 45.47249814401269],
                      [13.684432814726563, 45.472487492394805],
                    ],
                  ],
                  type: 'Polygon',
                },
              },
            ],
          };

          this.loadGeojsons[index]['response'] = geojsonRastline;
          this.handleResponse(this.loadGeojsons[index]['response']);
          // this.simulationService
          //   .getGeojson(this.selectedSimulation["id"].toString(), selectedKpi)
          //   .subscribe((res) => {
          //     this.loadGeojsons[index]["response"] = res;
          //     this.handleResponse(this.loadGeojsons[index]["response"]);
          //   }),
          //   (error) => {
          //     this.toastrService.show(
          //       error["message"],
          //       "Error Getting Geojson",
          //       {
          //         status: "danger",
          //       }
          //     );
          this.geojsonLoading = false;
        } else {
          this.handleResponse(this.loadGeojsons[index]['response']);
        }
      }
    });
  }

  handleResponse(res) {
    if (res['message'] == 'Calculating...') {
      // this.toastrService.show(
      //   "Server says: Calculating the KPI visualization. GEOJSON loading will not be completed.",
      //   "Geojson not ready",
      //   {
      //     status: "danger",
      //     duration: 10000,
      //   }
      // );
      this.geojsonLoading = false;
      return;
    } else if (res['message'] == 'Calculating the KPI visualization.') {
      // this.toastrService.show(
      //   "Server says: Calculating the KPI visualization. GEOJSON loading will not be completed.",
      //   "Geojson not ready",
      //   {
      //     status: "danger",
      //     duration: 10000,
      //   }
      // );
      this.geojsonLoading = false;
      return;
    } else if (res['message'] == 'Please prepare visualizations first.') {
      // this.toastrService.show(
      //   "The visualization is not prepared yet, try again in a few minutes.",
      //   "Geojson not ready",
      //   {
      //     status: "danger",
      //     duration: 10000,
      //   }
      // );
      this.geojsonLoading = false;
      return;
    } else if (res['message'] && res['message'].length > 0) {
      // this.toastrService.show(
      //   "Geojson might not be ready",
      //   "API response contains a message",
      //   {
      //     status: "warning",
      //   }
      // );
    }

    // this.toastrService.show("", "Geojson Loaded", {
    //   status: "success",
    // });

    const keys = this.extractKeys(res);
    const propertyGeojsons = this.populatePropertyGeojsons(res, keys);
    let obj = {};

    for (let i = 0; i < propertyGeojsons.length; i++) {
      if (
        propertyGeojsons[i].myKey == 'link_id' ||
        propertyGeojsons[i].myKey == 'modes' ||
        propertyGeojsons[i].myKey == 'internal_travel_by_mode'
      )
        continue;
      obj[`${keys[i]}`] = propertyGeojsons[i];
    }

    this.radioButtonLayersControl = new L.Control.Layers(obj, null, {
      collapsed: false,
    });
    this.map.addControl(this.radioButtonLayersControl);
    this.addListenerToRadioButtonLayersControlAndSetLegend();
    this.geojsonLoading = false;
  }

  onApplyNewValuesSubmit() {
    // here we are forcing the user to make his choices again
    if (this.radioButtonLayersControl)
      this.radioButtonLayersControl.remove(this.map);
    this.resetLayersAndButton();

    this.selectedGeojson = undefined;

    // when the user will newly click on things, new geojsons will be created
    this.newBrinkValuesApplied = true;
  }

  setLegend(legendType) {
    if (this.map != undefined && legendType == undefined) {
      this.map.removeControl(this.mapLegend);
      return;
    }
    if (this.map == undefined) {
      return;
    }

    this.mapLegend.onAdd = (map) => {
      let direction: string;
      if (legendInverted.indexOf(legendType) == -1) {
        direction = 'lowToHigh';
      } else {
        direction = 'highToLow';
      }

      if (
        this.maxKeyValues['maxValue_' + legendType] == undefined ||
        this.maxKeyValues['maxValue_' + legendType] == 0
      ) {
        // this.toastrService.info(
        //   "Geojson not displayed because all values are undefined or zero!",
        //   "Geojson not displayed"
        // );
        let div = L.DomUtil.create('div');
        div.innerHTML += `<p style='background:white; display: inline; font-size:17px; padding: 0 7px; background: #ff3d71'>Values for ${legendType} kpi are undefined or zero!</p>`;
        return div;
      }

      var div = L.DomUtil.create('div');
      let grades;

      if (this.newBrinkValuesApplied == true) {
        grades = [
          0,
          this.newBrinkValues.get('legend_0').value,
          this.newBrinkValues.get('legend_1').value,
          this.newBrinkValues.get('legend_2').value,
          this.newBrinkValues.get('legend_3').value,
          this.newBrinkValues.get('legend_4').value,
        ];
      } else {
        grades = [
          0,
          this.limitMyDigits(
            this.maxKeyValues['maxValue_' + legendType] / ratiosBetweenGrades[0]
          ),
          this.limitMyDigits(
            this.maxKeyValues['maxValue_' + legendType] / ratiosBetweenGrades[1]
          ),
          this.limitMyDigits(
            this.maxKeyValues['maxValue_' + legendType] / ratiosBetweenGrades[2]
          ),
          this.limitMyDigits(
            this.maxKeyValues['maxValue_' + legendType] / ratiosBetweenGrades[3]
          ),
          this.limitMyDigits(
            this.maxKeyValues['maxValue_' + legendType] / ratiosBetweenGrades[4]
          ),
        ];
      }

      if (direction == 'lowToHigh') {
        div.innerHTML +=
          "<p style='background:white; display: inline; font-size:17px'> <span style='color:" +
          MapColors.getColorForLegend(0) +
          "'>&#9632</span> <" +
          grades[1] +
          '</p>';
        for (let i = 1; i < 6; i++) {
          div.innerHTML +=
            "<p style='background:white; display: inline; font-size:17px'> <span style='color:" +
            MapColors.getColorForLegend(i) +
            "'>&#9632</span> " +
            grades[i] +
            (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</p>' : '+</p>');
          this.newBrinkValues.get(`legend_${i - 1}`).setValue(`${grades[i]}`);
        }
      } else {
        for (let i = 5; i > 0; i--) {
          div.innerHTML +=
            "<p style='background:white; display: inline; font-size:17px'> <span style='color:" +
            MapColors.getColorForLegend(5 - i) +
            "'>&#9632</span> " +
            grades[i] +
            (grades[i + 1] ? '&ndash;' + grades[i + 1] + '</p>' : '+</p>');
          this.newBrinkValues.get(`legend_${i - 1}`).setValue(`${grades[i]}`);
        }
        div.innerHTML +=
          "<p style='background:white; display: inline; font-size:17px'> <span style='color:" +
          MapColors.getColorForLegend(5) +
          "'>&#9632</span> <" +
          grades[1] +
          '</p>';
      }

      return div;
    };
    this.mapLegend.addTo(this.map);
  }

  private highlightFeature(e, feature) {
    const layer = e.target;
    let text = '';
    if (feature['capacity']) {
      if (feature['capacity'] == '9999.0' || feature['capacity'] == '9999') {
        text += `<span style='display: inline-block; margin-bottom: 7px; font-weight: bold;'>Oops! Looks like you clicked on an transparent bus line with capacity of 9999!</span><br>`;
      }
      const tmp = this.limitMyDigits(feature['capacity']);
      if ('capacity' == this.checkedRadioButton) {
        text += `<u><strong>capacity:</strong> ${tmp}</u><br>`;
      } else {
        text += `<strong>capacity:</strong> ${tmp}<br>`;
      }
      text += `<span style='display: inline-block; margin-bottom: 7px; color: #666'>(unrounded) ${feature['capacity']}</span><br>`;
    }

    if (feature['cityWide']) {
      for (let p in feature['cityWide']['pollution']) {
        const tmp = this.limitMyDigits(feature['cityWide']['pollution'][p]);
        if (p == this.checkedRadioButton) {
          text += `<u><strong>${p}:</strong> ${tmp}</u><br>`;
        } else {
          text += `<strong>${p}:</strong> ${tmp}<br>`;
        }
        text += `<span style='display: inline-block; margin-bottom: 7px; color: #666'>(unrounded) ${feature['cityWide']['pollution'][p]}</span><br>`;
      }
      for (let p in feature['cityWide']['traffic']) {
        const tmp = this.limitMyDigits(feature['cityWide']['traffic'][p]);
        if (p == this.checkedRadioButton) {
          text += `<u><strong>${p}:</strong> ${tmp}</u><br>`;
        } else {
          text += `<strong>${p}:</strong> ${tmp}<br>`;
        }
        text += `<span style='display: inline-block; margin-bottom: 7px; color: #666'>(unrounded) ${feature['cityWide']['traffic'][p]}</span><br>`;
      }
    }

    Object.entries(feature).forEach((element) => {
      const tmp = this.limitMyDigits(element[1] as number).toString();
      if (element[0] == this.checkedRadioButton) {
        text += `<u><strong>${element[0]}:</strong> ${tmp}</u><br>`;
      } else {
        text += `<strong>${element[0]}:</strong> ${tmp}<br>`;
      }
      text += `<span style='display: inline-block; margin-bottom: 7px; color: #666'>(unrounded) ${element[1]}</span><br>`;
    });

    if (!text.length)
      text = "<span style='color: lightslategray';>No data available.</span>";
    layer.bindPopup(text);
    layer.setStyle({
      weight: 10,
      opacity: 1.0,
    });
  }

  private resetFeature(e, feature) {
    const layer = e.target;

    layer.setStyle({
      weight: this.geoJsonStyleWeight,
      opacity: this.geoJsonStyleOpacity,
    });
  }

  public extractKeys(jsonFile) {
    let allKeys = [];
    for (
      let f = 0;
      f < jsonFile['features'].length && f < this.extractingKeysLoopLimit;
      f++
    ) {
      let iterator;
      Object.keys(jsonFile['features'][f]['properties']).forEach((element) => {
        if (!allKeys.includes(element)) {
          allKeys.push(element);
        }
      });
      if (jsonFile['features'][f]['properties']['capacity']) {
        if (!allKeys.includes('capacity')) {
          allKeys.push('capacity');
        }
      }
      if (
        jsonFile['features'][f]['properties']['cityWide'] &&
        jsonFile['features'][f]['properties']['cityWide']['pollution']
      ) {
        iterator = Object.keys(
          jsonFile['features'][f]['properties']['cityWide']['pollution']
        );
        for (let g = 0; g < iterator.length; g++) {
          if (!allKeys.includes(iterator[g])) {
            allKeys.push(iterator[g]);
          }
        }
      }
      if (
        jsonFile['features'][f]['properties']['cityWide'] &&
        jsonFile['features'][f]['properties']['cityWide']['traffic']
      ) {
        iterator = Object.keys(
          jsonFile['features'][f]['properties']['cityWide']['traffic']
        );
        for (let g = 0; g < iterator.length; g++) {
          if (!allKeys.includes(iterator[g])) {
            allKeys.push(iterator[g]);
          }
        }
      }
    }
    jsonFile.allKeys = allKeys;
    return allKeys;
  }

  public populatePropertyGeojsons(jsonFile, keys) {
    let res = [];
    this.populateMaxKeyValues(jsonFile, keys);

    for (let f = 0; f < keys.length; f++) {
      let tmp: Object = {};

      if (
        this.maxKeyValues['maxValue_' + keys[f]] == undefined ||
        this.maxKeyValues['maxValue_' + keys[f]] == 0
      ) {
        tmp = L.geoJSON(<any>{
          type: 'FeatureCollection',
          features: [],
        });
      } else {
        if (keys[f] == 'capacity') {
          tmp = L.geoJSON(<any>jsonFile, {
            style: (feature) => ({
              weight: this.geoJsonStyleWeight,
              color: MapColors.getColorHighToLow(
                feature['properties']['capacity'],
                keys[f],
                this.maxKeyValues[`maxValue_${keys[f]}`],
                ratiosBetweenGrades,
                parseInt(feature['properties']['capacity']) == 9999
                  ? true
                  : false
              ),
              opacity: this.geoJsonStyleOpacity,
            }),
            onEachFeature: (feature, layer) =>
              layer.on({
                mouseover: (e) => this.highlightFeature(e, feature.properties),
                mouseout: (e) => this.resetFeature(e, feature.properties),
              }),
          });
        } else if (
          keys[f] == 'dailyInternalBikeTravels' ||
          keys[f] == 'pedestrianTravelTime'
        ) {
          tmp = L.geoJSON(<any>jsonFile, {
            style: (feature) => ({
              weight: this.geoJsonStyleWeight,
              color: MapColors.getColorHighToLow(
                feature['properties']['cityWide']['traffic'][keys[f]] ||
                  feature['properties'][keys[f]],
                keys[f],
                this.maxKeyValues[`maxValue_${keys[f]}`],
                ratiosBetweenGrades,
                parseInt(feature['properties']['capacity']) == 9999
                  ? true
                  : false
              ),
              opacity: this.geoJsonStyleOpacity,
            }),
            onEachFeature: (feature, layer) =>
              layer.on({
                mouseover: (e) => this.highlightFeature(e, feature.properties),
                mouseout: (e) => this.resetFeature(e, feature.properties),
              }),
          });
        } else {
          if (this.newBrinkValuesApplied) {
            tmp = L.geoJSON(<any>jsonFile, {
              style: (feature) => ({
                weight: this.geoJsonStyleWeight,
                color: MapColors.getNewColor(
                  this.newBrinkValues,
                  feature['properties'],
                  keys[f],
                  parseInt(feature['properties']['capacity']) == 9999
                    ? true
                    : false
                ),
                opacity: this.geoJsonStyleOpacity,
              }),
              onEachFeature: (feature, layer) =>
                layer.on({
                  mouseover: (e) =>
                    this.highlightFeature(e, feature.properties),
                  mouseout: (e) => this.resetFeature(e, feature.properties),
                }),
            });
          } else {
            tmp = L.geoJSON(<any>jsonFile, {
              style: (feature) => ({
                weight: this.geoJsonStyleWeight,
                color: MapColors.getColor(
                  feature['properties'],
                  keys[f],
                  this.maxKeyValues[`maxValue_${keys[f]}`],
                  ratiosBetweenGrades,
                  parseInt(feature['properties']['capacity']) == 9999
                    ? true
                    : false
                ),
                opacity: this.geoJsonStyleOpacity,
              }),
              onEachFeature: (feature, layer) =>
                layer.on({
                  mouseover: (e) =>
                    this.highlightFeature(e, feature.properties),
                  mouseout: (e) => this.resetFeature(e, feature.properties),
                }),
            });
          }
        }
      }
      tmp['myKey'] = keys[f];
      res.push(tmp);
    }
    return res;
  }

  public addListenerToRadioButtonLayersControlAndSetLegend() {
    this.map.on('baselayerchange', (e) => {
      this.setLegend(e['name']);
      this.checkedRadioButton = e['name'];
    });
  }

  public populateMaxKeyValues(jsonFile: Object, keys: Object[]) {
    for (let g = 0; g < jsonFile['features'].length; g++) {
      for (let f = 0; f < keys.length; f++) {
        if (
          jsonFile['features'][g]['properties']['cityWide'] &&
          jsonFile['features'][g]['properties']['cityWide']['pollution']
        ) {
          if (this.maxKeyValues[`maxValue_${keys[f]}`] == undefined) {
            this.maxKeyValues[`maxValue_${keys[f]}`] =
              jsonFile['features'][g]['properties']['cityWide']['pollution'][
                keys[f]
              ];
          }
          if (
            jsonFile['features'][g]['properties']['cityWide']['pollution'][
              keys[f]
            ] > this.maxKeyValues[`maxValue_${keys[f]}`]
          ) {
            this.maxKeyValues[`maxValue_${keys[f]}`] =
              jsonFile['features'][g]['properties']['cityWide']['pollution'][
                keys[f]
              ];
          }
        }
        if (
          jsonFile['features'][g]['properties']['cityWide'] &&
          jsonFile['features'][g]['properties']['cityWide']['traffic']
        ) {
          if (this.maxKeyValues[`maxValue_${keys[f]}`] == undefined) {
            this.maxKeyValues[`maxValue_${keys[f]}`] =
              jsonFile['features'][g]['properties']['cityWide']['traffic'][
                keys[f]
              ];
          }
          if (
            jsonFile['features'][g]['properties']['cityWide']['traffic'][
              keys[f]
            ] > this.maxKeyValues[`maxValue_${keys[f]}`]
          ) {
            this.maxKeyValues[`maxValue_${keys[f]}`] =
              jsonFile['features'][g]['properties']['cityWide']['traffic'][
                keys[f]
              ];
          }
        }
        if (jsonFile['features'][g]['properties']['capacity']) {
          const parsed = parseInt(
            jsonFile['features'][g]['properties']['capacity']
          );
          if (parsed != 9999) {
            if (this.maxKeyValues[`maxValue_capacity`] == undefined) {
              this.maxKeyValues[`maxValue_capacity`] = parsed;
            }
            if (parsed > this.maxKeyValues[`maxValue_capacity`]) {
              this.maxKeyValues[`maxValue_capacity`] = parsed;
            }
          }
        }
        if (jsonFile['features'][g]['properties'][keys[f]]) {
          if (this.maxKeyValues[`maxValue_${keys[f]}`] == undefined) {
            this.maxKeyValues[`maxValue_${keys[f]}`] =
              jsonFile['features'][g]['properties'][keys[f]];
          }
          if (
            jsonFile['features'][g]['properties'][keys[f]] >
            this.maxKeyValues[`maxValue_${keys[f]}`]
          ) {
            this.maxKeyValues[`maxValue_${keys[f]}`] =
              jsonFile['features'][g]['properties'][keys[f]];
          }
        }
      }
    }
  }

  public limitMyDigits(n: number): number {
    if (n > 1000) {
      return Math.round(n);
    } else if (n > 100) {
      return Math.round(n);
    } else if (n > 10) {
      return Math.floor(Math.round(n * 10)) / 10;
    } else if (n > 1) {
      return Math.floor(Math.round(n * 100)) / 100;
    } else if (n > 0.1) {
      return Math.floor(Math.round(n * 1000)) / 1000;
    } else if (n > 0.01) {
      return Math.floor(Math.round(n * 10000)) / 10000;
    } else if (n > 0.001) {
      return Math.floor(Math.round(n * 100000)) / 100000;
    } else if (n > 0.0001) {
      return Math.floor(Math.round(n * 1000000)) / 1000000;
    } else if (n > 0.00001) {
      return Math.floor(Math.round(n * 10000000)) / 10000000;
    } else {
      return n;
    }
  }

  grayscaleChange() {
    const el = <HTMLElement>(
      document.querySelectorAll('.leaflet-pane.leaflet-tile-pane')[0]
    );
    el.style.filter = 'grayscale(' + (100 - this.grayscale) + '%)';
  }

  setLoadGeojsons() {
    this.loadGeojsons = [
      {
        response: undefined,
        buttonValue: 'drevesa',
        buttonLabel: 'drevesa',
      },
      {
        response: undefined,
        buttonValue: 'parcele',
        buttonLabel: 'parcele',
      },
    ];
  }

  resetLayersAndButton() {
    if (this.map != undefined) {
      this.map.eachLayer((layer) => {
        if (layer['feature'] != undefined) {
          this.map.removeLayer(layer);
        }
      });

      if (this.radioButtonLayersControl)
        this.radioButtonLayersControl.remove(this.map);
    }
    this.setLegend(undefined);
  }

  ngOnChanges() {
    // this.resetLayersAndButton();
    // this.selectedGeojson = "";
    // Object.entries(this.loadGeojsons).forEach((entry) => {
    //   entry[1]["response"] = undefined;
    // });
    // this.setLoadGeojsons();
  }
}
