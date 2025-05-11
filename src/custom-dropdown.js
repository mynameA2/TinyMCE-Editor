// Компонент custom-dropdown реализует выпадающий список, связанный с глобальными шаблонами.
// При изменении глобального списка вызывается setTemplates для обновления всех экземпляров.
class CustomDropdown extends HTMLElement {
    static templates = [];

    constructor() {
        super();
        this.selected = -1;
        this.isOpen = false;
    }

    connectedCallback() {
        // Читаем data-init при вставке, чтобы выставить selected из HTML
        const attr = this.getAttribute('data-init');
        if (attr !== null) {
            this.selected = parseInt(attr);
        }
        // Вызывается при подключении элемента к DOM. Инициализирует рендеринг и добавляет обработчик изменения.
        setTimeout(() => {
            this.render();
            const select = this.querySelector('select');
            if (select) {
                select.addEventListener('change', (e) => {
                    this.selected = parseInt(e.currentTarget.value);
                    this.render();
                });
                // Обработка события mousedown
                // select.addEventListener('mousedown', (e) => {
                //     // Программно устанавливаем фокус на выбранный элемент
                //     const selectedOption = select.querySelector(`option[value="${this.selected}"]`);
                //     if (selectedOption) {
                //         selectedOption.focus();  // Устанавливаем фокус на выбранный элемент
                //     }
                // });
            }
        });

        this.addEventListener('mousedown', e => {
            e.stopPropagation();
        });

        this.addEventListener('click', e => {
            e.stopPropagation();
        });
    }

    setTemplates(newTemplates) {
        // Обновляет глобальный список шаблонов и повторно рендерит компонент.
        CustomDropdown.templates = newTemplates;
        if (this.selected === -1 && newTemplates.length > 0) {
            this.selected = 0;
        }
        if (this.selected >= newTemplates.length) {
            this.selected = -1;
        }
        this.render();
    }
    render() {
        // Рендерит компонент в зависимости от доступных шаблонов. Показывает <select> или <span>ERROR.
        const templates = CustomDropdown.templates;
        const hasValid = this.selected >= 0 && this.selected < templates.length;

        this.innerHTML = `
            <style>
                select {
                    font-size: 14px;
                    padding: 2px;
                    }
            </style>
            ${hasValid ? `<select>
                ${templates.map((t, i) => `<option value="${i}" ${i === this.selected ? 'selected' : ''}>${t}</option>`).join('')}
                </select>` : '<span style="color:red">ERROR</span>'};
            `;
    }
}

customElements.define('custom-dropdown', CustomDropdown);