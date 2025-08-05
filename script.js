
const alerts = {
    toggleContentBtn: ``,

    toggleContentBtn2: ``,

    toggleContentBtn3: ``,

    toggleContentBtn4: ``
};

// Attach alerts to buttons
for (let id in alerts) {
    document.getElementById(id).onclick = () => alert(alerts[id]);
}

// -------------------------
// Toggle Section Function
// -------------------------
function toggleSection(buttonId, sectionId, showText, hideText) {
    document.getElementById(buttonId).onclick = function () {
        const section = document.getElementById(sectionId);
        if (section.style.display === 'none') {
            section.style.display = '';
            this.textContent = hideText;
        } else {
            section.style.display = 'none';
            this.textContent = showText;
        }
    };
}

// Apply toggle to all buttons
toggleSection('toggleContentBtn', 'div1', 'Show Budget Section', 'Hide Budget Section');
toggleSection('toggleContentBtn2', 'div2', 'Show Cybersecurity Section', 'Hide Cybersecurity Section');
toggleSection('toggleContentBtn3', 'div3', 'Show Cloud Computing Section', 'Hide Cloud Computing Section');
toggleSection('toggleContentBtn4', 'div4', 'Show Digital Transformation Section', 'Hide Digital Transformation Section');
