document.addEventListener('DOMContentLoaded', function () {
    var btnMenu = document.querySelector('.btn-menu');
    var navbar = document.querySelector('.navbar');
    var body = document.body;

    if (btnMenu && navbar && body) {
        btnMenu.addEventListener('click', function (event) {
            event.stopPropagation();
            navbar.classList.toggle('active');
            btnMenu.classList.toggle('active');
            body.classList.toggle('active');
        });
    }

    var categoryBtns = document.querySelectorAll('[data-category-btn]');
    categoryBtns.forEach(function (categoryBtn) {
        categoryBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            var categoryBtn = this.getAttribute('data-category-btn');
            var categoryContent = document.querySelector('[data-category-content="' + categoryBtn + '"]');
            if (categoryContent) {
                categoryContent.style.display = categoryContent.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar') && !event.target.classList.contains('btn-menu')) {
            navbar.classList.remove('active');
            btnMenu.classList.remove('active');
            body.classList.remove('active');
        }
    });

    if (window.innerWidth < 768) {
        var tables = document.querySelectorAll('table');
        tables.forEach(function (table) {
            var tableContainer = document.createElement('div');
            tableContainer.classList.add('table-container');
            table.parentNode.insertBefore(tableContainer, table);
            tableContainer.appendChild(table);
        });
    }

    var checkboxInputs = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxInputs.forEach(function (checkboxInput) {
        checkboxInput.addEventListener('click', function () {
            var tr = this.closest('tr');
            tr.classList.toggle('active');
        });
    });

    var tabBtns = document.querySelectorAll('[data-tabBtn]');
    tabBtns.forEach(function (tabBtn) {
        tabBtn.addEventListener('click', function () {
            var tabBtnValue = this.getAttribute('data-tabBtn');
            var tabContents = document.querySelectorAll('[data-tabContent]');
            tabContents.forEach(function (tabContent) {
                if (tabContent.getAttribute('data-tabContent') === tabBtnValue) {
                    tabContent.classList.add('active');
                } else {
                    tabContent.classList.remove('active');
                }
            });
            tabBtns.forEach(function (btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    var theadCheckbox = document.querySelector('thead input[type="checkbox"]');
    if (theadCheckbox) {
        theadCheckbox.addEventListener('click', function () {
            var isChecked = this.checked;
            var tbodyCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
            tbodyCheckboxes.forEach(function (checkbox) {
                checkbox.checked = isChecked;
                var tr = checkbox.closest('tr');
                if (isChecked) {
                    tr.classList.add('active');
                } else {
                    tr.classList.remove('active');
                }
            });
        });
    }

    var dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(function (dropdownBtn) {
        dropdownBtn.addEventListener('click', function () {
            var dropdown = this.parentNode;
            var content = this.nextElementSibling;
            dropdown.classList.remove('show');
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                content.style.display = 'none';
            } else {
                var activeDropdown = document.querySelector('.dropdown.show');
                if (activeDropdown) {
                    activeDropdown.classList.remove('show', 'active');
                    activeDropdown.querySelector('.dropdown-content').style.display = 'none';
                }
                dropdown.classList.add('active');
                content.style.display = 'block';
            }
        });
    });

    function hideModals() {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function (modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
        });
        body.classList.remove('active');
        var modalTriggers = document.querySelectorAll('[data-modal]');
        modalTriggers.forEach(function (trigger) {
            trigger.classList.remove('active');
        });
    }

    function showModal(id) {
        var modal = document.querySelector(id);
        if (modal.classList.contains('active')) {
            modal.style.display = 'none';
            modal.classList.remove('active');
            body.classList.remove('active');
        } else {
            modal.classList.add('active');
            body.classList.add('active');
            modal.style.display = 'block';
        }
    }

    var modalTriggers = document.querySelectorAll('[data-modal]');
    modalTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            hideModals();
            this.classList.add('active');
            var modalId = '#' + this.getAttribute('data-modal');
            showModal(modalId);
        });
    });

    var modalCancels = document.querySelectorAll('.modal-cancel');
    modalCancels.forEach(function (cancel) {
        cancel.addEventListener('click', function () {
            hideModals();
        });
    });

    document.addEventListener('click', function (e) {
        var isInsideModalContent = e.target.closest('.modal-content');
        var isInsideNav = e.target.closest('.nav');
        var isInsideBtn = e.target.closest('.btn');
        var isNav = e.target.classList.contains('nav');
        var isBtnMenu = e.target.classList.contains('btn-menu');
        var isBtn = e.target.classList.contains('btn');
        var isModalContent = e.target.classList.contains('modal-content');

        if (!isInsideModalContent && !isInsideNav && !isInsideBtn && !isNav && !isBtnMenu && !isBtn && !isModalContent) {
            hideModals();
        }
    });
});
