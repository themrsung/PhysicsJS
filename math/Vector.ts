/**
 * Vectors have a direction and magnitude.
 */
export default class Vector {
    /**
     * Creates a new vector from three scalars.
     * @param x X value of vector
     * @param y Y value of vector
     * @param z Z value of vector
     */    
    public Vector(x : number, y : number, z : number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    private x : number;
    private y : number;
    private z : number;

    /**
     * Gets the X value of this vector.
     * @returns X value
     */
    public getX() : number {
        return this.x;
    }

    /**
     * Gets the Y value of this vector.
     * @returns Y value
     */
    public getY() : number {
        return this.y;
    }

    /**
     * Gets the Z value of this vector.
     * @returns Z value
     */
    public getZ() : number {
        return this.z;
    }

    /**
     * Gets the magnitude of this vector.
     * @returns Magnitude
     */
    public getMagnitude() : number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }

    public toUnitVector() : Vector {
        const m : number = this.getMagnitude();
        if (m === 0) return new Vector(0, 0, 0);
    }
}