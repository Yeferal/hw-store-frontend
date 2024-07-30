import { AssignmentRole } from "./assignment-role";
import { UserProfile } from "./user-profile";

export interface Account {
    id: number;
    username: string;
    creationDate: Date
    verified: boolean;
    active: boolean;
    assignmentRoleList?: Array<AssignmentRole>;
    userProfile?: UserProfile;
}

