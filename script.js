document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-menu .nav-item');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Убираем класс active у всех кнопок меню
            tabs.forEach(item => item.classList.remove('active'));
            
            // 2. Скрываем все блоки с контентом
            contents.forEach(content => content.classList.remove('active'));

            // 3. Добавляем active нажатой кнопке
            tab.classList.add('active');

            // 4. Находим нужный блок контента по значению data-tab и показываем его
            const targetId = `tab-${tab.getAttribute('data-tab')}`;
            const targetContent = document.getElementById(targetId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
