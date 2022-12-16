// sunset N11 scheme: 35b499; 4a7ab7; 6da5cc; 98cae0; c2e3ee; eaebcc; fed98b; fdb366; f57d4a; dc3d2d; a50026
// cold-warm color scheme: 4575b5; 91bfdb; dff2f7; ffffbf; ffe291; fc8c58; d62f27;
// const color_0 = "#a50026";
// const color_1 = "#f57d4a";
// const color_2 = "#fed98b";
// const color_3 = "#c2e3ee";
// const color_4 = "#6da5cc";
// const color_5 = "#35b499";
const color_5 = "darkseagreen";
const color_4 = "cornflowerblue";
const color_3 = "lightblue";
const color_2 = "navajowhite";
const color_1 = "orange";
const color_0 = "red";
const color_capacity_equal_9999 = "#ffffff00";
const color_value_undefined = "#9efcff33";

export function getNewColor(
  bioSection,
  properties: any,
  pro: any,
  isCapacityEqual9999: boolean
): string {
  if (isCapacityEqual9999 == true) {
    return color_capacity_equal_9999;
  }
  let value = undefined;

  if (pro == "pedestrianTravelTime") {
    value = properties;
  } else {
    for (let key in properties) {
      if (key == pro) {
        value = properties[key];
      }
    }
  }

  if (value == undefined) return color_value_undefined;

  return value > bioSection.get("legend_4").value
    ? color_0
    : value > bioSection.get("legend_3").value
    ? color_1
    : value > bioSection.get("legend_2").value
    ? color_2
    : value > bioSection.get("legend_1").value
    ? color_3
    : value > bioSection.get("legend_0").value
    ? color_4
    : color_5;
}

export function getColor(
  properties: any,
  pro: any,
  max: number,
  ratiosBetweenGrades: number[],
  isCapacityEqual9999: boolean
): string {
  if (isCapacityEqual9999 == true) {
    return color_capacity_equal_9999;
  }
  let value = undefined;

  if (pro == "pedestrianTravelTime") {
    value = properties;
  } else {
    for (let key in properties) {
      if (key == pro) {
        value = properties[key];
      }
    }
  }

  if (value == undefined) return color_value_undefined;

  return value > max / ratiosBetweenGrades[4]
    ? color_0
    : value > max / ratiosBetweenGrades[3]
    ? color_1
    : value > max / ratiosBetweenGrades[2]
    ? color_2
    : value > max / ratiosBetweenGrades[1]
    ? color_3
    : value > max / ratiosBetweenGrades[0]
    ? color_4
    : color_5;
}

export function getColorHighToLow(
  properties: any,
  pro: any,
  max: number,
  ratiosBetweenGrades: number[],
  isCapacityEqual9999: boolean
): string {
  if (isCapacityEqual9999 == true) {
    return color_capacity_equal_9999;
  }
  let value = undefined;

  if (pro == "dailyInternalBikeTravels") {
    value = properties;
  } else if (pro == "capacity") {
    value = properties;
  } else {
    for (let key in properties) {
      if (key == pro) {
        value = properties[key];
      }
    }
  }

  if (value == undefined) return color_value_undefined;

  return value > max / ratiosBetweenGrades[4]
    ? color_5
    : value > max / ratiosBetweenGrades[3]
    ? color_4
    : value > max / ratiosBetweenGrades[2]
    ? color_3
    : value > max / ratiosBetweenGrades[1]
    ? color_2
    : value > max / ratiosBetweenGrades[0]
    ? color_1
    : color_0;
}

export function getColorForLegend(id: number): string {
  return id == 5
    ? color_0
    : id == 4
    ? color_1
    : id == 3
    ? color_2
    : id == 2
    ? color_3
    : id == 1
    ? color_4
    : color_5;
}

export const colorsAll = [color_0, color_1, color_2, color_3, color_4, color_5];
