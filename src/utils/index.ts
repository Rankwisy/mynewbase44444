


export function createPageUrl(pageName: string) {
    return '/' + pageName.toLowerCase().replace(/ /g, '-');
}

export const PHONE_NUMBER = "+32 2 88 60 447";
export const PHONE_HREF = "tel:" + PHONE_NUMBER.replace(/\s+/g, "");