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
            const theme = themes[(themes.indexOf(t) + 1) % themes.length]
            updateBrowser(theme);
            return theme
        })
    },
    reset: () => {
        const theme = 'system';
        updateBrowser(theme);
        set(theme)
    }
}

const updateBrowser = (theme: string) => {
    if(browser){
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute("theme", localStorage.theme);
    }
}

export const themeStore = {
    subscribe,
    toggle,
    reset
}