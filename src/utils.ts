export function holdKey(keyCode: string) {
    let holding = false;

    const keydown = (e: KeyboardEvent) => {
        if(e.code === keyCode) holding = true;
    };
    const keyup = (e: KeyboardEvent) => {
        if(e.code === keyCode) holding = false;
    };

    document.addEventListener('keydown', keydown);
    document.addEventListener('keyup', keyup);

    return {
        get holding() {
            return holding;
        },
        destroy() {
            document.removeEventListener('keydown', keydown);
            document.removeEventListener('keydown', keyup);
        }
    }
}