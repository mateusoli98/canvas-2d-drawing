const brush = {
    active: false,
    moviment: false,
    positionActual: {
        x: 0,
        y: 0
    },
    positionOld: null
}

function canvas2dDrawing(canvas2dModel) {

    document.addEventListener("DOMContentLoaded", () => {

        const screen = document.getElementById(canvas2dModel.id);
        const context = screen.getContext("2d");

        screen.width = screen.clientWidth;
        screen.height = screen.clientHeight;

        context.lineWidth = canvas2dModel.line ? canvas2dModel.line.width : 3;
        context.strokeStyle = canvas2dModel.line ? canvas2dModel.line.color : "black";

        const drawingLine = (line) => {
            context.beginPath();
            context.moveTo(line.positionOld.x, line.positionOld.y);
            context.lineTo(line.positionActual.x, line.positionActual.y);
            context.stroke();
        }

        document.onmousedown = () => { brush.active = true };
        document.onmouseup = () => { brush.active = false }

        screen.onmousemove = (event) => {
            brush.positionActual.x = event.clientX;
            brush.positionActual.y = event.clientY;
            brush.moviment = true;
        };

        const run = () => {
            if (brush.active && brush.moviment && brush.positionOld) {
                drawingLine({ positionActual: brush.positionActual, positionOld: brush.positionOld });
                brush.moviment = false;
            }

            brush.positionOld = { ...brush.positionActual };
            setTimeout(run, 10);
        };

        run();
    });
}

module.exports = { canvas2dDrawing };