import { browser } from '$app/env';
import { writable } from 'svelte/store';

const themes = ['system', 'light', 'dark'];

const { subscribe, update, set } = writable('system', (set) => {
    if (browser) {
        set(localStorage.getItem('theme'))
    }
});

const { toggle, reset } = {
    toggle: () => {
        update((t) => {
            t = themes[themes.indexOf(t) + 1 % themes.length];
            localStorage.setItem('theme', t);
            return t
        })
    },
    reset: () => {
        set('system');
    }
}

export const themeAction = (node: HTMLElement, theme: string): SvelteActionReturnType => {
      return {
          update: (t) => {
              toggle();
              localStorage.setItem('theme', t);
          }
      }
}

export const themeStore = {
    subscribe,
    toggle,
    reset
}