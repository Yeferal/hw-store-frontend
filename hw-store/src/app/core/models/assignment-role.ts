import { Role } from "./role"

export interface AssignmentRole {
    accountId: number;
    roleId: number;
    role?: Role;
}
