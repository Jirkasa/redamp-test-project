import { User } from "../types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class UsersValidationResult {
    private errors: Map<number, Map<keyof User, boolean>>;

    constructor(errors: Map<number, Map<keyof User, boolean>>) {
        this.errors = errors;
    }

    public containsErrors(): boolean {
        return this.errors.size > 0;
    }

    public isValid(index: number, key: keyof User): boolean {
        const userErrors = this.errors.get(index);
        if (!userErrors) return true;
        return !userErrors.has(key);
    }
}

export function validateUsers(users: User[]): UsersValidationResult {
    const errors = new Map<number, Map<keyof User, boolean>>();
    const usedEmailCounts = new Map<string, number>();

    for (let user of users) {
        usedEmailCounts.set(user.email, (usedEmailCounts.get(user.email) || 0) + 1);
    }

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const userErrors = new Map<keyof User, boolean>();

        if (!EMAIL_REGEX.test(user.email) || (usedEmailCounts.get(user.email) || 0) > 1) {
            userErrors.set("email", true);
        }
        if (user.firstName.trim() === "") {
            userErrors.set("firstName", true);
        }
        if (user.lastName.trim() === "") {
            userErrors.set("lastName", true);
        }
        if (!/^\+?\d+$/.test(user.phone) || user.phone.length < 9) {
            userErrors.set("phone", true);
        }

        if (userErrors.size > 0) {
            errors.set(i, userErrors);
        }
    }

    return new UsersValidationResult(errors);
}