export interface PersonInterface {
    // Note is used string primitive instead the String Wrapper object beacause 
    // rarely you use the String object methods 
    name: string | null,
}

export interface ModalInterface {
    title: string;
    description: string;
}