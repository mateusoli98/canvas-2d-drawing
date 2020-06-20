
document.addEventListener("DOMContentLoaded", () => {



    const brush = {
        active: false,
        moviment: false,
        positionActual: {
            x: 0,
            y: 0
        },
        positionOld: null
    }



    const screen = document.querySelector("#screen");




    const context = screen.getContext("2d");

    screen.width = 500;
    screen.height = 500;

    context.lineWidth = 3;
    context.strokeStyle = "red";



    const drawingLine = (line) => {
        context.beginPath();
        context.moveTo(line.positionOld.x, line.positionOld.y);
        context.lineTo(line.positionActual.x, line.positionActual.y);
        context.stroke();
    }



    screen.onmousedown = (event) => { brush.active = true };
    screen.onmouseup = (event) => { brush.active = false };

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