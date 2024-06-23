enum ToolTypes {
    SINGLE_ACTION_TOOL,
    SELECTABLE_TOOL,
    MENU_TOOL
}

type MenuEntry = {
    type: string
    label: string
    action: () => void
    icon?: string
    submenu?: MenuEntry[]
}

interface ToolbarEntry {
    name: string
    icon: string
    color?: string
    background_color?: string
    border_color?: string
}
interface Tool extends ToolbarEntry {
    selected_color?: string
    select_background_color?: string
    selected_border_color?: string
}
interface MenuToggle extends ToolbarEntry {
    
}

export class View {
    private tools : Tool[];

    public constructor(
        
    ){};

    public addTool(tool : Tool) : boolean {

        
        this.tools.push(tool);

        return true;
    }

    public getTools() : Tool[] {
        return this.tools;
    }
}