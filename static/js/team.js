document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('team-modal');
    const modalImage = document.getElementById('team-modal-image');
    const modalText = document.getElementById('team-modal-text');
    const modalName = document.getElementById('modal-name');
    const modalSpec = document.getElementById('modal-spec');
    const closeBtn = document.getElementsByClassName('team-close')[0];
    const prevBtn = document.getElementsByClassName('team-prev')[0];
    const nextBtn = document.getElementsByClassName('team-next')[0];

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        const member = teamMembers[currentIndex];
        modalImage.src = member.img;
        modalName.textContent = member.name;
        modalSpec.textContent = member.spec;
        fetch(member.textFile)
            .then(response => response.text())
            .then(data => {
                modalText.innerHTML = data;
            });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex = (currentIndex === 0) ? teamMembers.length - 1 : currentIndex - 1;
        openModal(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex === teamMembers.length - 1) ? 0 : currentIndex + 1;
        openModal(currentIndex);
    }

    document.querySelectorAll('.button-link').forEach((btn, index) => {
        btn.addEventListener('click', () => openModal(index));
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

