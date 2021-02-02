export class util {
    static equal(a, b = 0, accuracy = 0) {
        return Math.abs(a - b) <= Math.pow(10, -accuracy);
    }

    static degree(radian) {
        return (radian / Math.PI) * 180;
    }
    static rad(degree) {
        return (degree / 180) * Math.PI;
    }
}