## Instruction to get meyvn running in the browser (console needed)

1. Navigate to "\meyvn\prototype_umsetzung\SpeechToText-WebSockets-Javascript-preview\samples\browser" in your console
2. Open console and enter: **echo 80478e57fa7d42c3a7eefcb24b2c09ab > speech.key**  
    Make sure the API Key is valid! Otherwise request a new one here: https://azure.microsoft.com/en-us/try/cognitive-services/
3. Followed by: **node sample-server.js enableTunnel**
4. Open **'Sample.html'** in the 'samples\browser' folder
5. Upon Start - Choose for Recognition Mode: **conversation**