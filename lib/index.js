"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function canvas2dDrawing(canvas2dModel) {
  document.addEventListener("DOMContentLoaded", function () {
    var brush = {
      active: false,
      moviment: false,
      positionActual: {
        x: 0,
        y: 0
      },
      positionOld: null
    };
    var screen = document.getElementById(canvas2dModel.id);
    var context = screen.getContext("2d");
    screen.width = screen.clientWidth;
    screen.height = screen.clientHeight;
    context.lineWidth = canvas2dModel.line ? canvas2dModel.line.width : 3;
    context.strokeStyle = canvas2dModel.line ? canvas2dModel.line.color : "black";

    var drawingLine = function drawingLine(line) {
      context.beginPath();
      context.moveTo(line.positionOld.x, line.positionOld.y);
      context.lineTo(line.positionActual.x, line.positionActual.y);
      context.stroke();
    };

    document.onmousedown = function () {
      brush.active = true;
    };

    document.onmouseup = function () {
      brush.active = false;
    };

    screen.onmousemove = function (event) {
      brush.positionActual.x = event.clientX;
      brush.positionActual.y = event.clientY;
      brush.moviment = true;
    };

    var run = function run() {
      if (brush.active && brush.moviment && brush.positionOld) {
        drawingLine({
          positionActual: brush.positionActual,
          positionOld: brush.positionOld
        });
        brush.moviment = false;
      }

      brush.positionOld = _objectSpread({}, brush.positionActual);
      setTimeout(run, 10);
    };

    run();
  });
}