<script>
    import { Observable } from "@nativescript/core"

    import { onMount } from "svelte";
    import { closeModal } from "svelte-native";
   
    let detect = '/native?token='

    onMount(() => {
         
    })
    
    function loaded(args){
        let page = args.object;
        let webView = page.getViewById('webview');

        webView.on('loadStarted', (e) => {
            let { url } = e

            // console.log(e.object)
            if(url.indexOf(detect) !== -1) {
                let token = url.slice(url.indexOf(detect) + detect.length)
                closeModal({token})
            }
        })
    }
</script>

<page on:loaded={loaded}>
    <webView id="webview" src="https://dev.tower-up.stream/native" />
</page>