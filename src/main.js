import './custom-dropdown.js'

let templates = ['template 1', 'template 2', 'template 3'];

function saveTemplatesToLocalStorage() {
    localStorage.setItem('templates', JSON.stringify(templates));
}

function loadTemplatesFromLocalStorage() {
    const saved = localStorage.getItem('templates');
    if (saved) {
        templates = JSON.parse(saved);
    }
}

loadTemplatesFromLocalStorage();

let selectedIndex = null

const templateListEl = document.getElementById('templates-list');
const templateEditEl = document.getElementById('template-edit');
const insertButtonEl = document.getElementById('insert-button');

// функция для отображения списка шаблонов
function renderTemplateList() {
    console.log(templates);
    templateListEl.innerHTML = '';
    templates.forEach((tp1, index) => {
        const div = document.createElement('div');
        div.className = 'template-item' + (selectedIndex === index ? ' selected' : '');
        div.textContent = tp1;
        div.onclick = () => {
            selectedIndex = index;
            templateEditEl.value = tp1;
            renderTemplateList();
        };
        templateListEl.appendChild(div);
    });
}

// функция для обновления компонентов в редакторе
function updateAllDropdowns() {
    document.querySelectorAll('custom-dropdown').forEach(dropdown => {
        dropdown.setTemplates(templates);
    });
}

// обработчик изменения текста в шаблоне
templateEditEl.addEventListener('input', (e) => {
    if (selectedIndex !== null) {
        templates[selectedIndex] = e.target.value;
        updateAllDropdowns();
        renderTemplateList();
        saveTemplatesToLocalStorage();
    }
});

// слушатель для изменения состояния фокуса
templateEditEl.addEventListener('blur', () => {
    renderTemplateList();
});

// добавление шаблона
document.getElementById('add-template').onclick = () => {
    templates.push('template');
    selectedIndex = templates.length - 1;
    renderTemplateList();
    updateAllDropdowns();
    saveTemplatesToLocalStorage();
};

// удаление шаблона
document.getElementById('remove-template').onclick = () => {
    if (selectedIndex !== null) {
        templates.splice(selectedIndex, 1);
        selectedIndex = null;
        templateEditEl.value = '';
        updateAllDropdowns();
        renderTemplateList();
        saveTemplatesToLocalStorage();
    }
};

// вставка custom-dropdown компонент в редактор
insertButtonEl.onclick = () => {
    if (templates.length > 0) {
        const dropdown = document.createElement('custom-dropdown');
        dropdown.setAttribute('data-init', '0')
        dropdown.setAttribute('contenteditable', 'false')
        dropdown.setTemplates(templates);
        const wrapper = document.createElement('div');
        wrapper.appendChild(dropdown);
        tinymce.activeEditor.insertContent('<custom-dropdown contenteditable="false" data-init="0"></custom-dropdown>');
    } else {
        tinymce.activeEditor.insertContent('<custom-dropdown contenteditable="false"></custom-dropdown>');
    }
};

//инициализация tinymce в inline режиме
// позволяет инициализировать редактор в див
// поддерживает добавление и редактирование кастомных элементов
tinymce.init({
    selector: '#editor',
    inline: true,
    menubar: false,
    toolbar: 'undo redo | bold italic underline | removeformat',
    extended_valid_elements: 'custom-dropdown[*]',
    content_style: 'custom-dropdown { display: inline-block; padding: 2px 4px;}',
    setup(editor) {
        editor.on('init', () => {
            updateAllDropdowns();
        });
    }
});

// начальный рендер шаблонов
renderTemplateList();
