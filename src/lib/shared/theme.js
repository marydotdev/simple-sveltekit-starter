export function toggleTheme(theme, $theme) {
    if ($theme.mode === 'light') {
        theme.set({...$theme, mode: 'dark' });
        updateDocument('theme', 'dark', 'light');
    } else {
        theme.set({...$theme, mode: 'light' });
        updateDocument('theme', 'light', 'dark');
    }
}

function updateDocument(name, twClass, other) {
    document.cookie = `${name}=${twClass};path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.getElementById('core').classList.remove(other);
    document.documentElement.classList.remove(other);
    document.getElementById('core').classList.add(twClass);
    document.documentElement.classList.add(twClass);
}