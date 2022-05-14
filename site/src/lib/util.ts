export const capitalize = ([first, ...rest]: string, locale = navigator.language || 'en') => {
    return first.toLocaleUpperCase(locale) + rest.join('');
}