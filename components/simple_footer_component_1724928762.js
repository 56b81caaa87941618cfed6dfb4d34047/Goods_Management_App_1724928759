<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 bg-opacity-70 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" data-mf-new="true" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14 rounded-lg shadow-lg">
            <hr id="footer-divider" class="my-8 border-pink-300 sm:mx-auto lg:my-10">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" data-mf-new="true" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-200 transition duration-300">
                        <img id="footer-logo" src="./images/logo.svg" alt="Landwind Logo" class="h-8 mr-4 sm:h-10">
                        Welcome to Good Findings
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" data-mf-new="true" class="flex-1 block text-sm text-center text-pink-100 hover:text-white transition duration-300">
                    © 2023 GoodFinder. Connecting you with quality goods since 2023. All rights reserved.
                </div>
            </div>
        </div>
    </footer>
</template>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
