<script lang="ts">
    import Icon from '@iconify/svelte';

    export let icon:string;
    export let background_color:string = "var(--background-frame)";
    export let color:string = "var(--white)";
</script>

<button class="titlebar-button" id="titlebar-menu-button" on:click
    style="background-color: {background_color};">
    <div class="titlebar-icon"
        style="color: {color};">
        <Icon {icon} inline />
    </div>
</button>

<style>
    .titlebar-button {
        width: 35px;
        height: 35px;
        border-radius: var(--in-radius);
        font-size: var(--icon-size);
        text-align: center;
        box-sizing: border-box;
        flex-shrink: 0;
        cursor: pointer;
    }
    .titlebar-button:hover {
        transition: .5s;
        color: white;
        background-color: var(--background-body) !important;
    }
    .titlebar-button .titlebar-icon {
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
</style>