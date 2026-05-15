const faqButtons = document.querySelectorAll('.faq-button');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const panelId = button.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);

        button.setAttribute('aria-expanded', String(!isExpanded));

        if (panel) {
            panel.classList.toggle('open', !isExpanded);
            if (!isExpanded) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            } else {
                panel.style.maxHeight = null;
            }
        }
    });
});

new p5((p) => {
    p.setup = function() {
        p.noCanvas();
        const faqSection = p.select('#faq');
        const waitMessage = p.select('#wait-message');
        const revealBtn = p.select('#reveal-faq-btn');
        const btnContainer = p.select('#faq-reveal-container');

        if (revealBtn) {
            revealBtn.mousePressed(() => {
                if (btnContainer) btnContainer.addClass('hidden');
                if (waitMessage) waitMessage.removeClass('hidden');
                window.setTimeout(() => {
                    if (faqSection) faqSection.removeClass('hidden');
                    if (waitMessage) waitMessage.addClass('hidden');
                }, 5000);
            });
        }

        const faq2Section = p.select('#faq2');
        const waitMessage2 = p.select('#wait-message2');
        const revealBtn2 = p.select('#reveal-faq2-btn');
        const btnContainer2 = p.select('#faq2-reveal-container');

        if (revealBtn2) {
            revealBtn2.mousePressed(() => {
                if (btnContainer2) btnContainer2.addClass('hidden');
                if (waitMessage2) waitMessage2.removeClass('hidden');
                window.setTimeout(() => {
                    if (faq2Section) faq2Section.removeClass('hidden');
                    if (waitMessage2) waitMessage2.addClass('hidden');
                }, 10000);
            });
        }

        const faq3Section = p.select('#faq3');
        const waitMessage3 = p.select('#wait-message3');
        const revealBtn3 = p.select('#reveal-faq3-btn');
        const btnContainer3 = p.select('#faq3-reveal-container');

        if (revealBtn3) {
            revealBtn3.mousePressed(() => {
                if (btnContainer3) btnContainer3.addClass('hidden');
                if (waitMessage3) waitMessage3.removeClass('hidden');
                window.setTimeout(() => {
                    if (faq3Section) faq3Section.removeClass('hidden');
                    if (waitMessage3) waitMessage3.addClass('hidden');
                }, 5000);
            });
        }
    };
});
