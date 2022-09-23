
export const debouncer = (fn, time) => {
    let t;
    return (args)=>{
        t && clearTimeout(t);
        t = setTimeout(fn, time, args);
    }
};