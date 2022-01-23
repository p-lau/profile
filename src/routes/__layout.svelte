<script>
    import "../app.css";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar>
<slot></slot>
<Footer></Footer></Navbar>
<slot></slot>