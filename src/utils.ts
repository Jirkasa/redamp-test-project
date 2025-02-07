import Papa from 'papaparse';
import { User } from './types';

export function parseCSVFile(file: File): Promise<string[][]> {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            complete: results => {
                if (results.errors.length > 0) {
                    reject(results.errors);
                } else {
                    resolve(results.data as string[][]);
                }
            },
            error: error => {
                reject(error);
            }
        })
    });
}

export function convertCSVDataToUsers(data: string[][]): User[] {
    return data.map(row => {
        const user: User = {
            email: row[0] || "",
            firstName: row[1] || "",
            lastName: row[2] || "",
            phone: row[3] || "",
            role: row[4] || "",
            location: row[5] || ""
        }
        return user;
    });
}