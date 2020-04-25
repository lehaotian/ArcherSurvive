class Debugger{
        public static log(content){
            console.log(content);
        }

        public static error(content){
            console.error(content);
        }

        public static warn(content){
            console.warn(content);
        }

        public static exception(content){
            console.exception(content);
        }

        public static assert(test?: boolean, message?: string, ...optionalParams: any[]){
            console.assert(test,message,optionalParams);
        }
    }