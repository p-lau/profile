import { browser } from '$app/env';
import { writable } from 'svelte/store';

const themes = ['system', 'light', 'dark'];

const { subscribe, update, set } = writable('system', () => {
    if (browser) {
        set(localStorage.getItem('theme') || 'system');
    }
});

const { toggle, reset } = {
    toggle: () => {
        update((t) => {
            return themes[(themes.indexOf(t) + 1) % themes.length]
        })
    },
    reset: () => {
        set('system')
    }
}

export const themeAction = (node: HTMLElement, theme: string): SvelteActionReturnType => {
    
    return {
        update: (t) => {
            localStorage.setItem('theme', t);
            document.documentElement.setAttribute("theme", localStorage.theme);
        }
    }
}

export const themeStore = {
    subscribe,
    toggle,
    reset
}