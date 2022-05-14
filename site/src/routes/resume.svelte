
<svelte:head>
    <title>Resume - Panhavuth Lau</title>
</svelte:head>

<section>
    <object title="resume" data="/resume.pdf" type="application/pdf">
        <div>No online PDF viewer installed</div>
    </object>
</section>

<style>
    object {
        height: 100%;
        width: 100%;
    }
    section{
		box-sizing: border-box;
        border: 1px solid var(--border-color);
        border-width: 0 1px;
        padding: 1em;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        max-width: 40rem;
    }
</style>