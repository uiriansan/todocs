// enum Shortcuts {
//     // Select neighbor panels
//     SELECT_PANEL_RIGHT = 'Ctrl+ArrowRight',
//     SELECT_PANEL_LEFT = 'Ctrl+ArrowLeft',
//     SELECT_PANEL_UP = 'Ctrl+ArrowUp',
//     SELECT_PANEL_DOWN = 'Ctrl+ArrowDown',
//     // Move selected panel
//     MOVE_PANEL_RIGHT = 'Alt+ArrowRight',
//     MOVE_PANEL_LEFT = 'Alt+ArrowLeft',
//     MOVE_PANEL_UP = 'Alt+ArrowUp',
//     MOVE_PANEL_DOWN = 'Alt+ArrowDown'
// }

type FN = () => void;

export class Shortcuts {
    private static shortcuts = new Map<string, Shortcuts>();

    public constructor(
        public readonly name : string,
        public readonly hotkey : string,
        private action : FN
    ){}

    public register() {
        const shortcut = new Shortcuts(this.name, this.hotkey, this.action);

        Shortcuts.shortcuts.set(this.name, shortcut);
    }

    public static handle() {
        window.onkeyup = (e : KeyboardEvent) => {
            let hotkey = '';

            if(e.ctrlKey) hotkey += 'Ctrl+';
            if(e.shiftKey) hotkey += 'Shift+';
            if(e.altKey) hotkey += 'Alt+';
            hotkey += e.code;
            
            Shortcuts.shortcuts.forEach(element => {
                if(element.hotkey == hotkey)
                    element.action();
            });
        };
    }
}
//                          WORK, BUT SUCKS!!!!!!