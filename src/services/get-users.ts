import { IUser } from "../models/user.interface";

export const getUsers = async (): Promise<IUser[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    const data: IUser[] = await response.json() as IUser[];
    return data;
};
