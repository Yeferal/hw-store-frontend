import { Client } from "./client";

export interface Sale {
    address: string;
    adviser: string;
    client?: Client;
    comment: string;
    date: Date;
    id: number;
    name: string;
    payment: number;
    pendingPayment: boolean;
    phone: string;
    total: number;
}
