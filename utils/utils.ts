export const label2id = (label: string): string =>
    label.replace(/\s+/g, '-').toLowerCase();