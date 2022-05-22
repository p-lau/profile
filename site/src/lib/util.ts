import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
export const [ send, receive ] = crossfade({
    duration: d => Math.sqrt(d * 300),
    // fallback(node, _) {
    //     const style = getComputedStyle(node);
    //     const transform = style.transform === 'none' ? '' : style.transform;

    //     return {
    //         duration: 600,
    //         easing: quintOut,
    //         css: t => `
    //             transform: ${transform} scale(${t});
    //             opacity: ${t}
    //         `
    //     };
    // }
})

export const capitalize = ([first, ...rest]: string) => {
    return first.toLocaleUpperCase('en') + rest.join('');
}

export const switcher = () => {

}