class SupplementaryClass{
    static randomKeyGenerator() : string{
        return Math.random().toString(36).substring(7);
    }

    static rgbaToList(rgba: string) : number[]{
        let rgbaList : number[] = rgba.split('(')[1].split(')')[0].split(',').map((value) => parseInt(value));
        return rgbaList;
    }

    static sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}


export default SupplementaryClass;