
document.addEventListener('DOMContentLoaded', function() {

    const readMoreLinks = document.querySelectorAll('#blog .read-more');


    const explanations = {
        "5 Ways to Boost Immunity": `
            <div class="explanation-inner">
                <strong> How to boost your immune system naturally:</strong><br>
                • Eat vitamin C-rich foods (oranges, mangoes, bell peppers).<br>
                • Get 7–9 hours of quality sleep – rest strengthens immunity.<br>
                • Manage stress with meditation or light exercise.<br>
                • Stay hydrated – drink at least 2 litres of water daily.<br>
                • Include traditional immune boosters like ginger, garlic and honey.<br>
                ✅ Visit our nutrition clinic for a personalized immunity plan.
            </div>
        `,
        "Heart Health Month": `
            <div class="explanation-inner">
                <strong> Heart Health Month (March) at Mizan Teppi Hospital:</strong><br>
                • Free blood pressure & cholesterol screening every Monday.<br>
                • Discounted ECG and stress tests (50% off).<br>
                • Cardiology awareness walk – March 20th, starting at 8 AM.<br>
                • Talks on diet & exercise every Thursday at 3 PM.<br>
                Call our cardiology department to book your slot.
            </div>
        `,
        "Vaccination Drive": `
            <div class="explanation-inner">
                <strong> Childhood & adult vaccination drive:</strong><br>
                • Free measles, polio and TB vaccines for children under 5.<br>
                • Catch-up vaccinations every Wednesday (8 AM – 4 PM).<br>
                • COVID-19 & flu shots available for adults (small fee).<br>
                • Bring your immunization card / family health booklet.<br>
                 Protect your community – herd immunity saves lives.
            </div>
        `
    };

    // Loop through each "Read more" link and attach the toggle feature
    readMoreLinks.forEach(link => {
        // Find the parent container (blog-title or blog-card) that holds the heading
        const parentContainer = link.closest('.blog-title, .blog-card');
        if (!parentContainer) return;

        // Get the blog title from the <h3> inside the same container
        const titleElement = parentContainer.querySelector('h3');
        if (!titleElement) return;
        const blogTitle = titleElement.innerText.trim();

        // Get the matching explanation text (or a fallback message)
        const explanationHTML = explanations[blogTitle] || `
            <div class="explanation-inner">
            More information about "${blogTitle}" is coming soon. 
                Please contact our hospital directly.
            </div>
        `;

        // Create a hidden explanation div
        const explanationDiv = document.createElement('div');
        explanationDiv.className = 'blog-explanation';
        explanationDiv.style.display = 'none';
        explanationDiv.style.marginTop = '12px';
        explanationDiv.style.padding = '12px 15px';
        explanationDiv.style.backgroundColor = '#f0f9ff';
        explanationDiv.style.borderLeft = '4px solid #2c7da0';
        explanationDiv.style.borderRadius = '8px';
        explanationDiv.style.fontSize = '0.95rem';
        explanationDiv.style.lineHeight = '1.5';
        explanationDiv.innerHTML = explanationHTML;

        // Insert the explanation div right after the parent container
        parentContainer.insertAdjacentElement('afterend', explanationDiv);

        // Toggle function (show/hide explanation)
        let isExpanded = false;
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            if (isExpanded) {
                explanationDiv.style.display = 'none';
                link.textContent = 'Read more';
            } else {
                explanationDiv.style.display = 'block';
                link.textContent = 'Read less';
            }
            isExpanded = !isExpanded;
        });
