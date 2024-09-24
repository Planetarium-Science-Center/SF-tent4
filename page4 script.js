// Get the modal and close button elements
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Workshop data for Map 1
const workshops = {
    "workshopPSC": {
        title: "مركز القبة السماوية العلمي",
        description: "ورشة عمل: المقبرة الضائعة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "ساعة - الدخول كل 30 دقيقة والحجز مسبقا"
    }
};

// Function to open the modal with specific workshop data
function openModal(workshop) {
    document.getElementById('workshop-title').textContent = workshops[workshop].title;
    document.getElementById('workshop-description').textContent = workshops[workshop].description;
    document.getElementById('workshop-age').textContent = workshops[workshop].age;
    document.getElementById('workshop-time').textContent = workshops[workshop].time;
    modal.style.display = 'flex';
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('.popup-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const workshop = button.getAttribute('data-workshop');
        openModal(workshop);
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});