import Papa from 'papaparse';
import { User } from '../types';

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

export function getCaret(element: HTMLElement): number {
    let caretAt = 0;
    const selection = window.getSelection();
    if (selection == null) { return caretAt; }
    
    if (selection.rangeCount == 0) { return caretAt; }
  
    const range = selection.getRangeAt(0);    
    const preRange = range.cloneRange();
    preRange.selectNodeContents(element);
    preRange.setEnd(range.endContainer, range.endOffset);
    caretAt = preRange.toString().length;
  
    return caretAt;   
}
  
export function setCaret(element: HTMLElement, offset: number): void {
    let selection = window.getSelection();
    if (selection == null) { return; }
    let range = document.createRange();
    
    const childNode = element.childNodes[0];
    if (!childNode) return;

    const maxOffset = childNode.textContent?.length || 0;
    if (offset > maxOffset) {
        offset = maxOffset;
    }

    range.setStart(childNode, offset);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}