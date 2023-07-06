class Segment {

    constructor(xA, yA, xB, yB) {
        this.pointA = new Point(xA, yA);
        this.pointB = new Point(xB, yB);
    }

    // getLenght() {
    //     const deltaX = pointA.x - pointB.x;
    //     const deltaY = pointA.y - pointB.y;

    //     const lenght = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    //     return lenght;

    // }

    get lenght() {
        const deltaX = this.pointA.x - this.pointB.x;
        const deltaY = this.pointA.y - this.pointB.y;

        const lenght = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        return lenght;
    }

    static fromPoints(pointA, pointB) {

        const newSegment = newSegment(pointA.x, pointA.y, pointB.x, pointB.y);
        return newSegment;
    }
}