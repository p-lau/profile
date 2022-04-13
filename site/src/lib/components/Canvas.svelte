<script lang="ts">
    import { fade } from 'svelte/transition'
</script>

<svg transition:fade={{duration: 200}} id="dunes" x1="0%" x2="100%" y1="0%" y2="100%" xmlns='http://www.w3.org/2000/svg'>
	<filter id='noiseFilter'>
		<feTurbulence baseFrequency='0.002' seed="1337" result='noise'>
		</feTurbulence>
		<feDiffuseLighting in='noise' surfaceScale='100' result='dunes' lighting-color='#234'>
			<animate attributeName="lighting-color" values='#234;#888;#fa9;#e96;#a55;#234' dur="10s" repeatCount="indefinite"/>
			<feDistantLight elevation='100'>
					<animate attributeName="azimuth" values='0;360' dur="10s" repeatCount="indefinite"/>
			</feDistantLight>
		</feDiffuseLighting>
		<feTurbulence type="turbulence" id="turbulence" result="turbulence">
			<animate attributeName="baseFrequency"
			values=".002,.005;.005,.002;.02,.005;.005,.02;.002,.005"
			dur="20s"
			repeatCount="indefinite"/>
		</feTurbulence>
		<feDisplacementMap in="dunes" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="R" result="displace"/>
		<feDisplacementMap in="dunes" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="R" result="displace"/>
		<feGaussianBlur in="displace" stdDeviation="1.5" result="final"/>
	</filter>
	<rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>

<style>
    #dunes {
        opacity: 0.6;
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: -1;
	}
</style>