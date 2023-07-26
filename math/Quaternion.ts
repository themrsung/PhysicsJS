import Vector from "./Vector";

/**
 * Quaternions are used to represent the rotation of vectors.
 */
export default class Quaternion {
    /**
     * Creates a new quaternion from four scalars.
     * @param w W value of quaternion
     * @param x X value of quaternion
     * @param y Y value of quaternion
     * @param z Z value of quaternion 
     */
    public Quaternion(w : number, x : number, y : number, z : number) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    /**
     * Creates a new quaternion from a scalar-vector notation.
     * @param s Scalar to use
     * @param v Vector to use
     * @returns Built quaternion
     */
    public static fromScalarVector(s : number, v : Vector) : Quaternion {
        const q : Quaternion = new Quaternion();

        q.w = s;
        q.x = v.getX();
        q.y = v.getY();
        q.z = v.getZ();

        return q;
    }

        

    private w : number;
    private x : number;
    private y : number;
    private z : number;
    
    /**
     * Gets the W value of this quaternion.
     * @returns W value
     */
    public getW() : number {
        return this.w;
    }
    
    /**
     * Gets the X value of this quaternion.
     * @returns X value
     */
    public getX() : number {
        return this.x;
    }

    /**
     * Gets the Y value of this quaternion.
     * @returns Y value
     */
    public getY() : number {
        return this.y;
    }

    /**
     * Gets the Z value of this quaternion.
     * @returns Z value
     */
    public getZ() : number {
        return this.z;
    }
}