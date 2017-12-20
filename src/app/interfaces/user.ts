export interface User {
    ID: number;
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    Phone: string;
    Active?: boolean;
    OldAddressID?: number;
    NewAddressID?: number;
}
