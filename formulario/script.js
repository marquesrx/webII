window.addEventListener('DOMContentLoaded', (event) => {
    const categoryForm = document.getElementById('categoryForm');
    const productForm = document.getElementById('productForm');
    const productList = document.querySelector('#productList ul');
    const productCategorySelect = document.getElementById('productCategory');
    const navLinks = document.querySelectorAll('.nav-link');
    const formSections = document.querySelectorAll('.form-section');
    const ingredientContainer = document.getElementById('ingredientContainer');
    const addIngredientButton = document.getElementById('addIngredientButton');

    const apiUrl = 'http://localhost:3000'; // Endereço da API

    // Função para carregar as categorias
    function loadCategories() {
        fetch(`${apiUrl}/categories`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // Limpa as opções existentes
                productCategorySelect.innerHTML = '<option value="">Selecione uma categoria</option>';

                // Preenche as opções com as categorias retornadas da API
                data.forEach(category => {
                    const option = document.createElement('option');
                    option.id = category._id;
                    option.label = category.name;
                    option.icon = category.name;
                    productCategorySelect.appendChild(option);
                });
            })
            .catch(error => {
                console.log(error)
                console.error('Erro ao carregar as categorias:', error);
            });
    }

    // Função para cadastrar uma categoria
    function addCategory(category) {
        fetch(`${apiUrl}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: category.name, icon: category.icon })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Categoria cadastrada:', data);
                loadCategories(); // Recarrega as categorias após cadastrar uma nova
            })
            .catch(error => {
                console.error('Erro ao cadastrar a categoria:', error);
            });
    }

    // Função para cadastrar um produto
    function addProduct(product) {
        console.log(product)
        fetch(`${apiUrl}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Produto cadastrado:', data);
                loadProducts(); // Recarrega os produtos após cadastrar um novo
            })
            .catch(error => {
                console.error('Erro ao cadastrar o produto:', error);
            });
    }

    // Função para carregar os produtos
    function loadProducts() {
        fetch(`${apiUrl}/products`)
            .then(response => response.json())
            .then(data => {
                productList.innerHTML = ''; // Limpa a lista existente
                console.log(data)
                data.forEach(product => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Nome: ${product.name} # ${product.description} - Preço: ${product.price}`;
                    productList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar os produtos:', error);
            });
    }

    // Carrega as categorias e produtos ao carregar a página
    loadCategories();
    loadProducts();

    // Evento de envio do formulário de categoria
    categoryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const categoryNameInput = document.getElementById('categoryName');
        const categoryIconInput = document.getElementById('categoryIcon');
        const name = categoryNameInput.value;
        const icon = categoryIconInput.value;

        if (name && icon) {
            category = { name, icon }
            addCategory(category);

            categoryNameInput.value = '';
            categoryNameIcon.value = '';
        }
    });

    // Evento de envio do formulário de produto
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productNameInput = document.getElementById('productName');
        const productCategoryInput = document.getElementById('productCategory');
        const productDescriptionInput = document.getElementById('productDescription');
        const productUrlInput = document.getElementById('productUrl');
        const productPriceInput = document.getElementById('productPrice');

        const name = productNameInput.value;
        const categoryId = productCategoryInput.options[productCategoryInput.selectedIndex].id;
        const description = productDescriptionInput.value;
        const url = productUrlInput.value;
        const price = productPriceInput.value;
        const ingredients = [];

        const ingredientElements = ingredientContainer.getElementsByClassName('ingredient');
        for (let i = 0; i < ingredientElements.length; i++) {
            const ingredientName = ingredientElements[i].querySelector('.ingredientName').value;
            const ingredientIcon = ingredientElements[i].querySelector('.ingredientIcon').value;

            if (ingredientName && ingredientIcon) {
                ingredients.push({ name: ingredientName, icon: ingredientIcon });
            }
        }

        if (name && categoryId && description && url && price && ingredients) {
            const product = {
                name: name,
                description: description,
                imagePath: url,
                price: price,
                ingredients: ingredients,
                category: categoryId
            }

            addProduct(product);

            productNameInput.value = '';
            productDescriptionInput.value = '';
            productUrlInput.value = '';
            productPriceInput.value = '';
        }
    });
    // Adiciona um campo de ingrediente
    function addIngredientInput() {
        const ingredientElement = document.createElement('div');
        ingredientElement.classList.add('ingredient');

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Ingrediente:';
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.classList.add('ingredientName');
        nameInput.required = true;

        const iconLabel = document.createElement('label');
        iconLabel.textContent = 'Icone:';
        const iconInput = document.createElement('input');
        iconInput.type = 'text';
        iconInput.classList.add('ingredientIcon');
        iconInput.required = true;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.classList.add('removeIngredient');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => {
            ingredientElement.remove();
        });

        ingredientElement.appendChild(nameLabel);
        ingredientElement.appendChild(nameInput);
        ingredientElement.appendChild(iconLabel);
        ingredientElement.appendChild(iconInput);
        ingredientElement.appendChild(removeButton);

        ingredientContainer.appendChild(ingredientElement);
    }
    // Adiciona um campo de ingrediente quando o botão "Add Ingredient" é clicado
    addIngredientButton.addEventListener('click', () => {
        addIngredientInput();
    });

    // Atualiza a seção ativa com base no link de navegação clicado
    navLinks.forEach(link => {
        formSections.forEach(section => section.classList.remove('active'));
        const targetSection = document.getElementById('productList');
        link.classList.add('active');
        targetSection.classList.add('active');

        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove a classe "active" de todos os links e seções
            navLinks.forEach(link => link.classList.remove('active'));
            formSections.forEach(section => section.classList.remove('active'));

            // Adiciona a classe "active" ao link e à seção correspondente
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            link.classList.add('active');
            targetSection.classList.add('active');
        });
    });
});
