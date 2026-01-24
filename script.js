// Balance toggle functionality
const balanceElement = document.querySelector('.balance h2');
const showBtn = document.querySelector('.unhidden-balance');
const hideBtn = document.querySelector('.hidden-balance');

showBtn.addEventListener('click', () => {
    balanceElement.textContent = 'R *******';
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';
});

hideBtn.addEventListener('click', () => {
    balanceElement.textContent = 'R 248,450.32';
    hideBtn.style.display = 'none';
    showBtn.style.display = 'block';
});

// Quick actions functionality (basic alerts for demonstration)
const actionItems = document.querySelectorAll('.action-item');

actionItems.forEach(item => {
    item.addEventListener('click', () => {
        const actionText = item.querySelector('p').textContent;
        alert(`You clicked: ${actionText}`);
    });
});