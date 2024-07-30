import { MeasurementUnit } from "./measurement-unit";

export interface AssignmentMeasure {
    productId: number;
    measurementId: number;
    price: number;
    isBase: boolean;
    equivalentValue?: number;

    measurementUnit?: MeasurementUnit;
}
