import { MeasurementUnit } from "./measurement-unit";

export interface AssignmentMeasure {
    productId: number;
    measurementUnitId: number;
    price: number;
    isBase: boolean;
    equivalentValue?: number;

    measurementUnit?: MeasurementUnit;
}
