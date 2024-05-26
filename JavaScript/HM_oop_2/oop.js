//1
class Marker{
    constructor(col, ink, ){
        this.col = col
        this.ink = ink
    }
    print(line){
        let board = document.getElementById("board");
        for (let i = 0; i < line.length; i++) {
          if (this.ink != 0) {
            if (line[i] == " ") {
              this.ink += 0.5;
            }
            board.innerHTML += line[i];
            board.style.color = this.col;
            this.ink -= 0.5;
          } else {
            document.write("Marker is over");
            break;
          }
        }
    }
}

class FilledMarker extends Marker{
    fill(ink){
        if(ink>100){
            ink = 100
        }else{
            this.ink += ink
        }
    }
}

let marker = new FilledMarker("#48D1CC", 2);
marker.fill(25);
const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit placeat nostrum aspernatur suscipit similique. Temporibus quo suscipit quis in possimus. Voluptatem earum maiores consectetur amet?`;

marker.print(lorem);

//2
class ExtendedDate extends Date{
    
}