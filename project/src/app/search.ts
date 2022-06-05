export interface Content {
    
    Title: string;
    Content: number;
    Link: string;
    Date: number;
   
}

export interface ContentSource {
    _source: Content;
}
