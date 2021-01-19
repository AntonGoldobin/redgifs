declare const webdriver: any;
declare const chrome: any;
declare let options: any;
declare const Redgifs: {
    new (): {
        getRedgifsVideo(url: string): Promise<unknown>;
    };
};
