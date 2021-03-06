import { addPaletteThemeEntry, addTextThemeEntry, addBrushPaletteThemeEntry, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";

let defaultFont = "\"Verdana\", Arial, sans-serif";
export let DataChartStylingDefaults = (function () {
    let DataChartStylingDefaults = {
        "ui-chart-category-axis-tick": {
            "height": "5px",
            "color": "rgba(102, 102, 102, 0.2470)"
        },
        "ui-chart-area-fill-opacity": {
            "opacity": "0.7"
        },
        "ui-chart-aligned-gridlines": {
            "visibility": "visible"
        },
        "ui-chart-axis-stroke": {
            /* transparent is treated as auto */
            "border-top-color": "transparent"
        },
        "ui-chart-axis-major-line": {
            /* transparent is treated as auto */
            "border-top-color": "transparent"
        },
        "font-family": defaultFont,
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": "11px",
        "color": "#666666",
        "font-variant": "",
        "line-height": "",
        "default-font-height": 13
    };
    addPaletteThemeEntry(DataChartStylingDefaults,
        "ui-chart-axis", null, "rgba(102, 102, 102, 0.2470)");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-chart-title", defaultFont, "16px", "#666", "0px", "0px", "0px", "5px");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-chart-subtitle", defaultFont, "11px", "#666", "0px", "0px", "0px", "5px");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-chart-horizontal-axis-title", defaultFont, "11px", "#666", "0px", "0px", "0px", "5px");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-chart-vertical-axis-title", defaultFont, "11px", "#666", "0px", "0px", "5px", "0px");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-horizontal-axis-labels", defaultFont, "12px", "#666", "0px", "5px", "0px", "5px", null, "top");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-vertical-axis-labels", defaultFont, "12px", "#666", "5px", "0px", "5px", "0px", "right");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-angular-axis-labels", null, null, "#666", "5px", "5px", "5px", "5px");
    addTextThemeEntry(DataChartStylingDefaults,
        "ui-radial-axis-labels", null, null, "#666", "0px", "5px", "0px", "5px", null, "top");
    addBrushPaletteThemeEntry(DataChartStylingDefaults,
        "ui-chart-palette",
        ["#7446B9", "#9FB328", "#F96232", "#2E9CA6", "#DC3F76", "#FF9800", "#3F51B5", "#439C47", "#795548", "#9A9A9A", "#C62828", "#9f725f"],
        null);
    addBrushPaletteThemeEntry(DataChartStylingDefaults,
        "ui-chart-marker-palette",
        ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
        ["#7446B9", "#9FB328", "#F96232", "#2E9CA6", "#DC3F76", "#FF9800", "#3F51B5", "#439C47", "#795548", "#9A9A9A", "#C62828", "#9f725f"],
    );
    return DataChartStylingDefaults;
})();