class Triangle {

    constructor(xA, yA, xB, yB, xC, yC){

        this.segmentAB = new Segment(xA,yA,xB,yB);
        this.segmentBC = new Segment(xB,yB,xC,yC);
        this.segmentCA = new Segment(xC,yC,xA,yA);
    }

    get perimeter() {
        return this.segmentAB.lenght + this.segmentBC.lenght + this.segmentCA.lenght;
    }

    get area(){
        const p = this.perimeter / 2;
        const pLessA = p - this.segmentAB.lenght;
        const pLessB = p - this.segmentBC.lenght;
        const pLessC = p - this.segmentCA.lenght;

        const multiplyPbyAllLess = p * pLessA * pLessB * pLessC;
        const area = Math.sqrt(multiplyPbyAllLess);
        return area; 
    }
 
    isRectangle(){

    }
}